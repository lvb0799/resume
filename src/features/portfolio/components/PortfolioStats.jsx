import { Boxes, Layers, Code2, Activity } from 'lucide-react'
export default function PortfolioStats({ items }) {
  const categories = new Set(items.map(item => item.type)).size
  const technologies = new Set(items.flatMap(item => item.stack)).size
  const stats = [
    { icon: Boxes, value: String(items.length).padStart(2, '0'), label: 'PROJECT CASES', detail: '精選案例' },
    { icon: Layers, value: String(categories).padStart(2, '0'), label: 'DOMAINS', detail: '應用領域' },
    { icon: Code2, value: `${technologies}+`, label: 'TECH STACK', detail: '技術項目' },
    { icon: Activity, value: 'READY', label: 'EXPLORER', detail: '可互動瀏覽' },
  ]
  return <div className="console-stats">{stats.map(({ icon: Icon, value, label, detail }) => <div className="console-stat" key={label}><div className="console-stat-head"><span>{label}</span><Icon size={15}/></div><strong>{value}</strong><small>{detail}</small></div>)}</div>
}
