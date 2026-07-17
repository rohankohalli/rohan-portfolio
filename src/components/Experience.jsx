import React from 'react';

const EXPERIENCE_DATA = [
  {
    role: 'Software Developer Intern',
    company: 'SpringUp Labs',
    duration: 'May 2025 – Present',
    bullets: [
      'Built and improved REST APIs using Node.js and Express for application features.',
      'Implemented server-side pagination to efficiently handle and stream large datasets.',
      'Worked on authentication and role-based access control (RBAC) for secure user management.',
      'Debugged and optimized backend and frontend features to enhance system performance and stability.'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'SETTribe',
    location: 'Pune',
    duration: 'Dec 2024 – Feb 2025',
    bullets: [
      'Developed web application features using PHP, JavaScript, and MySQL.',
      'Implemented frontend and backend functionality for dynamic user interaction.',
      'Collaborated on database query optimization and schema design for data handling.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section reveal-on-load delay-3" style={{ padding: '3rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
        <div>
          <span className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>SEC_03</span>
          <h2>03/EXPERIENCE</h2>
        </div>
        <span className="mono-tag">LOGGED // 02_INTERNSHIPS</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(12, 1fr)', 
              gap: '1.5rem',
              alignItems: 'start'
            }}
          >
            {/* Timeline info */}
            <div style={{ gridColumn: 'span 4' }}>
              <span className="mono-tag" style={{ display: 'block', color: 'var(--accent-color)' }}>
                [ 0{idx + 1} // {exp.duration.toUpperCase()} ]
              </span>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                {exp.role}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-color)', marginTop: '0.25rem', textTransform: 'uppercase' }}>
                {exp.company}{exp.location ? ` // ${exp.location}` : ''}
              </p>
            </div>
            
            {/* Responsibilities */}
            <div style={{ gridColumn: 'span 8' }}>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <li 
                    key={bIdx} 
                    style={{ 
                      position: 'relative', 
                      paddingLeft: '1.25rem', 
                      marginBottom: '0.65rem',
                      fontSize: '0.98rem',
                      lineHeight: '1.5'
                    }}
                  >
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      top: '0.45rem', 
                      width: '4px', 
                      height: '4px', 
                      backgroundColor: 'var(--accent-color)',
                      borderRadius: 0 /* Square status tag */
                    }}></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
