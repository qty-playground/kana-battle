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
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          disabled={selectedOption !== null}
          className={`
            text-3xl py-6 rounded-lg transition-all duration-300
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