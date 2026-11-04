import SectionTitle from '../components/SectionTitle'
import { profile } from '../data'

export default function About() { return <section id="about" className="section about-section"><div className="container"><SectionTitle num="01" eyebrow="ABOUT ME" title={<>專注技術，也理解<span className="accent">業務需求。</span></>} /><div className="about-grid"><div className="about-lead">從需求分析、架構規劃到實際落地，<strong>打造能真正解決問題的系統。</strong></div><div className="about-right"><p>我擁有十年以上的軟體開發實務經驗，曾參與法律服務、金融、系統整合及能源監控等不同領域的企業應用。</p><p>熟悉前端介面、後端 API、資料庫設計及雲端平台，重視跨團隊溝通、系統穩定性與長期維護成本。</p><div className="stats">{profile.highlights.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div></div></div></div></section> }
