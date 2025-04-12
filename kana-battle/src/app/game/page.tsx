"use client";

import { Suspense } from 'react';
import { GameProvider } from '@/contexts/GameContext';
import GameBoard from './components/GameBoard';

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
      <GameProvider>
        <GameBoard />
      </GameProvider>
    </Suspense>
  );
}
