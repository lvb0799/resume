import { useEffect, useState } from 'react'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ScrollMotion from './components/ScrollMotion'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  useEffect(() => {
    if (!hash.startsWith('#') || hash.startsWith('#/')) return
    const id = hash.slice(1)
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash])
  const match = hash.match(/^#\/projects\/([a-z0-9-]+)$/)
  return (
    <>
      {!match && <ScrollMotion />}
      <Header />
      {match ? <ProjectDetailPage projectId={match[1]} /> : <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
      </main>}
      <Footer />
    </>
  )
}
