import { Search, SlidersHorizontal } from 'lucide-react'
export default function ProjectFilters({ filters, filter, onFilter, query, onQuery, count }) {
  return <div className="console-controls"><div className="console-filter-title"><SlidersHorizontal size={16}/><span>PROJECT EXPLORER</span><small>{count} RESULTS</small></div><div className="console-filters" aria-label="作品分類">{filters.map(value=><button type="button" key={value} className={filter===value?'active':''} onClick={()=>onFilter(value)} aria-pressed={filter===value}>{value}</button>)}</div><label className="console-search"><Search size={16}/><input aria-label="搜尋作品" placeholder="搜尋專案 / 技術 / 關鍵字..." value={query} onChange={e=>onQuery(e.target.value)}/><kbd>/</kbd></label></div>
}
