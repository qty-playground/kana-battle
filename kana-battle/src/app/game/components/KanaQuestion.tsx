"use client";

import { KanaItem } from '@/data/kanaData';

type KanaQuestionProps = {
  currentQuestion: KanaItem;
  playSound: () => void;
  isAudioPlaying: boolean;
};

export default function KanaQuestion({ currentQuestion, playSound, isAudioPlaying }: KanaQuestionProps) {
  return (
    <div className="text-center mb-8">
      <div className="text-2xl font-bold mb-4 dark:text-white">
        請選擇對應的假名：
      </div>
      
      <div className="mb-6">
        <div className="text-4xl font-bold text-primary">
          {currentQuestion.romaji}
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
  );
}