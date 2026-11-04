import { useState } from 'react'
import { Monitor, Server, Database, Workflow, Cpu, ArrowRight, Info } from 'lucide-react'

const topology = {
  'enterprise-modernization': [
    { id:'ui', label:'Web UI', hint:'Angular / PrimeNG', detail:'操作介面與既有財會流程現代化。', Icon:Monitor },
    { id:'api', label:'Backend API', hint:'.NET Core', detail:'負責服務端業務邏輯與系統整合。', Icon:Server },
    { id:'data', label:'Business Data', hint:'資料存取層', detail:'與既有財會資料及企業作業流程銜接。', Icon:Database },
  ],
  'enterprise-ai': [
    { id:'ui', label:'Web UI', hint:'React / Angular', detail:'企業內部 AI 應用操作介面。', Icon:Monitor },
    { id:'api', label:'Application API', hint:'.NET Core', detail:'整合前端需求與服務端功能。', Icon:Server },
    { id:'data', label:'AI Service', hint:'Python', detail:'參與 AI 相關服務的功能建置與整合。', Icon:Cpu },
  ],
  'card-acquiring': [
    { id:'ui', label:'Operations UI', hint:'ASP.NET', detail:'金融收單作業使用者介面。', Icon:Monitor },
    { id:'api', label:'Batch Process', hint:'C# / VB', detail:'批次處理及作業流程開發維護。', Icon:Workflow },
    { id:'data', label:'Data Layer', hint:'MSSQL / SP', detail:'資料庫 Stored Procedure 與既有資料流程。', Icon:Database },
  ],
  'energy-monitoring': [
    { id:'ui', label:'Monitoring UI', hint:'ASP.NET / JS', detail:'設備監控、用電資訊與統計畫面。', Icon:Monitor },
    { id:'api', label:'Integration', hint:'C# / WCF', detail:'串接能源管理流程與設備資料。', Icon:Server },
    { id:'data', label:'Equipment', hint:'智慧電表 / 設備', detail:'智慧電表、太陽能等現場資料來源。', Icon:Cpu },
  ],
}

export default function ArchitectureDiagram({ item }) {
  const nodes = topology[item.id] ?? topology['enterprise-modernization']
  const [active, setActive] = useState(nodes[0].id)
  const current = nodes.find(node => node.id === active) ?? nodes[0]
  return <div className="architecture-console">
    <div className="architecture-heading"><span><Workflow size={17}/> SYSTEM FLOW / CONCEPTUAL</span><span className="architecture-live"><i/> INTERACTIVE</span></div>
    <div className="architecture-flow" role="group" aria-label="系統架構節點，點擊查看節點說明">
      {nodes.map((node,index)=> <div className="architecture-flow-part" key={node.id}>
        {index>0 && <div className="architecture-connector" aria-hidden="true"><ArrowRight size={20}/></div>}
        <button type="button" className={'architecture-node '+(current.id===node.id?'active':'')} onClick={()=>setActive(node.id)} aria-pressed={current.id===node.id}>
          <node.Icon size={25} strokeWidth={1.6}/><strong>{node.label}</strong><small>{node.hint}</small>
        </button>
      </div>)}
    </div>
    <div className="architecture-inspector" aria-live="polite"><Info size={17}/><div><strong>{current.label}</strong><p>{current.detail}</p></div></div>
    <p className="architecture-note">此為依可公開的專案描述繪製之概念架構，非實際企業系統拓樸或網路連線。</p>
  </div>
}
