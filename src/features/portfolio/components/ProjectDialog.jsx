import { useEffect, useRef } from 'react'
import { X, ExternalLink } from 'lucide-react'
import ProjectVisual from './ProjectVisual'
export default function ProjectDialog({ item, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const priorFocus = document.activeElement
    closeRef.current?.focus()
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); priorFocus?.focus?.() }
  }, [onClose])

  return (
    <div className="portfolio-overlay" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <section role="dialog" aria-modal="true" aria-labelledby="portfolio-dialog-title" className="portfolio-dialog">
        <button type="button" ref={closeRef} className="portfolio-dialog-close" onClick={onClose} aria-label="關閉作品介紹"><X size={20} /></button>
        <div className="portfolio-dialog-visual"><ProjectVisual item={item} /></div>
        <div className="portfolio-dialog-inner">
          <span className="portfolio-kicker">CASE STUDY / {item.short}</span>
          <h2 id="portfolio-dialog-title">{item.title}</h2>
          <p className="portfolio-dialog-intro">{item.summary}</p>
          <div className="portfolio-detail-grid">
            <div><h3>專案背景</h3><p>{item.background}</p></div>
            <div><h3>參與角色</h3><p>{item.role}</p></div>
          </div>
          <h3>主要工作</h3>
          <ul className="portfolio-work-list">{item.work.map((task, i) => <li key={i}>{task}</li>)}</ul>
          <h3>使用技術</h3>
          <div className="portfolio-tech">{item.stack.map(t => <span key={t}>{t}</span>)}</div>
          {item.links?.length > 0 && <div className="portfolio-links">{item.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} />{link.label}</a>)}</div>}
          <p className="portfolio-privacy">{item.disclaimer} 專案資訊僅為公開可分享的個人參與概述。</p>
        </div>
      </section>
    </div>
  )
}

