import './scss/style.scss'
import Navbar from './components/Navbar'
import ProfileSection from './components/sections/ProfileSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectSection from './components/sections/ProjectSection'
import ServicesSection from './components/sections/ServicesSection'
import ContactSection from './components/sections/ContactSection'
import { useMouseGlow } from './hooks/useMouseGlow'

function App() {
  useMouseGlow()
  
  return (
    <div className="app">
      <Navbar />
      <ProfileSection />
      <AboutSection />
      <ContactSection />
      <ProjectSection />
      <SkillsSection />
      <ServicesSection />
    </div>
  )
}

export default App