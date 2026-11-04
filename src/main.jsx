import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/layout.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/experience.css'
import './styles/education.css'
import './styles/contact.css'
import './styles/responsive.css'
import './styles/motion.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
