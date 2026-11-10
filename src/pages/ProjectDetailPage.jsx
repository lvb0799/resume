import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Layers3, ShieldCheck, Terminal } from 'lucide-react'
import { portfolioItems } from '../data/portfolio'
import ProjectVisual from '../features/portfolio/components/ProjectVisual'
import ArchitectureDiagram from '../features/portfolio/components/ArchitectureDiagram'

export default function ProjectDetailPage({ projectId }) {
  const item = portfolioItems.find(project => project.id === projectId)
  useEffect(() => { window.scrollTo({top:0,behavior:'instant'}); document.title = item ? `${item.title} | LVB Portfolio` : '找不到專案 | LVB Portfolio'; return () => { document.title = 'LVB Portfolio' } }, [item])
  if (!item) return <main className="case-page"><div className="container case-not-found"><h1>找不到此專案</h1><p>這個專案不存在或已經移動。</p><a className="case-back" href="#portfolio"><ArrowLeft size={16}/> 回到作品集</a></div></main>
  return <main className="case-page" id="project-detail"><div className="container">
    <div className="case-breadcrumb"><a href="#portfolio"><ArrowLeft size={16}/> 返回作品集</a><span>/</span><span>CASE STUDY {item.number}</span></div>
    <header className="case-hero"><div><span className="case-eyebrow"><Terminal size={15}/> PROJECT / {item.short}</span><h1>{item.title}</h1><p>{item.summary}</p><div className="case-tags">{item.stack.map(t=><span key={t}>{t}</span>)}</div></div><div className="case-hero-meta"><span>CASE #{item.number}</span><strong>{item.subtitle}</strong><small>{item.type}</small></div></header>
    <div className="case-cover"><ProjectVisual item={item}/><span className="case-cover-badge">CONCEPT VISUAL / DEMONSTRATION</span></div>
    <div className="case-grid"><section className="case-panel"><div className="case-panel-title"><BriefcaseBusiness size={19}/> PROJECT CONTEXT</div><h2>專案背景</h2><p>{item.background}</p></section><section className="case-panel"><div className="case-panel-title"><Layers3 size={19}/> RESPONSIBILITIES</div><h2>參與角色</h2><p>{item.role}</p></section></div>
    <section className="case-section"><div className="case-section-title"><span>01 / TECHNICAL OVERVIEW</span><h2>系統架構示意</h2><p>點擊下方任一節點，可查看其在專案中的功能定位。</p></div><ArchitectureDiagram key={item.id} item={item}/></section>
    <section className="case-section"><div className="case-section-title"><span>02 / IMPLEMENTATION</span><h2>主要工作內容</h2></div><div className="case-task-list">{item.work.map((task,i)=><div className="case-task" key={task}><span>{String(i+1).padStart(2,'0')}</span><p>{task}</p></div>)}</div></section>
    <section className="case-section"><div className="case-section-title"><span>03 / TECHNOLOGY</span><h2>使用技術</h2></div><div className="case-tech-grid">{item.stack.map(t=><span key={t}>{t}</span>)}</div></section>
    {item.links?.length>0 && <section className="case-section"><div className="case-section-title"><span>04 / RESOURCES</span><h2>公開連結</h2></div><div className="case-link-list">{item.links.map(link=><a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={16}/></a>)}</div></section>}
    <div className="case-privacy"><ShieldCheck size={17}/><span>{item.disclaimer} 本頁僅呈現可公開分享的內容；架構圖為技術概念示意。</span></div>
    <div className="case-navigation"><a href="#portfolio"><ArrowLeft size={17}/> 所有作品</a></div>
  </div></main>
}
