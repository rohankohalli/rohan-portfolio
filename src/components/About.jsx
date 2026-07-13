import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section reveal-on-load delay-2">
      <div className="about-header">
        <span className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>SEC_01</span>
        <h2>01/ABOUT</h2>
      </div>
      
      <div className="about-content">
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
    </section>
  );
}
