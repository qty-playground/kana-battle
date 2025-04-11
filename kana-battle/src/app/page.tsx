import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <main className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary">假名大作戰</h1>
        <p className="text-xl mb-8 dark:text-gray-300">
          透過互動遊戲學習日文假名，提升記憶力與反應速度，讓學習更有趣！
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 text-primary">平假名</h2>
            <p className="dark:text-gray-300 mb-4">
              學習日常使用的基礎假名，最常見於一般詞彙和語法。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">あ</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">い</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">う</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">え</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">お</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 text-primary">片假名</h2>
            <p className="dark:text-gray-300 mb-4">
              主要用於外來語和特殊詞彙，形狀較為銳利。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">ア</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">イ</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">ウ</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">エ</span>
              <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded">オ</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/game" 
            className="px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-300 animate-bounce-slow">
            開始遊戲
          </Link>
          <Link href="#how-to-play" 
            className="px-8 py-4 text-lg font-medium border border-primary text-primary hover:bg-primary/10 rounded-full transition-colors duration-300">
            如何遊玩
          </Link>
        </div>
        
        <div id="how-to-play" className="mt-20 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">遊戲規則</h2>
          <ol className="list-decimal pl-6 space-y-4 text-left">
            <li className="dark:text-gray-300">系統會顯示羅馬拼音或播放發音</li>
            <li className="dark:text-gray-300">從選項中選擇對應的假名字符</li>
            <li className="dark:text-gray-300">答對得分，答錯扣分</li>
            <li className="dark:text-gray-300">完成所有關卡後查看總分與學習成果</li>
          </ol>
        </div>
      </main>
      
      <footer className="mt-16 mb-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} 假名大作戰 | 快樂學習日文
      </footer>
    </div>
  );
}
