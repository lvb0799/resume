import { ArrowUpRight, ChevronRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual'
export default function ProjectCard({ item, index, onOpen }) {
  return <button type="button" className="console-project" onClick={()=>onOpen(item.id)} style={{'--card-index':index}} aria-label={`查看作品：${item.title}`}><div className="console-project-visual"><ProjectVisual item={item}/></div><div className="console-project-info"><div className="console-project-meta"><span><i className="console-indicator"/> CASE {item.number}</span><span>{item.short}</span></div><div className="console-project-title"><h3>{item.title}</h3><ArrowUpRight size={19}/></div><p>{item.summary}</p><div className="console-project-bottom"><div className="portfolio-tech">{item.stack.slice(0,4).map(t=><span key={t}>{t}</span>)}</div><ChevronRight className="console-project-arrow" size={19}/></div></div></button>
}
