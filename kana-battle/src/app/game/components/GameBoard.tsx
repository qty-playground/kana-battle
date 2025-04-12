"use client";

import Link from 'next/link';
import { useGameContext } from '@/contexts/GameContext';
import LevelInfo from './LevelInfo';
import GameProgress from './GameProgress';
import KanaQuestion from './KanaQuestion';
import OptionsGrid from './OptionsGrid';
import ResultToast from './ResultToast';

export default function GameBoard() {
  const { state, actions } = useGameContext();
  
  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">載入關卡中...</p>
        </div>
      </div>
    );
  }

  if (state.currentQuestion >= Math.min(state.kanaItems.length, state.totalQuestions)) {
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
        <LevelInfo 
          levelId={state.levelId} 
          currentLevel={state.currentLevel} 
        />
        
        {/* 遊戲資訊 */}
        <GameProgress 
          currentQuestion={state.currentQuestion}
          totalQuestions={Math.min(state.kanaItems.length, state.totalQuestions)}
          score={state.score}
        />
        
        {/* 題目 */}
        <KanaQuestion 
          currentQuestion={state.kanaItems[state.currentQuestion]}
          playSound={actions.playSound}
          isAudioPlaying={state.isAudioPlaying}
        />
        
        {/* 選項 */}
        <OptionsGrid 
          options={state.options}
          currentQuestion={state.kanaItems[state.currentQuestion]}
          selectedOption={state.selectedOption}
          isCorrect={state.isCorrect}
          onSelect={actions.checkAnswer}
        />
      </div>

      {/* Toast 通知 */}
      <ResultToast 
        message={state.toastMessage} 
        show={state.showToast} 
      />

      {/* 回到首頁按鈕 */}
      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">
          回到首頁
        </Link>
      </div>
    </div>
  );
}