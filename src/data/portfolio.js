/**
 * 作品集資料。僅描述履歷中已提供的經歷，不包含公司內部機密、真實系統畫面或未經授權的連結。
 * 可新增 screenshot: '/resume/images/xxx.png'（建議改用 import.meta.env.BASE_URL 組路徑）
 * 或 links: [{ label: 'GitHub', href: 'https://...' }] 連到你有權公開的作品。
 */
export const portfolioFilters = ['全部', '企業系統', 'AI 應用', '金融系統', '系統整合']

export const portfolioItems = [
  {
    id: 'enterprise-modernization', number: '01', type: '企業系統', short: 'ENTERPRISE',
    title: '企業財會系統現代化', subtitle: 'Legacy to Web',
    summary: '參與將 Delphi 財會系統逐步翻新為 Web 應用，兼顧既有業務流程與現代化操作體驗。',
    role: '前端架構設計、前後端開發、需求討論、使用者教育訓練',
    background: '原有財會作業以舊式桌面系統為主，需要逐步轉型為易於維護的 Web 介面。',
    work: ['規劃與實作 Web 前端介面及操作流程', '與業務使用者討論需求，協調開發與導入', '參與 .NET Core 後端程式開發及系統維護'],
    stack: ['Angular', 'PrimeNG', '.NET Core', 'jQuery', 'Bootstrap'],
    visual: 'web', disclaimer: '企業內部系統，示意畫面非實際產品截圖。',
  },
  {
    id: 'enterprise-ai', number: '02', type: 'AI 應用', short: 'AI SYSTEM',
    title: '企業內部 AI 應用', subtitle: 'AI × Enterprise Web',
    summary: '參與開發組織內部 AI 軟體，將 Python 與 Web 技術整合到日常使用的企業系統。',
    role: '前後端功能開發與技術整合',
    background: '企業內部希望透過 AI 相關應用，將新技術導入既有資訊服務。',
    work: ['使用 React／Angular 開發使用者介面', '以 .NET Core 與 Python 參與服務端功能建置', '配合內部使用需求進行開發和維護'],
    stack: ['React', 'Angular', 'Python', '.NET Core'],
    visual: 'ai', disclaimer: '企業內部系統，示意畫面非實際產品截圖。',
  },
  {
    id: 'card-acquiring', number: '03', type: '金融系統', short: 'FINTECH',
    title: '信用卡收單與批次系統', subtitle: 'Financial Platform',
    summary: '參與信用卡及 Discover 卡收單系統開發與維運，涵蓋 Web 介面、批次流程及資料庫程式。',
    role: '系統開發與維護',
    background: '金融收單系統需支援既有作業流程、批次處理及日常維運需求。',
    work: ['參與信用卡收單系統 Web 與 Batch 功能開發', '參與 Discover 卡相關 UI 與批次程式開發', '維護既有系統及 MSSQL Stored Procedure'],
    stack: ['ASP.NET', 'C#', 'VB', 'MSSQL'],
    visual: 'finance', disclaimer: '企業內部系統，示意畫面非實際產品截圖。',
  },
  {
    id: 'energy-monitoring', number: '04', type: '系統整合', short: 'IoT / ENERGY',
    title: '智慧電表與能源監控平台', subtitle: 'Energy Management',
    summary: '參與智慧電表、校園節電與太陽能監控等專案，處理設備資料呈現與控制流程。',
    role: '應用程式開發、設備與系統整合',
    background: '需要整合現場設備、用電資訊及監控介面，支援能源管理作業。',
    work: ['開發智慧電表監控整合相關功能', '參與校園用電統計與排程控制功能', '參與太陽能設備資訊監控 Web 平台'],
    stack: ['C#', 'WCF', 'ASP.NET', 'JavaScript', 'Silverlight'],
    visual: 'energy', disclaimer: '企業專案，示意畫面非實際產品截圖。',
  },
]
