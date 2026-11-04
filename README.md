# LVB Portfolio｜React 個人履歷與作品集

![React](https://img.shields.io/badge/React-18.3.1-149eca?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646cff?logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)
![License](https://img.shields.io/badge/License-Not%20specified-lightgrey)

> 以 React + Vite 製作的個人履歷與軟體工程作品集。結合模組化架構、深色科技風格、響應式設計與適度互動動畫，展示技術能力、工作經歷、代表專案及學歷背景。

**線上網站（部署完成後）：** https://lvb0799.github.io/resume/  
**GitHub 帳號：** https://github.com/lvb0799

> 📌 以上線上網址依 GitHub 帳號 `lvb0799`、Repository 名稱 `resume` 推算；實際是否已上線，須以 GitHub Actions 與 Pages 狀態為準。

## 目錄

- [專案介紹](#專案介紹)
- [主要特色](#主要特色)
- [網站內容](#網站內容)
- [技術架構](#技術架構)
- [專案目錄](#專案目錄)
- [本機開發](#本機開發)
- [如何修改履歷內容](#如何修改履歷內容)
- [動畫與樣式調整](#動畫與樣式調整)
- [部署到 GitHub Pages](#部署到-github-pages)
- [使用 GitHub Desktop 更新網站](#使用-github-desktop-更新網站)
- [常見問題](#常見問題)
- [公開資訊與隱私](#公開資訊與隱私)
- [後續擴充方向](#後續擴充方向)

## 專案介紹

LVB Portfolio 是一個以求職展示與個人技術品牌為目的的單頁式履歷網站，將傳統紙本履歷轉換為可互動、可持續維護的 Web Portfolio。

網站聚焦於**資深全端軟體工程師（Senior Full-Stack Engineer）**的技術經驗，包括 React／Angular 前端、C#／.NET Core／Python 後端、MSSQL／MySQL／SQLite 資料庫、企業系統現代化、AI 軟體整合及跨系統維運等。

本專案為**純前端網站**，不需要獨立 API、資料庫或伺服器即可部署到 GitHub Pages。網站中的企業專案描述為履歷經驗整理，不包含企業內部程式碼。

## 主要特色

| 功能 | 說明 |
| --- | --- |
| 模組化 React 架構 | 共用元件、頁面區塊、履歷資料與樣式獨立管理 |
| RWD 響應式排版 | 支援桌面與手機瀏覽 |
| 深色科技風格 | 深藍底色、亮色文字與螢光綠視覺點綴 |
| LVB 3D 品牌 Logo | 導覽列與頁尾使用個人品牌識別 |
| 頁面進場動畫 | 文字與各內容區塊分階段淡入 |
| 捲動動畫 | 使用 IntersectionObserver 顯示滾動區塊 |
| 卡片互動效果 | 專案／技能卡片 Hover、浮起與光暈 |
| 閱讀進度指示 | 頂端捲動進度條 |
| 無障礙動畫偏好 | 支援 `prefers-reduced-motion` 降低動態效果 |
| 自動部署 | Push 至 `main` 後，由 GitHub Actions 建置並發布 |

## 網站內容

1. **首頁 Hero：** 個人定位、簡介、主要技術與導覽按鈕。
2. **關於我 About：** 工程背景與工作理念。
3. **專業技能 Skills：** 前端、後端、資料庫及相關工程工具。
4. **代表專案 Projects：** 企業財會系統現代化、AI 應用、金融收單系統、能源監控平台。
5. **工作經歷 Experience：** 依時間整理任職與主要職責。
6. **學歷證照 Education：** 學歷及 Microsoft Azure Fundamentals 認證。
7. **聯絡方式 Contact：** GitHub 連結及可選擇是否顯示的 Email。

## 技術架構

| 類別 | 技術 |
| --- | --- |
| UI Framework | React `^18.3.1`、React DOM `^18.3.1` |
| 建置工具 | Vite `^6.0.5` |
| Vite React 插件 | `@vitejs/plugin-react` `^4.3.4` |
| 圖示 | `lucide-react` `^0.468.0` |
| 程式語言 | JavaScript / JSX |
| 樣式 | CSS 分檔、RWD Media Queries |
| 動畫 | CSS + IntersectionObserver（無額外動畫套件） |
| 版本控制 | Git / GitHub Desktop |
| CI/CD | GitHub Actions |
| 網站託管 | GitHub Pages |

> 表中版本為原始 `package.json` 宣告的相容版本範圍；實際安裝版本以 lockfile 或 npm 安裝結果為準。

## 專案目錄

```text
resume/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages 自動部署
├── public/
│   └── lvb-3d-logo.png       # LVB 品牌 Logo
├── src/
│   ├── components/           # 共用元件
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Eyebrow.jsx
│   │   ├── SectionTitle.jsx
│   │   └── ScrollMotion.jsx
│   ├── sections/             # 首頁及履歷內容區塊
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/                 # 履歷結構化資料
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experiences.js
│   │   └── education.js
│   ├── config/
│   │   └── navigation.js     # 導覽列選項
│   ├── styles/               # 模組化 CSS
│   │   ├── index.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── experience.css
│   │   ├── education.css
│   │   ├── contact.css
│   │   ├── motion.css
│   │   └── responsive.css
│   ├── data.js              # 資料匯出入口
│   ├── App.jsx              # 頁面組裝
│   └── main.jsx             # React 入口
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 本機開發

### 需求

- Node.js：建議使用與 GitHub Actions 一致的 Node.js 22（或符合 Vite 6 要求的相容版本）。
- npm（隨 Node.js 安裝）。
- VS Code（建議）。
- GitHub Desktop（選用，用於圖形化版控）。

### 安裝與啟動

在 VS Code 開啟專案根目錄，透過 Terminal 執行：

```bash
npm install
npm run dev
```

依終端機輸出開啟開發網址，通常是 `http://localhost:5173/`。

### 正式編譯與預覽

```bash
npm run build
npm run preview
```

- `npm run build`：將網站輸出至 `dist/`。
- `npm run preview`：在本機預覽正式編譯產物。
- `dist/` 為產生檔，不需提交至 GitHub；GitHub Actions 會自行建置。

## 如何修改履歷內容

本專案已將網站文案與資料拆分為獨立模組。大部分履歷維護不需要修改 JSX 元件。

| 修改項目 | 修改檔案 |
| --- | --- |
| 姓名、職稱、個人介紹、GitHub、Email | `src/data/profile.js` |
| 技術能力列表 | `src/data/skills.js` |
| 專案介紹與技術標籤 | `src/data/projects.js` |
| 工作經歷 | `src/data/experiences.js` |
| 學歷證照 | `src/data/education.js` |
| 導覽列標籤與錨點 | `src/config/navigation.js` |
| 導覽列與品牌標誌 | `src/components/Header.jsx` |
| 首頁結構 | `src/sections/Hero.jsx` |
| 網站主視覺 | `src/styles/hero.css` |
| 手機版樣式 | `src/styles/responsive.css` |

### Email 顯示設定

在 `src/data/profile.js` 中：

```js
showEmail: false, // 預設不顯示公開 Email
```

如要公開，可更改為 `true`。請確認公開的聯絡資料確實適合被搜尋引擎與訪客讀取。

### 新增代表專案

開啟 `src/data/projects.js`，依照現有 `projects` 陣列的資料格式新增物件，例如：

```js
{
  number: '05',
  tag: 'PERSONAL PROJECT',
  title: '新專案名稱',
  description: '描述你解決的問題與實際成果。',
  stack: ['React', 'Python', 'MSSQL'],
  icon: 'layers',
  category: '個人專案',
}
```

請使用現有元件支援的圖示代碼；如果新增圖示類型，可能還需調整 `Projects.jsx` 的圖示對應。企業專案說明避免放入未授權的程式碼、設定與客戶資料。

## 動畫與樣式調整

本專案動畫採輕量化實作，主要由 `src/components/ScrollMotion.jsx`、`src/styles/motion.css` 與各個 Section 的 CSS 協同處理。

- **首頁位置與間距：** `src/styles/hero.css`。
- **固定導覽列與版面：** `src/styles/layout.css`。
- **各區塊錨點捲動位置：** 檢查 `src/styles/base.css` 的 `scroll-margin-top`。
- **手機版間距與字級：** `src/styles/responsive.css`。
- **滾動淡入、卡片動態：** `src/styles/motion.css`。

網站尊重系統設定的 `prefers-reduced-motion`，避免對偏好較少動畫的使用者強制播放過多效果。

## 部署到 GitHub Pages

以下以 GitHub 使用者 **`lvb0799`**，Repository 名稱 **`resume`** 為例。

預期網址：**https://lvb0799.github.io/resume/**

### 1. 設定 Vite base

編輯根目錄 `vite.config.js`：

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/resume/',
})
```

> **重要：** V3.3 專案原始設定為 `base: './'`。部署到名為 `resume` 的 GitHub Pages 專案時，建議明確指定 `base: '/resume/'`，避免靜態資源路徑不一致。若 Repository 改為 `lvb0799.github.io`（個人網站根目錄），則使用 `base: '/'`。

### 2. 使用 GitHub Desktop 上傳

1. 開啟 GitHub Desktop 並登入 GitHub。
2. 使用 **File → Add local repository** 選擇本機 React 專案；尚未建立 Git Repository 時，依提示建立。
3. 確認 `.gitignore` 排除 `node_modules/`、`dist/` 與 `.env` 等檔案。
4. 在 **Changes** 頁面填寫 Commit 訊息，點選 **Commit to main**。
5. 使用 **Publish repository** 發布到 GitHub，Repository 名稱設為 `resume`。若已發布，則按 **Push origin** 即可。
6. 確認 Repository 為 **Public**；GitHub Free 使用 GitHub Pages 時，通常需要公開 Repository。

### 3. 啟用 Pages

在 GitHub Repository 中：

1. 開啟 **Settings → Pages**。
2. 在 **Build and deployment → Source** 選擇 **GitHub Actions**。
3. 前往 **Actions** 分頁查看部署執行狀態。

原專案已內建 `.github/workflows/deploy.yml`，會在 Push 到 `main` 時執行：

```text
Push to main
    ↓
Checkout repository
    ↓
Setup Node.js 22
    ↓
npm install
    ↓
npm run build
    ↓
Upload dist/
    ↓
Deploy to GitHub Pages
```

當 Actions 執行成功後，開啟 https://lvb0799.github.io/resume/ 確認網站。首次啟用後可能需要稍候才會對外生效。

> 提醒：V3.3 的 workflow 使用 `npm install`，而非 `npm ci`，因為原始專案壓縮包未包含 `package-lock.json`。首次安裝後建議將產生的 `package-lock.json` 提交至 GitHub，日後再考慮把 CI 安裝指令改為 `npm ci`，提高建置可重現性。

## 使用 GitHub Desktop 更新網站

當你修改 React 元件、履歷資料或樣式後：

1. 在 VS Code 儲存修改。
2. 開啟 GitHub Desktop，查看 **Changes**。
3. 輸入 Commit 訊息（例如 `Update project experience`）。
4. 點選 **Commit to main**。
5. 點選 **Push origin**。
6. 到 GitHub **Actions** 確認最新工作流程成功。
7. 重新整理公開網站查看更新。

不需要手動上傳 `dist/`，也不需要每次重新設定 Pages。

## 常見問題

### GitHub Pages 出現「Upgrade or make this repository public」

通常代表 Repository 是 Private，且目前方案無法從該私人儲存庫啟用 Pages。若履歷網站可公開，至 **Settings → General → Danger Zone → Change repository visibility** 改為 **Public**，並確認原始碼沒有密鑰或機密資訊。

### 首頁空白、CSS 沒載入或 JavaScript 404

- 確認 `vite.config.js` 的 `base` 為 `/resume/`。
- 檢查 **Actions** 是否成功編譯。
- 開啟瀏覽器開發者工具 **F12 → Console / Network**，查看 404 檔案。
- 使用 **Ctrl + F5** 強制重新整理。

### LVB Logo 無法顯示

- 確認 `public/lvb-3d-logo.png` 已提交。
- 確認圖片引用路徑能在 `/resume/` 下正確解析。
- **特別注意：** 若程式使用 `src="/lvb-3d-logo.png"`，在 GitHub Pages 子路徑部署時會指向網域根目錄，可能 404；請使用 `import.meta.env.BASE_URL` 或適合 Vite base 的引用方式。

### 為什麼 GitHub 看不到 `dist`、`node_modules`？

這是正常情況。`node_modules` 是可重新安裝的套件；`dist` 是 GitHub Actions 自動產生的正式編譯內容，都應由 `.gitignore` 排除。

### 點選上方導覽後標題太高或太低

檢查 `src/styles/base.css` 的 `scroll-margin-top`，以及 `src/styles/hero.css`／`src/styles/responsive.css` 的上方留白。固定式 Header 的高度也會影響視覺定位。

### 更新了程式但網站沒變

請依序檢查：變更是否已 Commit、是否已 Push origin、Actions 是否綠燈、是否打開正確的 Pages URL、是否需要強制重新整理。

## 公開資訊與隱私

- 網站預設不公開手機號碼、完整住址或履歷 PDF。
- `showEmail` 預設為 `false`；Email 是否公開由網站維護者決定。
- GitHub Pages 是公開網站，圖片、前端 JavaScript 與公開頁面內容都可能被任何人存取。
- 請勿把 API Key、密碼、Access Token 或公司內部機密放入 `src/`、`public/` 或前端 `.env` 變數中。
- 此網站的專案敘述為個人經歷展示，不表示企業原始碼可對外公開。

## 後續擴充方向

- 專案詳情頁（系統架構、負責功能、技術選型與成果）。
- 中英文切換與 SEO Meta Tags。
- Open Graph 社群分享預覽圖。
- 履歷 PDF 下載（須先移除敏感個資）。
- 技術文章與專案 Demo 連結。
- 更精緻的動態 Logo 與首頁 3D 特效（兼顧載入效能）。

---

**Maintained by [LVB / Shu-Tung Chang](https://github.com/lvb0799)**  
**Built with React · Vite · CSS · GitHub Pages**
