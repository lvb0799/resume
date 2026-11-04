import { Github, Mail } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import { profile } from '../data'

export default function Contact() { return <section id="contact" className="contact-section"><div className="container contact-inner"><div><Eyebrow num="06">LET'S CONNECT</Eyebrow><h2>期待下一個<br/><span>有價值的挑戰。</span></h2><p>歡迎透過 GitHub 了解更多技術背景與專案開發方向。</p><div className="contact-actions"><a className="btn btn-primary" href={profile.github} target="_blank" rel="noopener noreferrer">前往 GitHub <Github size={18}/></a>{profile.showEmail && <a className="btn btn-outline" href={'mailto:'+profile.email}>Email 聯絡 <Mail size={18}/></a>}</div></div><div className="contact-symbol" aria-hidden="true">&lt;/&gt;</div></div></section> }
