import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data'
import { navLinks } from '../config/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 24); handler(); window.addEventListener('scroll', handler); return () => window.removeEventListener('scroll', handler) }, [])
  return <header className={'site-header ' + (scrolled ? 'scrolled' : '')}><div className="header-inner container">
    <a className="brand" href="#top" aria-label="回到首頁"><img className="brand-logo" src={`${import.meta.env.BASE_URL}lvb-3d-logo.png`} alt="LVB" /><span className="brand-divider"/><span className="brand-text">PORTFOLIO <small>/ 2026</small></span></a>
    <nav className={open ? 'nav open' : 'nav'} aria-label="主要導覽">{navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a></nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? '關閉選單' : '開啟選單'}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}
