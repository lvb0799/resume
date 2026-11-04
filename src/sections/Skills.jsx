import { Code2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { skillGroups } from '../data'

export default function Skills() { return <section id="skills" className="section skill-section"><div className="container"><SectionTitle num="02" eyebrow="TECH STACK" title={<>技術<span className="accent">專長</span></>} text="從使用者介面到資料儲存，具備完整的企業應用開發能力。"/><div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Code2 size={22}/></span><span className="skill-index">0{i+1} / 04</span></div><h3>{group.title}</h3><p>{group.subtitle}</p><div className="chips">{group.skills.map(skill => <span className="chip" key={skill}>{skill}</span>)}</div></article>)}</div></div></section> }
