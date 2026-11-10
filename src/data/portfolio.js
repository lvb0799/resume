/** 公開作品集目前僅收錄 BusanTravel；工作經歷另於履歷區塊呈現。 */
export const portfolioFilters = ['全部', '個人專案']

export const portfolioItems = [
  {
    id: 'busan-travel', number: '01', type: '個人專案', short: 'TRAVEL / PWA',
    title: 'BusanTravel｜釜山親子旅行手帳', subtitle: 'Family Trip Planner · React PWA',
    summary: '為五天四夜釜山親子旅行打造的行動優先行程工具，整合每日時間軸、互動地圖、交通攻略、韓文地址與旅行進度。',
    role: '個人專案：前端架構、UI/UX、互動設計、資料整合與 GitHub Pages 部署',
    background: '旅途中需要在手機上快速確認每日下一站、交通方式與韓文地址，同時兼顧親子行程、離線可用性及不同裝置的瀏覽體驗。',
    work: [
      '以 React 19 與 Vite 7 開發五日行程切換、景點詳細資訊與時間軸介面',
      '整合 React Leaflet 與 OpenStreetMap，呈現景點圖釘、示意連線及 Naver Map 搜尋入口',
      '使用 localStorage 保存打卡進度、住宿資訊與孩子年齡／身高等本機設定',
      '支援韓國當地時間的今日旅遊模式、行程提醒與手機底部導覽',
      '設計 RWD、Framer Motion 動畫及 PWA 安裝／部分離線快取，部署至 GitHub Pages',
    ],
    stack: ['React 19', 'Vite 7', 'Leaflet', 'Framer Motion', 'PWA', 'localStorage'],
    visual: 'travel',
    links: [
      { label: 'GitHub 原始碼', href: 'https://github.com/lvb0799/BusanTravel' },
      { label: '線上網站（GitHub Pages）', href: 'https://lvb0799.github.io/BusanTravel/' },
    ],
    disclaimer: '個人開發的旅行規劃網站；封面為概念視覺，非網站實際截圖。線上展示是否可用取決於 GitHub Pages 部署狀態。',
    architectureNote: 'BusanTravel 為純前端 SPA，無自建後端 API 或資料庫；地圖依賴公開圖磚，旅遊資料與設定主要在前端處理。',
  },
]
