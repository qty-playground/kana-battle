"use client";

import { gameLevels } from '@/data/kanaData';

type LevelInfoProps = {
  levelId: string;
  currentLevel?: typeof gameLevels[0];
};

export default function LevelInfo({ levelId, currentLevel }: LevelInfoProps) {
  return (
    <div className="text-center mb-4">
      <h1 className="text-2xl font-bold dark:text-white">
        {currentLevel?.name || '未知關卡'} (ID: {levelId})
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {currentLevel?.description || ''}
      </p>
    </div>
  );
}