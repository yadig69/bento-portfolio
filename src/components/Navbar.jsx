import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">GS</div>
        <ul className="navbar__menu">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <button 
        className="navbar__theme-toggle"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}

export default Navbar