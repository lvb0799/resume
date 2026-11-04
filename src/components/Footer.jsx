import { profile } from '../data'

export default function Footer() { return <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-brand" aria-label="LVB 回到首頁"><img className="footer-logo" src={`${import.meta.env.BASE_URL}lvb-3d-logo.png`} alt="LVB" /></a><span>© {new Date().getFullYear()} {profile.nameEn}. Built with React & care.</span><a href="#top">BACK TO TOP ↑</a></div></footer> }
