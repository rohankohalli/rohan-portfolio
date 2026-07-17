import React from 'react';

export default function Hero() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).toUpperCase();

  return (
    <section id="hero" className="hero-section reveal-on-load delay-1">
      {/* Left Column: Copy & Metrics */}
      <div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', marginBottom: '1.25rem' }}>
          <span className="mono-tag">SYS_VER // 1.3.0</span>
          <span className="mono-tag">REF_DATE // {currentDate}</span>
        </div>
        
        <h1 className="hero-title">
          Rohan<br />
          Kohalli.<br />
          <span style={{ color: 'var(--accent-color)', fontStyle: 'italic' }}>Full Stack Engineer.</span>
        </h1>

        <p className="hero-sub">
          Building robust web systems with React, Node.js, and Spring Boot. Specialized in server-side algorithms, secure role-based access, and database schema design.
        </p>

        <div>
          <a 
            href="/Rohan_Kohalli_Resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="theme-btn"
          >
            → ACCESS RESUME [PDF]
          </a>
        </div>

        {/* Metrics Row */}
        <div className="metrics-row">
          <div className="metric-item">
            <span className="metric-val">02</span>
            <span className="metric-lbl">Internships</span>
          </div>
          <div className="metric-item">
            <span className="metric-val">08</span>
            <span className="metric-lbl">Core Projects</span>
          </div>
          <div className="metric-item">
            <span className="metric-val">15+</span>
            <span className="metric-lbl">Core Techs</span>
          </div>
        </div>
      </div>

      {/* Right Column: Understated Flat Hardware LCD */}
      <div className="hero-lcd-container">
        <span className="mono-tag" style={{ fontSize: '0.62rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', display: 'block' }}>
          [ SYSTEM_CONSOLE // INTERACTIVE_TE_SYS ]
        </span>
        
        <div className="lcd-screen">
          <div>&gt; BOOTING PORTFOLIO_SHELL... OK</div>
          <div>&gt; NET_PORT // 5173 // ACTIVE</div>
          <div>&gt; INDEXED // 08_PROJECTS_READY</div>
          <div>&gt; STACK // SPRINGBOOT_REACT_NODE</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>&gt; HEARTBEAT // RESOLVED</span>
            <span className="pulse-dot"></span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>STATUS // NOMINAL</span>
          <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>DEVICE // RHK_SYS_V2</span>
        </div>
      </div>
    </section>
  );
}
