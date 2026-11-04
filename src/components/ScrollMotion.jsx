import { useEffect, useState } from 'react'

const selectors = [
  '.section-heading', '.about-lead', '.about-right', '.skill-card',
  '.project-card', '.experience-item', '.background-panel',
  '.contact-inner > div:first-child', '.contact-symbol'
]

export default function ScrollMotion() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    if (reduceMotion || !('IntersectionObserver' in window)) {
      return () => {
        window.removeEventListener('scroll', updateProgress)
        window.removeEventListener('resize', updateProgress)
      }
    }

    const elements = document.querySelectorAll(selectors.join(','))
    elements.forEach((el, index) => {
      el.classList.add('motion-target')
      if (el.matches('.skill-card, .project-card, .background-panel')) {
        el.style.setProperty('--motion-delay', `${(index % 4) * 85}ms`)
      }
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.09, rootMargin: '0px 0px -32px 0px' })
    elements.forEach(el => observer.observe(el))
    // Reveal initial viewport immediately, avoiding a flash of unstyled hidden content.
    document.documentElement.classList.add('motion-ready')

    const cards = document.querySelectorAll('.project-card, .skill-card')
    const cleanup = []
    cards.forEach(card => {
      const move = event => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
        card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
      }
      card.addEventListener('pointermove', move, { passive: true })
      cleanup.push(() => card.removeEventListener('pointermove', move))
    })
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
      elements.forEach(el => {
        el.classList.remove('motion-target', 'is-visible')
        el.style.removeProperty('--motion-delay')
      })
      cleanup.forEach(fn => fn())
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
}
