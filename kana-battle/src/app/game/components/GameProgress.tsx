"use client";

type GameProgressProps = {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
};

export default function GameProgress({ currentQuestion, totalQuestions, score }: GameProgressProps) {
  return (
    <div className="flex justify-between mb-6">
      <div className="text-lg font-medium">
        問題 {currentQuestion + 1} / {totalQuestions}
      </div>
      <div className="text-lg font-medium">
        分數: <span className="text-primary">{score}</span>
      </div>
    </div>
  );
}