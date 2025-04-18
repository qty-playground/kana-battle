"use client";

type GameProgressProps = {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
};

export default function GameProgress({ currentQuestion, totalQuestions, score }: GameProgressProps) {
  return (
    <div className="flex justify-between mb-4 sm:mb-6 text-base sm:text-lg font-medium">
      <div>
        問題 {currentQuestion + 1} / {totalQuestions}
      </div>
      <div>
        分數: <span className="text-primary">{score}</span>
      </div>
    </div>
  );
}