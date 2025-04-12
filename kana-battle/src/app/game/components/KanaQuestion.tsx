"use client";

import { KanaItem } from '@/data/kanaData';

type KanaQuestionProps = {
  currentQuestion: KanaItem;
  playSound: () => void;
  isAudioPlaying: boolean;
};

export default function KanaQuestion({ currentQuestion, playSound, isAudioPlaying }: KanaQuestionProps) {
  return (
    <div className="text-center mb-4 sm:mb-8">
      <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 dark:text-white">
        請選擇對應的假名：
      </div>
      
      <div className="mb-3 sm:mb-6">
        <div className="text-3xl sm:text-4xl font-bold text-primary">
          {currentQuestion.romaji}
        </div>
      </div>
      
      <button 
        onClick={playSound}
        className="px-3 sm:px-4 py-1 sm:py-2 bg-secondary text-white rounded-full hover:bg-secondary/80 transition-colors mb-4 sm:mb-6 flex items-center mx-auto text-sm sm:text-base"
        disabled={isAudioPlaying}
      >
        {isAudioPlaying ? '播放中...' : '播放發音 🔊'}
      </button>
    </div>
  );
}