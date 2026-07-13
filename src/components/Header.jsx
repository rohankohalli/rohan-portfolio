import React from 'react';

export default function Header({ theme, toggleTheme }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-nav reveal-on-load">
      <div className="logo-cell">
        <a 
          href="#" 
          className="nav-link" 
          style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          onClick={(e) => scrollToSection(e, 'hero')}
        >
          ROHAN.
        </a>
      </div>
      
      <nav className="nav-links-cell">
        <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>01/ABOUT</a>
        <a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, 'projects')}>02/WORK</a>
        <a href="#experience" className="nav-link" onClick={(e) => scrollToSection(e, 'experience')}>03/EXPERIENCE</a>
        <a href="#capabilities" className="nav-link" onClick={(e) => scrollToSection(e, 'capabilities')}>04/SKILLS</a>
        <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>05/CONTACT</a>
      </nav>

      <div className="theme-toggle-cell">
        <a 
          href="/Rohan_Kohalli_Resume.pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="theme-btn"
        >
          CV [PDF]
        </a>
        <button className="theme-btn" onClick={toggleTheme}>
          MODE: {theme.toUpperCase()}
        </button>
      </div>
    </header>
  );
}
