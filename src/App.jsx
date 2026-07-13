import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <hr className="divider" />

      <Hero />

      <hr className="thick-divider" />

      <About />

      <hr className="divider" />

      <Projects />

      <hr className="divider" />

      <Experience />

      <hr className="divider" />

      <Capabilities />

      <hr className="thick-divider" />

      <Contact />

      <footer style={{ padding: '2rem 0 4rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <span className="mono-tag" style={{ color: 'var(--accent-color)' }}>
          © {new Date().getFullYear()} ROHAN / ALL RIGHTS RESERVED
        </span>
        <span className="mono-tag" style={{ color: 'var(--accent-color)' }}>
          BUILT WITH REACT + VITE
        </span>
      </footer>
    </div>
  );
}
