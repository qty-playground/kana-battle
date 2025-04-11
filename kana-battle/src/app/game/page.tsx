"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GamePage() {
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

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startTimeRef = useRef<number>(0);
  const router = useRouter();

  // 這裡之後會從資料檔案中匯入
  const mockQuestions = [
    { kana: "あ", romaji: "a", sound: "/sounds/a.mp3" },
    { kana: "い", romaji: "i", sound: "/sounds/i.mp3" },
    { kana: "う", romaji: "u", sound: "/sounds/u.mp3" },
    { kana: "え", romaji: "e", sound: "/sounds/e.mp3" },
    { kana: "お", romaji: "o", sound: "/sounds/o.mp3" },
  ];

  const totalQuestions = 5; // 遊戲題目總數

  // 生成選項 (包含正確答案和干擾項)
  const generateOptions = (correctKana: string) => {
    const options = [correctKana];
    const allKana = mockQuestions.map(q => q.kana);
    
    // 從所有假名中選擇不同於正確答案的選項
    while (options.length < 5) { // 生成5個選項
      const randomKana = allKana[Math.floor(Math.random() * allKana.length)];
      if (!options.includes(randomKana)) {
        options.push(randomKana);
      }
    }
    
    // 洗牌選項
    return options.sort(() => Math.random() - 0.5);
  };

  // 當前問題的選項
  const [options, setOptions] = useState<string[]>([]);

  // 初始化題目和計時
  useEffect(() => {
    if (currentQuestion < totalQuestions) {
      setOptions(generateOptions(mockQuestions[currentQuestion].kana));
      startTimeRef.current = performance.now();
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      // 遊戲結束時儲存結果並前往結果頁面
      localStorage.setItem('gameResults', JSON.stringify({
        score,
        answerLog,
        totalQuestions
      }));
      router.push('/result');
    }
  }, [currentQuestion]);

  // 播放音效
  const playSound = () => {
    // 實際應用時這裡會播放真正的聲音檔，目前只是模擬
    setIsAudioPlaying(true);
    setTimeout(() => {
      setIsAudioPlaying(false);
    }, 1000);
  };

  // 檢查答案
  const checkAnswer = (selected: string) => {
    const correct = selected === mockQuestions[currentQuestion].kana;
    const endTime = performance.now();
    const reactionTime = endTime - startTimeRef.current;
    
    setSelectedOption(selected);
    setIsCorrect(correct);
    
    // 記錄答題數據
    setAnswerLog(prev => [...prev, {
      kana: mockQuestions[currentQuestion].kana,
      selected,
      correct,
      time: reactionTime
    }]);
    
    // 更新分數
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    // 短暫延遲後進入下一題
    setTimeout(() => {
      setCurrentQuestion(prev => prev + 1);
    }, 1000);
  };

  if (currentQuestion >= totalQuestions) {
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
        {/* 遊戲資訊 */}
        <div className="flex justify-between mb-6">
          <div className="text-lg font-medium">
            問題 {currentQuestion + 1} / {totalQuestions}
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
              {mockQuestions[currentQuestion].romaji}
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
                ${selectedOption !== null && option === mockQuestions[currentQuestion].kana && !isCorrect 
                  ? 'ring-4 ring-success' 
                  : ''}
              `}
            >
              {option}
            </button>
          ))}
        </div>
        
        {/* 提示區 */}
        {selectedOption && (
          <div className={`text-center p-3 rounded-lg ${
            isCorrect ? 'bg-green-100 text-success' : 'bg-red-100 text-error'
          }`}>
            {isCorrect ? '答對了！' : '答錯了！正確答案是：' + mockQuestions[currentQuestion].kana}
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