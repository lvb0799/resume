import { Layers3, BrainCircuit, CreditCard, Activity } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data'

const icons = { layers: Layers3, brain: BrainCircuit, credit: CreditCard, activity: Activity }

export default function Projects() { return <section id="projects" className="section project-section"><div className="container"><div className="section-top"><SectionTitle num="03" eyebrow="SELECTED WORK" title={<>代表性<span className="accent">專案</span></>} text="以下為履歷中提及的工作專案，依技術領域整理。"/><span className="section-side-note">PROJECTS / 001—004</span></div><div className="projects-grid">{projects.map(project => { const Icon = icons[project.icon]; return <article className="project-card" key={project.number}><div className="project-card-top"><span>{project.tag}</span><span className="project-num">/{project.number}</span></div><div className="project-visual"><div className="visual-rings"/><Icon size={46} strokeWidth={1.25}/><span>{project.category}</span></div><div className="project-card-body"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div></div></article>})}</div><p className="project-disclaimer">註：以上為企業任職期間參與的專案經驗，並非公開原始碼專案。</p></div></section> }
