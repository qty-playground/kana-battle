"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { KanaItem, getKanaItemsFromLevel, gameLevels } from '@/data/kanaData';

// 定義答題記錄類型
export type AnswerLogItem = {
  kana: string;
  selected: string;
  correct: boolean;
  time: number;
};

// 定義遊戲狀態類型
type GameState = {
  levelId: string;
  kanaItems: KanaItem[];
  currentQuestion: number;
  score: number;
  isAudioPlaying: boolean;
  selectedOption: string | null;
  isCorrect: boolean | null;
  answerLog: AnswerLogItem[];
  toastMessage: string | null;
  showToast: boolean;
  isLoading: boolean;
  options: string[];
  totalQuestions: number;
  currentLevel: typeof gameLevels[0] | undefined;
};

// 定義遊戲操作函數類型
type GameActions = {
  loadLevelData: () => Promise<void>;
  generateOptions: (correctKana: string) => string[];
  playSound: () => void;
  checkAnswer: (selected: string) => void;
  resetGame: () => void;
};

// 創建 Context
type GameContextType = {
  state: GameState;
  actions: GameActions;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

// Context Provider
export function GameProvider({ children }: { children: ReactNode }) {
  // URL 參數
  const searchParams = useSearchParams();
  const levelId = searchParams.get('level') || 'level-1'; // 預設關卡 1
  
  // 遊戲狀態
  const [kanaItems, setKanaItems] = useState<KanaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answerLog, setAnswerLog] = useState<AnswerLogItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  
  // 遊戲常數
  const totalQuestions = 10;
  const currentLevel = gameLevels.find(level => level.id === levelId);

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startTimeRef = useRef<number>(0);
  const router = useRouter();

  // 加載關卡資料
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

  // 生成選項 (包含正確答案和干擾項)
  const generateOptions = (correctKana: string) => {
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
  };

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

  // 重置遊戲
  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setAnswerLog([]);
    setToastMessage(null);
    setShowToast(false);
    loadLevelData();
  };

  // 初始化關卡資料
  useEffect(() => {
    loadLevelData();
  }, [levelId]);

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
  }, [currentQuestion, isLoading, kanaItems]);

  // 處理 Toast 顯示
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
        setToastMessage(null);
      }, 1000);
    }
  }, [showToast]);

  // 組合 state 和 actions
  const state: GameState = {
    levelId,
    kanaItems,
    currentQuestion,
    score,
    isAudioPlaying,
    selectedOption,
    isCorrect,
    answerLog,
    toastMessage,
    showToast,
    isLoading,
    options,
    totalQuestions,
    currentLevel
  };

  const actions: GameActions = {
    loadLevelData,
    generateOptions,
    playSound,
    checkAnswer,
    resetGame
  };

  return (
    <GameContext.Provider value={{ state, actions }}>
      {children}
    </GameContext.Provider>
  );
}

// 使用 hook
export function useGameContext() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
}