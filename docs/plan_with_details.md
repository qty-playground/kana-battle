# 🧠 MVP with Next.js：計劃細節重新評估與調整

---

## ✅ 為什麼用 Next.js 是好選擇？

| 優點 | 說明 |
|------|------|
| 🌍 靜態與動態混合渲染 | 遊戲頁面可用 `CSR`，首頁與簡介可 `SSR` 或 `SSG` |
| 🧩 檔案式路由 | 自然對應頁面結構（`pages/index.tsx`, `pages/game.tsx`） |
| 📦 部署簡單 | 一鍵部署到 Vercel，支援自動 Preview Branch |
| 🎨 支援 Tailwind CSS | 開箱即用搭配 tailwind，快速建 UI |
| 🔈 客戶端音效 | 可以使用 HTML5 `<audio>` 或第三方音效 lib |

---

## 🧱 專案架構與初始設定

### 🧰 專案初始化指令
```bash
npx create-next-app@latest kana-battle --typescript
cd kana-battle
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 📂 資料夾建議結構

```
/public
  /sounds           → 假名音檔 mp3
/src
  /components       → UI 元件
  /pages            → Next.js 頁面（index.tsx, game.tsx, result.tsx）
  /data             → kana 資料（.ts or .json）
  /utils            → 題目生成與計分邏輯
  /styles           → tailwind/global css
```

---

## 🧩 MVP 開發功能順序與細項拆解

以下依照 **功能模組＋實作順序** 進行詳列。

---

### 🧱 1. 環境與 UI 架構

- [X] 設定 Tailwind 基礎樣式
- [X] 首頁 `/`：簡介、開始遊戲按鈕
- [X] `/game`：題目顯示、選項按鈕、音效播放
- [X] `/result`：成績統計、再玩一次

---

### 🗂️ 2. 假名資料與聲音資源

- [ ] 建立 `kanaData.ts`
```ts
export const kana = [
  { kana: "あ", romaji: "a", sound: "/sounds/a.mp3" },
  { kana: "い", romaji: "i", sound: "/sounds/i.mp3" },
  ...
]
```

- [ ] 將聲音檔放置於 `/public/sounds`

---

### 🎮 3. 遊戲核心邏輯（GameLoop）

#### 題目流程管理
- [ ] useState or useReducer 管理遊戲狀態
- [ ] 每題抽題 → 顯示提示（羅馬拼音或播放語音）
- [ ] 渲染 5~10 選項
- [ ] 玩家選擇 → 判斷對錯 → 記錄反應時間與正確性

#### 計時與音效
- [ ] 使用 `performance.now()` 或 `Date.now()` 記錄反應時間
- [ ] 使用 HTML5 `<audio>` 或 `new Audio()` 播放提示音

---

### 📊 4. 成績頁 `/result`

- [ ] 顯示：
  - 正確題數 / 總題數
  - 平均反應時間
  - 每題錯誤詳情（選錯什麼）
- [ ] 「再玩一次」按鈕 → 回到 `/game`

---

## 🔀 狀態管理建議

可以用 **簡單的 Context + useReducer** 來共享狀態（分數、結果）：

```ts
type GameState = {
  currentQuestion: number
  score: number
  answerLog: Array<{ correct: boolean, time: number }>
}
```

> 初期也可僅用 localStorage 管理分數，在頁面之間傳遞 params。

---

## ✨ UI 與互動設計建議

| 元素 | 設計風格 |
|------|----------|
| 假名選項 | 卡片式按鈕、大字 + hover 動畫 |
| 題目提示 | 上方播放提示語音，或顯示 `romaji` |
| 結果頁 | 淡入動畫 + emoji 激勵語 |
| 音效 | 自動播放題目、答題後播放正確音或錯誤音（可靜音） |

---

## 🏁 Bonus 與可選功能（可延後）

- [ ] 支援選擇難度（初級 / 中級 → 控制選項數與時間）
- [ ] 記錄歷史成績（localStorage）
- [ ] 每日挑戰（可搭配 localStorage 設定今日題庫）
- [ ] SEO 頁面設定（可加入介紹 metadata）

---

## 📌 總結

| 模組 | 重要性 | 備註 |
|------|--------|------|
| `kanaData.ts` | ⭐⭐⭐⭐ | 靜態資料即可上線 |
| `/game` 題目流程 | ⭐⭐⭐⭐⭐ | 核心邏輯 |
| `Audio` 播放 | ⭐⭐⭐⭐ | 注意要防止 autoplay 限制 |
| `/result` 統計畫面 | ⭐⭐⭐⭐ | 使用者學習回饋關鍵 |
| Tailwind + Next 架構 | ⭐⭐⭐⭐⭐ | 開發效率與維護關鍵 |

