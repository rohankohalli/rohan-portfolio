import React from 'react';
import heroPhoto from '../assets/profile.png';

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
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', marginBottom: '1.5rem' }}>
          <span className="mono-tag">DRAFT_VER // 1.2.0</span>
          <span className="mono-tag">DATE_REF // {currentDate}</span>
        </div>

        <h1 className="hero-title">
          Rohan<br />
          Kohalli.<br />
          <span style={{ color: 'var(--accent-color)', fontStyle: 'italic' }}>Full Stack Engineer.</span>
        </h1>

        <p className="hero-sub">
          Building robust web systems with React and Node.js Specialized in server-side algorithms, secure role-based controls, and database design.
        </p>

        <div>
          <a
            href="/Rohan_Kohalli_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="theme-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
          >
            <span>→ ACCESS RESUME [PDF]</span>
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
            <span className="metric-lbl">Core Technologies</span>
          </div>
        </div>
      </div>

      {/* Right Column: Profile Photo */}
      <div className="hero-photo-container">
        <div className="photo-wrapper">
          <img src={heroPhoto} alt="Rohan Kohalli" className="hero-photo" />
        </div>
        <span className="mono-tag" style={{ display: 'block', marginTop: '0.75rem', textAlign: 'center' }}>
          FIG_01 // PROFILE_PHOTO.PNG
        </span>
      </div>
    </section>
  );
}
