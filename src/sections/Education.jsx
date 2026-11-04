import { GraduationCap, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { education, certifications } from '../data'

export default function Education() { return <section id="education" className="section education-section"><div className="container"><SectionTitle num="05" eyebrow="BACKGROUND" title={<>學歷與<span className="accent">認證</span></>} /><div className="background-grid"><div className="background-panel"><div className="panel-label"><GraduationCap size={19}/> EDUCATION</div>{education.map(e=><div className="edu-item" key={e.school}><div><h3>{e.school}</h3><p>{e.degree}</p></div><span>{e.period}</span></div>)}</div><div className="background-panel"><div className="panel-label"><Award size={19}/> CERTIFICATION</div>{certifications.map(c => <div className="certification" key={c}><div className="cert-icon"><Award size={26}/></div><div><h3>{c}</h3><p>Microsoft Azure 基礎認證</p></div></div>)}</div></div></div></section> }
