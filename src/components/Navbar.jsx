import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    import('../js/navMarker.js')
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">GS</div>
        <ul className="navbar__menu">
          <li><a href="#profile"><ion-icon name="person-outline"></ion-icon></a></li>
          <li><a href="#about"><ion-icon name="information-circle-outline"></ion-icon></a></li>
          <li><a href="#skills"><ion-icon name="code-slash-outline"></ion-icon></a></li>
          <li><a href="#projects"><ion-icon name="folder-outline"></ion-icon></a></li>
          <li><a href="#services"><ion-icon name="briefcase-outline"></ion-icon></a></li>
          <li><a href="#contact"><ion-icon name="mail-outline"></ion-icon></a></li>
          <div id="marker"></div>
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