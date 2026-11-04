import Eyebrow from './Eyebrow'

export default function SectionTitle({ num, eyebrow, title, text }) { return <div className="section-heading"><Eyebrow num={num}>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div> }
