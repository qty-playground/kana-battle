# 🎌 Kana Battle｜五十音互動學習遊戲

> [!NOTE]  
> [Demo Web](https://kana-battle-464419571270.asia-east1.run.app/)
> 這是一個 Vibe Coding 的實驗專案


Kana Battle 是一款專為日語初學者打造的五十音記憶練習遊戲。透過互動式題目與語音提示，讓你在趣味中快速記熟平假名，練習反應速度與聽力辨識能力。

> 本專案以 Next.js + Tailwind CSS 開發，支援部署至 Vercel 或 Cloud Run。

---

## 📚 功能特色

- 🎮 **單人挑戰模式**：根據提示點選正確假名，獲得即時回饋
- 🧠 **多種難度選擇**：從初級到進階，適合不同程度學習者
- 🔊 **語音辨識題型**：播放發音，訓練聽力與識字對應
- 📝 **成績統計頁面**：記錄答題正確率與平均反應時間
- 🎨 **簡潔 UI 設計**：使用 Tailwind 打造直覺的學習體驗

---

## 🛠️ 技術架構

| 面向 | 技術選型 |
|------|----------|
| 前端框架 | Next.js 15 + React 19 |
| UI 樣式 | Tailwind CSS |
| 音效播放 | HTML5 `<audio>` 元素 |
| 狀態管理 | React Context + useReducer |
| 假名資料 | TypeScript 模組與靜態 JSON |
| 容器化部署 | Dockerfile、Cloud Run 或 Vercel |

---

## 🚀 專案啟動方式

### 1️⃣ 安裝依賴

```bash
cd kana-battle
npm install
```

### 2️⃣ 開發模式啟動

```bash
npm run dev
# 或使用 yarn / pnpm / bun
```

瀏覽器開啟 [http://localhost:3000](http://localhost:3000)

---

## 📦 Docker 部署

若要將專案容器化部署，可使用下列指令：

```bash
# 建立映像檔
docker build -t kana-battle .

# 執行容器
docker run -p 8080:8080 kana-battle
```

亦可使用內附的 `deploy.sh` 腳本部署至 Google Cloud Run。

---

## 🗂️ 專案結構簡覽

```
kana-battle/
├── public/              # 靜態資源（包含語音檔）
├── src/
│   ├── app/             # Next.js App 路由
│   ├── data/            # 假名資料 kanaData.ts
│   └── styles/          # CSS 樣式
├── Dockerfile           # 容器化設定
├── deploy.sh            # Cloud Run 部署腳本
└── package.json         # 專案定義
```

---

## 🧑‍🎓 適合對象

- 日語初學者想快速掌握平假名
- 喜歡以遊戲化方式進行語言學習者
- 正在自學日語並需要互動式練習資源者

---

## 📄 授權條款

本專案以 [MIT License](./LICENSE) 開源授權，歡迎自由使用與修改。

---

## 🙌 貢獻方式

如果你對這個遊戲有任何建議、bug 回報、功能發想，歡迎開 PR 或提交 issue！

