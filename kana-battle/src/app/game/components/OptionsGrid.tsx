"use client";

import { KanaItem } from '@/data/kanaData';

type OptionsGridProps = {
  options: string[];
  currentQuestion: KanaItem;
  selectedOption: string | null;
  isCorrect: boolean | null;
  onSelect: (selected: string) => void;
};

export default function OptionsGrid({ 
  options, 
  currentQuestion, 
  selectedOption, 
  isCorrect, 
  onSelect 
}: OptionsGridProps) {
  // 根據選項數量動態調整網格布局
  const getGridColumns = () => {
    // 5個及以下選項在小螢幕上使用2列，大螢幕使用5列
    if (options.length <= 5) {
      return 'grid-cols-2 md:grid-cols-5';
    }
    // 6-8個選項在小螢幕上使用2列，大螢幕使用4列
    else if (options.length <= 8) {
      return 'grid-cols-2 md:grid-cols-4';
    }
    // 9個及以上選項在小螢幕上使用3列，大螢幕使用5列
    else {
      return 'grid-cols-3 md:grid-cols-5';
    }
  };

  return (
    <div className={`grid ${getGridColumns()} gap-2 sm:gap-4 mb-6 w-full`}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          disabled={selectedOption !== null}
          className={`
            text-2xl sm:text-3xl py-4 sm:py-6 px-1 rounded-lg transition-all duration-300
            ${selectedOption === option 
              ? (isCorrect 
                  ? 'bg-success text-white' 
                  : 'bg-error text-white')
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
            }
            ${selectedOption !== null && option === currentQuestion.kana && !isCorrect 
              ? 'ring-4 ring-success' 
              : ''}
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}