import React from 'react';
import profilePhoto from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="about-section reveal-on-load delay-2">
      <div className="about-header">
        <span className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>SEC_01</span>
        <h2>01/ABOUT</h2>
      </div>
      
      <div className="about-content" style={{ gridColumn: 'span 5' }}>
        <p>
          I am a Full Stack Developer with a Bachelor of Engineering in Computer Science from Savitribai Phule Pune University. My core expertise lies in building fast, scalable web systems using JavaScript (React & Node.js), Java (Spring Boot), and relational/non-relational databases like MySQL and MongoDB.
        </p>
        <p>
          Currently, I am a <strong>Software Developer Intern at SpringUp Labs</strong>, where I build REST APIs, implement pagination algorithms for large datasets, and engineer robust role-based access control systems. Previously, as a <strong>Web Developer Intern at SETTribe</strong>, I collaborated on database logic and user interfaces using PHP, MySQL, and JavaScript.
        </p>
        <p>
          I focus on writing clean, readable code and optimizing database structures to deliver highly performant user-centric applications.
        </p>
      </div>

      <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end' }}>
        <div className="photo-specimen-card">
          <span className="mono-tag" style={{ fontSize: '0.6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', display: 'block', opacity: 0.5 }}>
            [ FIG_01 // PHOTO_REG ]
          </span>
          <div className="specimen-wrapper">
            <img src={profilePhoto} alt="Rohan Kohalli" className="specimen-photo" />
          </div>
          <span className="mono-tag" style={{ fontSize: '0.62rem', display: 'block', textAlign: 'center', opacity: 0.5 }}>
            SPECIMEN // ENG_RHK.JPG
          </span>
        </div>
      </div>
    </section>
  );
}
