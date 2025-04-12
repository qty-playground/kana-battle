"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { KanaItem, getKanaItemsFromLevel, gameLevels } from '@/data/kanaData';

// 分離出主要的遊戲組件
function GameContent() {
  // 取得 URL 參數中的關卡 ID
  const searchParams = useSearchParams();
  const levelId = searchParams.get('level') || 'level-1'; // 預設關卡 1
  
  // 取得該關卡的假名資料
  const [kanaItems, setKanaItems] = useState<KanaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 取得當前關卡資訊
  const currentLevel = gameLevels.find(level => level.id === levelId);
  
  // 遊戲狀態
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answerLog, setAnswerLog] = useState<Array<{
    kana: string;
    selected: string;
    correct: boolean;
    time: number;
  }>>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startTimeRef = useRef<number>(0);
  const router = useRouter();

  // 題目總數 (根據關卡難度調整)
  const totalQuestions = 10;
  
  // 初始化關卡資料
  useEffect(() => {
    const loadLevelData = async () => {
      // 取得該關卡的所有假名項目
      const items = getKanaItemsFromLevel(levelId);
      
      // 如果沒有取得足夠的假名，轉到首頁
      if (items.length === 0) {
        router.push('/');
        return;
      }
      
      // 隨機抽取總題數的題目
      const shuffled = [...items].sort(() => Math.random() - 0.5);
      const selectedItems = shuffled.slice(0, totalQuestions);
      
      setKanaItems(selectedItems);
      setIsLoading(false);
    };
    
    loadLevelData();
  }, [levelId, router]);

  // 當前問題的選項
  const [options, setOptions] = useState<string[]>([]);
  
  // 生成選項 (包含正確答案和干擾項)
  const generateOptions = useRef((correctKana: string) => {
    const options = [correctKana];
    const allKana = Array.from(new Set(kanaItems.map(item => item.kana)));
    const otherKana = gameLevels.flatMap(level => 
      level.groups.flatMap(group => 
        group.items.map(item => item.kana)
      )
    );
    
    // 從所有假名中選擇不同於正確答案的選項
    const optionCount = currentLevel?.difficulty === 'advanced' ? 9 : 
                       currentLevel?.difficulty === 'intermediate' ? 7 : 5;
                       
    while (options.length < optionCount) {
      // 優先從當前關卡選擇選項
      let pool = allKana;
      
      // 如果當前關卡選項不足，則從全部假名中選擇
      if (allKana.length < optionCount) {
        pool = [...new Set([...allKana, ...otherKana])];
      }
      
      const randomKana = pool[Math.floor(Math.random() * pool.length)];
      if (!options.includes(randomKana)) {
        options.push(randomKana);
      }
    }
    
    // 洗牌選項
    return options.sort(() => Math.random() - 0.5);
  }).current;

  // 初始化題目和計時
  useEffect(() => {
    if (isLoading) return;
    
    if (currentQuestion < Math.min(kanaItems.length, totalQuestions)) {
      setOptions(generateOptions(kanaItems[currentQuestion].kana));
      startTimeRef.current = performance.now();
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      // 遊戲結束時儲存結果並前往結果頁面
      localStorage.setItem('gameResults', JSON.stringify({
        score,
        levelId,
        levelName: currentLevel?.name || '未知關卡',
        answerLog,
        totalQuestions: Math.min(kanaItems.length, totalQuestions)
      }));
      router.push('/result');
    }
  }, [currentQuestion, isLoading, kanaItems, generateOptions, score, levelId, currentLevel?.name, answerLog, router, totalQuestions]);

  // 播放音效
  const playSound = () => {
    if (isLoading || !kanaItems[currentQuestion]) return;
    
    // 使用Audio API播放音檔
    const soundPath = kanaItems[currentQuestion].sound;
    if (!audioRef.current) {
      audioRef.current = new Audio(soundPath);
    } else {
      audioRef.current.src = soundPath;
    }
    
    setIsAudioPlaying(true);
    
    audioRef.current.play()
      .then(() => {
        // 播放成功
      })
      .catch(error => {
        console.error('播放音檔失敗:', error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsAudioPlaying(false);
        }, 1000);
      });
  };

  // 檢查答案
  const checkAnswer = (selected: string) => {
    const correct = selected === kanaItems[currentQuestion].kana;
    const endTime = performance.now();
    const reactionTime = endTime - startTimeRef.current;
    
    setSelectedOption(selected);
    setIsCorrect(correct);
    
    // 記錄答題數據
    setAnswerLog(prev => [...prev, {
      kana: kanaItems[currentQuestion].kana,
      selected,
      correct,
      time: reactionTime
    }]);
    
    // 更新分數
    if (correct) {
      setScore(prev => prev + 1);
    }

    setToastMessage(correct ? '答對了！😊' : '答錯了！😢 正確答案是：' + kanaItems[currentQuestion].kana);
    setShowToast(true);
    setCurrentQuestion(prev => prev + 1);
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
        setToastMessage(null);
      }, 1000);
    }
  }, [showToast]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">載入關卡中...</p>
        </div>
      </div>
    );
  }

  if (currentQuestion >= Math.min(kanaItems.length, totalQuestions)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">計算成績中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {/* 關卡資訊 */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold dark:text-white">
            {currentLevel?.name || '未知關卡'} (ID: {levelId})
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {currentLevel?.description || ''}
          </p>
        </div>
        
        {/* 遊戲資訊 */}
        <div className="flex justify-between mb-6">
          <div className="text-lg font-medium">
            問題 {currentQuestion + 1} / {Math.min(kanaItems.length, totalQuestions)}
          </div>
          <div className="text-lg font-medium">
            分數: <span className="text-primary">{score}</span>
          </div>
        </div>
        
        {/* 題目 */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold mb-4 dark:text-white">
            請選擇對應的假名：
          </div>
          
          <div className="mb-6">
            <div className="text-4xl font-bold text-primary">
              {kanaItems[currentQuestion].romaji}
            </div>
          </div>
          
          <button 
            onClick={playSound}
            className="px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary/80 transition-colors mb-6 flex items-center mx-auto"
            disabled={isAudioPlaying}
          >
            {isAudioPlaying ? '播放中...' : '播放發音 🔊'}
          </button>
        </div>
        
        {/* 選項 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(option)}
              disabled={selectedOption !== null}
              className={`
                text-3xl py-6 rounded-lg transition-all duration-300
                ${selectedOption === option 
                  ? (isCorrect 
                      ? 'bg-success text-white' 
                      : 'bg-error text-white')
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
                }
                ${selectedOption !== null && option === kanaItems[currentQuestion].kana && !isCorrect 
                  ? 'ring-4 ring-success' 
                  : ''}
              `}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white p-4 rounded-lg shadow-lg z-50">
            {toastMessage}
          </div>
        )}
      </div>

      {/* 回到首頁按鈕 */}
      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">
          回到首頁
        </Link>
      </div>
    </div>
  );
}

// 使用 Suspense 包裝遊戲組件
export default function GamePage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">載入中...</p>
        </div>
      </div>
    }>
      <GameContent />
    </Suspense>
  );
}
