import { useEffect, useMemo, useState } from 'react'
import { Terminal, CircleDot, Command, LayoutGrid } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { portfolioFilters, portfolioItems } from '../data/portfolio'
import PortfolioStats from '../features/portfolio/components/PortfolioStats'
import ProjectFilters from '../features/portfolio/components/ProjectFilters'
import ProjectCard from '../features/portfolio/components/ProjectCard'

export default function Portfolio() {
  const [filter, setFilter] = useState('全部')
  const [query, setQuery] = useState('')
  const visible = useMemo(() => portfolioItems.filter(item => {
    if (filter !== '全部' && item.type !== filter) return false
    const searchable = [item.title,item.subtitle,item.summary,item.type,item.role,...item.stack].join(' ').toLocaleLowerCase()
    return searchable.includes(query.trim().toLocaleLowerCase())
  }), [filter, query])

  useEffect(() => {
    const onKey = event => {
      if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) {
        event.preventDefault()
        document.querySelector('.console-search input')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return <section id="portfolio" className="section portfolio-section"><div className="container">
    <div className="section-top"><SectionTitle num="04" eyebrow="PORTFOLIO / DEVELOPER CONSOLE" title={<>精選<span className="accent">作品集</span></>} text="以工程師控制台方式瀏覽我的專案經歷：系統領域、技術組合、參與角色及核心工作內容。"/><span className="section-side-note">EXPLORE THE WORK</span></div>
    <div className="console-shell">
      <div className="console-toolbar"><div className="console-identity"><span className="console-terminal"><Terminal size={20}/></span><div><strong>LVB / DEV CONSOLE</strong><small>PROJECT WORKSPACE · CASE STUDIES</small></div></div><div className="console-status"><span className="console-indicator"/> PORTFOLIO READY</div></div>
      <div className="console-content"><div className="console-heading"><div><span className="console-overline"><Command size={13}/> WORKSPACE / PROJECTS</span><h3>Project Overview</h3><p>精選實作與工作案例，點選查看專案細節。</p></div><span className="console-heading-mark"><LayoutGrid size={20}/></span></div>
        <PortfolioStats items={portfolioItems}/>
        <ProjectFilters filters={portfolioFilters} filter={filter} onFilter={setFilter} query={query} onQuery={setQuery} count={visible.length}/>
        <div className="console-project-grid">{visible.map((item,index)=><ProjectCard key={item.id} item={item} index={index} onOpen={id => {window.location.hash = `/projects/${id}`}}/>)}</div>
        {visible.length===0 && <div className="console-empty">找不到符合條件的作品。<button type="button" onClick={()=>{setQuery('');setFilter('全部')}}>清除篩選</button></div>}
      </div>
      <div className="console-footer"><span><Terminal size={14}/> portfolio@lvb:~$ explore --projects</span><span><CircleDot size={13}/> {portfolioItems.length} CASE STUDIES LOADED</span></div>
    </div>
    <p className="portfolio-disclaimer">視覺圖為概念示意，並非實際公司內部系統截圖；專案內容僅展示可公開分享的經歷。狀態標示表示作品集介面可使用，不代表任何外部服務的即時狀態。</p>
  </div></section>
}
