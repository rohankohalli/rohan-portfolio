import React from 'react';

// Highly recognizable official brand logo wireframes in blueprint style
const ICONS = {
  js: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <text x="12" y="17" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" stroke="none" fill="currentColor">JS</text>
    </svg>
  ),
  ts: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <text x="12" y="17" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" stroke="none" fill="currentColor">TS</text>
    </svg>
  ),
  java: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M5 8h12v7a6 6 0 0 1-12 0V8z" />
      <path d="M5 19h12" />
      <path d="M8 2v3M11 2v3M14 2v3" />
    </svg>
  ),
  python: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C6.5 2 6 2.5 6 4v3h6v1H6C4.5 8 4 8.5 4 10v5c0 1.5.5 2 2 2h2v-3c0-1.5.5-2 2-2h6c1.5 0 2-.5 2-2V7c0-1.5-.5-2-2-2h-2V2h-4Z" />
      <path d="M12 22c5.5 0 6-.5 6-2v-3h-6v-1h6c1.5 0 2-.5 2-2v-5c0-1.5-.5-2-2-2h-2v3c0 1.5-.5 2-2 2h-6c-1.5 0-2 .5-2 2v5c0 1.5.5 2 2 2h2v-3h4Z" />
      <circle cx="9" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="18.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  cpp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5Z" />
      <text x="7" y="15" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" stroke="none" fill="currentColor">C++</text>
    </svg>
  ),
  react: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  tailwind: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-2.8 0-4.2 1.4-4.2 4.2 2.8 0 4.2-1.4 4.2-4.2ZM12 12c2.8 0 4.2-1.4 4.2-4.2-2.8 0-4.2 1.4-4.2 4.2Z" />
      <path d="M6 16.2c0-2.8 1.4-4.2 4.2-4.2 0 2.8-1.4 4.2-4.2 4.2ZM18 7.8c0 2.8-1.4 4.2-4.2 4.2 0-2.8 1.4-4.2 4.2-4.2Z" />
    </svg>
  ),
  html: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16l-1.5 15-6.5 2.5-6.5-2.5L4 3z" />
      <path d="M8.5 8h7l-.5 4.5h-5.5v2h5l-.5 3.5-3 1-3-1-.2-2" />
    </svg>
  ),
  css: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16l-1.5 15-6.5 2.5-6.5-2.5L4 3z" />
      <path d="M15.5 8H8.5v3h5.5l-.5 4.5-3 1-3-1-.2-2" />
    </svg>
  ),
  node: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2Z" />
      <path d="M12 22V12M12 12L4 6.5M12 12l8-5.5" />
    </svg>
  ),
  express: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <text x="3" y="15" fontSize="13" fontFamily="var(--font-sans)" fontWeight="bold" stroke="none" fill="currentColor">ex</text>
    </svg>
  ),
  spring: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 15.5c2-2.5 5-4.5 7.5-4.5-3 .5-5.5 2.5-7.5 4.5Z" fill="currentColor" stroke="none" />
      <path d="M10.5 13.5C9.5 11 9.5 8.5 11 6c-2 2-2.5 4.5-1.5 7.5Z" fill="currentColor" stroke="none" />
      <path d="M13.5 11c1.5 2 1 4.5 0 6.5" />
    </svg>
  ),
  security: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <circle cx="12" cy="11" r="2" />
      <path d="M12 13v4M10.5 15.5h3" />
    </svg>
  ),
  api: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="9" width="6" height="6" rx="1" />
      <rect x="16" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="15" width="6" height="6" rx="1" />
      <path d="M8 12h3M11 6v12M11 6h5M11 18h5" />
    </svg>
  ),
  mysql: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10.5c-2-1.5-5-2-8-1.5-2.5.4-5 1.5-7 3.5C4 14.5 3 16 2 17c1.5-1.5 3.5-2 5.5-2 .5 1 .8 2 1.5 2.5 1 .7 2.5.5 3.5 0 2-1 4.5-2.5 5.5-5.5Z" />
      <path d="M15 5c-1-1.5-3-2-4.5-2S7 4 6.5 6C7.5 5.5 9 5.5 10 6s1.5 1.5 1.5 2.5c0 .5-.3 1-.5 1.5" />
    </svg>
  ),
  mongo: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2s-4 4-4 9.5c0 3 1.5 5.5 4 7.5 2.5-2 4-4.5 4-7.5C16 6 12 2 12 2Z" />
      <path d="M12 2v20" />
      <path d="M12 6c-1 2-1 5 0 8M12 8c1 1.5 1 3.5 0 5.5" />
    </svg>
  ),
  git: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" />
      <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16" r="2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="12" r="2" fill="currentColor" stroke="none" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <line x1="12" y1="12" x2="10" y2="12" />
    </svg>
  ),
  linux: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 9l4 3-4 3M13 15h4" />
    </svg>
  ),
  docker: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10.5c-1-.5-2.5-.5-3.5 0-1 .5-2 2-3 2H5c-1 0-2-1-2-2.5 0-2 1.5-3.5 3-3.5h.5c.5-1 1.5-2.5 3.5-2.5 3 0 4.5 2 4.5 4.5h3.5c1.5 0 2.5 1 2.5 2.5v.5Z" />
      <rect x="5" y="4" width="3" height="3" />
      <rect x="9" y="4" width="3" height="3" />
      <rect x="13" y="4" width="3" height="3" />
    </svg>
  ),
  aws: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5A7 7 0 0 0 6 13a4.5 4.5 0 0 0 1.5 8.5" />
      <text x="7" y="17" fontSize="7" fontFamily="var(--font-sans)" fontWeight="bold" stroke="none" fill="currentColor">AWS</text>
    </svg>
  )
};

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: ICONS.js },
      { name: 'TypeScript', icon: ICONS.ts },
      { name: 'Java', icon: ICONS.java },
      { name: 'Python', icon: ICONS.python },
      { name: 'C / C++', icon: ICONS.cpp }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: ICONS.react },
      { name: 'Tailwind CSS', icon: ICONS.tailwind },
      { name: 'HTML5', icon: ICONS.html },
      { name: 'CSS3', icon: ICONS.css }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: ICONS.node },
      { name: 'Express', icon: ICONS.express },
      { name: 'Spring Boot', icon: ICONS.spring },
      { name: 'Spring Security', icon: ICONS.security },
      { name: 'RESTful APIs', icon: ICONS.api }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: ICONS.mysql },
      { name: 'MongoDB', icon: ICONS.mongo }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: ICONS.git },
      { name: 'Docker', icon: ICONS.docker },
      { name: 'AWS (Basic)', icon: ICONS.aws },
      { name: 'Linux', icon: ICONS.linux }
    ]
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-section reveal-on-load delay-3">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
        <div>
          <span className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>SEC_04</span>
          <h2>04/CAPABILITIES</h2>
        </div>
        <span className="mono-tag">SKILLSET // DIRECT_SPECS</span>
      </div>

      <div className="blueprint-grid">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="blueprint-card">
            <span className="card-num">[ 0{idx + 1} // CATEGORY_MODULE ]</span>
            <h3 className="card-title">{cat.title}</h3>
            
            <div className="card-skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="card-skill-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span className="skill-icon-wrap">
                      {skill.icon}
                    </span>
                    <span className="skill-lbl">{skill.name}</span>
                  </div>
                  <div className="led-indicator"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
