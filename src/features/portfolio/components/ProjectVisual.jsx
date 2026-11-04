import { Layers3, BrainCircuit, CreditCard, Activity } from 'lucide-react'
const icons = { web: Layers3, ai: BrainCircuit, finance: CreditCard, energy: Activity }
export default function ProjectVisual({ item }) {
  const Icon = icons[item.visual] || Layers3
  return (
    <div className={`portfolio-art portfolio-art--${item.visual}`} aria-label={`${item.title} 的風格示意圖`}>
      <div className="portfolio-art-grid" aria-hidden="true" />
      <div className="portfolio-mock-window" aria-hidden="true">
        <div className="portfolio-mock-top"><i /><i /><i /><span>PROJECT / {item.number}</span></div>
        <div className="portfolio-mock-body">
          <span className="portfolio-mock-aside"><span /><span /><span /><span /></span>
          <span className="portfolio-mock-content"><span className="portfolio-mock-heading" /><span className="portfolio-mock-line" /><span className="portfolio-mock-metrics"><b /><b /><b /></span><span className="portfolio-mock-chart"><i /><i /><i /><i /><i /></span></span>
        </div>
      </div>
      <span className="portfolio-art-icon"><Icon size={23} strokeWidth={1.6} /></span>
      <span className="portfolio-art-label">CONCEPT VISUAL · 非產品截圖</span>
    </div>
  )
}

