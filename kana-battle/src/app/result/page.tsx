"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type AnswerLog = {
  kana: string;
  selected: string;
  correct: boolean;
  time: number;
};

type GameResults = {
  score: number;
  answerLog: AnswerLog[];
  totalQuestions: number;
  levelId: string; // 新增關卡ID
  levelName: string; // 新增關卡名稱
};

export default function ResultPage() {
  const [results, setResults] = useState<GameResults | null>(null);
  const [averageTime, setAverageTime] = useState<number>(0);
  const [correctPercent, setCorrectPercent] = useState<number>(0);

  useEffect(() => {
    // 從 localStorage 中讀取遊戲結果
    const storedResults = localStorage.getItem('gameResults');
    if (storedResults) {
      const parsedResults: GameResults = JSON.parse(storedResults);
      setResults(parsedResults);
      
      // 計算平均反應時間 (毫秒)
      if (parsedResults.answerLog.length > 0) {
        const totalTime = parsedResults.answerLog.reduce((sum, log) => sum + log.time, 0);
        setAverageTime(totalTime / parsedResults.answerLog.length);
      }
      
      // 計算正確率
      setCorrectPercent(parsedResults.score / parsedResults.totalQuestions * 100);
    }
  }, []);

  // 顯示鼓勵訊息
  const getEncouragementMessage = () => {
    if (correctPercent >= 90) {
      return { emoji: "🎉", message: "太厲害了！你已經完全掌握了這些假名！" };
    } else if (correctPercent >= 70) {
      return { emoji: "👍", message: "很好的成績！繼續練習會更好的！" };
    } else if (correctPercent >= 50) {
      return { emoji: "💪", message: "不錯的開始！持續練習就能進步！" };
    } else {
      return { emoji: "🌱", message: "學習是一個過程，多練習幾次就會進步的！" };
    }
  };

  if (!results) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <p className="text-xl">找不到遊戲結果，請先完成遊戲</p>
          <div className="mt-8">
            <Link href="/game" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
              開始遊戲
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const encouragement = getEncouragementMessage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">遊戲結果</h1>
        
        {/* 分數摘要 */}
        <div className="text-center mb-10">
          <div className="text-6xl font-bold text-primary mb-2">
            {results.score} / {results.totalQuestions}
          </div>
          <p className="text-xl dark:text-gray-300">正確率：{correctPercent.toFixed(1)}%</p>
          <p className="text-xl dark:text-gray-300">平均反應時間：{averageTime.toFixed(0)} 毫秒</p>
          <p className="text-xl dark:text-gray-300 mt-2">關卡：{results.levelName}</p>
          
          <div className="mt-6 text-2xl">
            <span className="text-4xl mr-2">{encouragement.emoji}</span>
            <span className="dark:text-gray-300">{encouragement.message}</span>
          </div>
        </div>
        
        {/* 錯誤詳情 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">答題詳情</h2>
          <div className="rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-600">
                  <th className="p-3 text-left">假名</th>
                  <th className="p-3 text-left">你的選擇</th>
                  <th className="p-3 text-left">結果</th>
                  <th className="p-3 text-left">時間 (ms)</th>
                </tr>
              </thead>
              <tbody>
                {results.answerLog.map((log, index) => (
                  <tr key={index} className="border-t border-gray-200 dark:border-gray-600">
                    <td className="p-3 dark:text-gray-300">{log.kana}</td>
                    <td className="p-3 dark:text-gray-300">{log.selected}</td>
                    <td className="p-3">
                      <span className={log.correct ? "text-success" : "text-error"}>
                        {log.correct ? "✓" : "✗"}
                      </span>
                    </td>
                    <td className="p-3 dark:text-gray-300">{log.time.toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 按鈕區 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/game?level=${results.levelId}`} className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-center">
            再玩一次
          </Link>
          <Link href="/" className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors text-center">
            回到首頁
          </Link>
        </div>
      </div>
    </div>
  );
}