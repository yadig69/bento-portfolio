const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">GS</div>
      <ul className="navbar__menu">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar