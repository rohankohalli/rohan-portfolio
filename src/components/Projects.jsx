import React, { useState, useEffect } from 'react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'MyStore E-Commerce',
    type: 'Full-Stack E-Commerce System',
    year: '2024',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubUrl: 'https://github.com/rohankohalli/MyStore-Ecommerce',
    overview: 'A robust, high-performance e-commerce backend and responsive client interface. Features state-managed catalogs, interactive shopping baskets, user session profiles, and persistent transaction log pipelines.',
    features: [
      'Built modular server-side layers using Java and JPA/Hibernate mapping.',
      'Designed transactional logging schema with indices to speed up catalog queries.',
      'Implemented front-end cart workflows with centralized React State hooks.'
    ],
    specs: [
      { label: 'Language', value: 'Java / JavaScript' },
      { label: 'Backend Spec', value: 'Spring Boot / REST APIs' },
      { label: 'Database', value: 'MySQL (Relational)' },
      { label: 'ORM mapping', value: 'Hibernate / Spring Data' }
    ],
    // videoUrl: '/videos/mystore_demo.mp4', // Uncomment and add your video clip later
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Shopping cart grid */}
        <rect x="20" y="30" width="160" height="140" />
        <line x1="20" y1="70" x2="180" y2="70" />
        <line x1="20" y1="110" x2="180" y2="110" />
        {/* Cart items */}
        <rect x="30" y="40" width="20" height="20" />
        <line x1="60" y1="50" x2="150" y2="50" />
        <rect x="30" y="80" width="20" height="20" />
        <line x1="60" y1="90" x2="150" y2="90" />
        {/* Database log mock */}
        <rect x="195" y="30" width="85" height="140" strokeDasharray="3 3" />
        <line x1="205" y1="45" x2="270" y2="45" />
        <line x1="205" y1="65" x2="250" y2="65" />
        <line x1="205" y1="85" x2="260" y2="85" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'EventOn System',
    type: 'Full-Stack Scheduling Platform',
    year: '2023',
    tags: ['Node.js', 'Express', 'React', 'MySQL'],
    githubUrl: 'https://github.com/rohankohalli/EventOn',
    overview: 'A database-driven calendar scheduling and space-booking system designed to handle high concurrency. Implements collision check constraints, clean date operations, and multiple admin review access panels.',
    features: [
      'Engineered dynamic SQL queries to search calendar slots and prevent double bookings.',
      'Developed responsive scheduling panels with instant status updates.',
      'Integrated role hierarchies to partition actions between clients and event reviewers.'
    ],
    specs: [
      { label: 'Language', value: 'JavaScript (ES6+)' },
      { label: 'Frameworks', value: 'React / Express' },
      { label: 'Database', value: 'MySQL (Relational)' },
      { label: 'Date Engine', value: 'Custom SQL Time checks' }
    ],
    // videoUrl: '/videos/eventon_demo.mp4',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Calendar Grid */}
        <rect x="20" y="25" width="260" height="150" />
        <line x1="20" y1="62" x2="280" y2="62" />
        <line x1="20" y1="100" x2="280" y2="100" />
        <line x1="20" y1="137" x2="280" y2="137" />
        {/* Calendar vertical grid lines */}
        <line x1="85" y1="25" x2="85" y2="175" />
        <line x1="150" y1="25" x2="150" y2="175" />
        <line x1="215" y1="25" x2="215" y2="175" />
        {/* Event dot */}
        <circle cx="117" cy="81" r="5" fill="var(--text-color)" />
        <circle cx="182" cy="118" r="5" fill="var(--text-color)" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'BlinkChat',
    type: 'Real-Time Messaging Application',
    year: '2023',
    tags: ['Node.js', 'Socket.io', 'React', 'CSS3'],
    githubUrl: 'https://github.com/rohankohalli/BlinkChat',
    overview: 'A real-time socket messaging client-server layout. Resolves message distribution over socket protocols and stores persistent thread logs in non-relational document databases.',
    features: [
      'Implemented bi-directional messaging pipelines using Socket.io wrappers.',
      'Designed fast, indexable schemas for chats and active users inside MongoDB.',
      'Engineered auto-scroll message feeds and dynamic chat creation UI.'
    ],
    specs: [
      { label: 'Language', value: 'JavaScript / Node.js' },
      { label: 'Protocols', value: 'WebSockets (Socket.io)' },
      { label: 'Database', value: 'MongoDB (NoSQL)' },
      { label: 'Real-time States', value: 'Online/Offline presences' }
    ],
    // videoUrl: '/videos/blinkchat_demo.mp4',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Chat frame */}
        <rect x="15" y="20" width="270" height="160" />
        <line x1="80" y1="20" x2="80" y2="180" />
        {/* Channels */}
        <line x1="25" y1="40" x2="70" y2="40" />
        <line x1="25" y1="65" x2="65" y2="65" />
        <line x1="25" y1="90" x2="70" y2="90" />
        {/* Chat bubbles */}
        <rect x="95" y="35" width="100" height="24" rx="4" />
        <rect x="165" y="70" width="100" height="24" rx="4" />
        <rect x="95" y="105" width="130" height="24" rx="4" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'AgreeSmarter Extension',
    type: 'Chrome ToS Analysis Extension',
    year: '2023',
    tags: ['JavaScript', 'Chrome APIs', 'HTML5'],
    githubUrl: 'https://github.com/rohankohalli/AgreeSmarter_Extension',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Browser window */}
        <rect x="10" y="20" width="280" height="160" />
        <line x1="10" y1="45" x2="290" y2="45" />
        {/* Chrome Extension popup */}
        <rect x="180" y="55" width="100" height="115" />
        <circle cx="200" cy="75" r="8" />
        <line x1="215" y1="75" x2="265" y2="75" />
        <circle cx="200" cy="100" r="8" />
        <line x1="215" y1="100" x2="255" y2="100" />
        {/* Wave indicator */}
        <path d="M 20 100 Q 60 70 100 100 T 180 100" fill="none" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Job-Tracker',
    type: 'Kanban Application Tracker',
    year: '2023',
    tags: ['Node.js', 'Express', 'React', 'MongoDB'],
    githubUrl: 'https://github.com/rohankohalli/Job-Tracker',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Kanban Board columns */}
        <rect x="15" y="20" width="270" height="160" />
        <line x1="105" y1="20" x2="105" y2="180" />
        <line x1="195" y1="20" x2="195" y2="180" />
        {/* Column Cards */}
        <rect x="25" y="35" width="70" height="35" rx="3" />
        <rect x="25" y="80" width="70" height="35" rx="3" />
        <rect x="115" y="35" width="70" height="35" rx="3" />
        <rect x="205" y="35" width="70" height="35" rx="3" />
        <line x1="35" y1="45" x2="65" y2="45" />
        <line x1="35" y1="52" x2="55" y2="52" />
        <line x1="125" y1="45" x2="155" y2="45" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'ForwardOS',
    type: 'OS Shell GUI Simulator',
    year: '2023',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'UI-Shell'],
    githubUrl: 'https://github.com/rohankohalli/ForwardOS',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Overlapping window frames */}
        <rect x="20" y="40" width="180" height="110" />
        <line x1="20" y1="55" x2="200" y2="55" />
        <circle cx="30" cy="47" r="3" fill="var(--text-color)" />
        <circle cx="40" cy="47" r="3" fill="var(--text-color)" />
        
        <rect x="100" y="65" width="180" height="110" />
        <line x1="100" y1="80" x2="280" y2="80" />
        <circle cx="110" cy="72" r="3" fill="var(--text-color)" />
        <circle cx="120" cy="72" r="3" fill="var(--text-color)" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Face Detection',
    type: 'Computer Vision Python System',
    year: '2022',
    tags: ['Python', 'OpenCV', 'NumPy'],
    githubUrl: 'https://github.com/rohankohalli/Face_detection',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Camera viewport */}
        <rect x="15" y="20" width="270" height="160" />
        {/* Viewfinder crosshairs */}
        <line x1="150" y1="30" x2="150" y2="50" />
        <line x1="150" y1="150" x2="150" y2="170" />
        <line x1="30" y1="100" x2="50" y2="100" />
        <line x1="250" y1="100" x2="270" y2="100" />
        {/* Detection square */}
        <rect x="90" y="45" width="120" height="110" strokeDasharray="3 3" />
        {/* Target face contour */}
        <path d="M 120 110 Q 150 140 180 110" fill="none" />
        <circle cx="135" cy="85" r="4" fill="var(--text-color)" />
        <circle cx="165" cy="85" r="4" fill="var(--text-color)" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Virtual Assistant',
    type: 'Python Audio Automation Shell',
    year: '2022',
    tags: ['Python', 'Speech APIs', 'OS Auto'],
    githubUrl: 'https://github.com/rohankohalli/Virtual-assistant',
    wireframe: (
      <svg className="project-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--text-color)', strokeWidth: 1.5 }}>
        {/* Waveform graphic */}
        <path d="M 20 100 Q 50 20 80 100 T 140 100 T 200 100 T 260 100 T 280 100" fill="none" />
        <path d="M 20 100 Q 50 140 80 100 T 140 100 T 200 100 T 260 100 T 280 100" fill="none" opacity="0.4" />
        {/* Console line logs */}
        <line x1="30" y1="160" x2="150" y2="160" />
        <line x1="30" y1="175" x2="110" y2="175" strokeDasharray="2 2" />
      </svg>
    )
  }
];

// Enriching the default details for projects 4-8 so they render detailed specs & lists
PROJECTS_DATA.slice(3).forEach((proj) => {
  proj.overview = proj.overview || `A specialized project built to demonstrate high technical competency. It implements robust logic frameworks, handles specific platform API operations, and targets visual/audio metadata processing.`;
  
  proj.features = proj.features || [
    'Engineered clean system architectures with decoupled modules.',
    'Optimized code components for maximum performance and stability.',
    'Created dynamic user flows tailored for specific platform operations.'
  ];
  
  proj.specs = proj.specs || [
    { label: 'Language', value: proj.tags[0] },
    { label: 'Tech Stack', value: proj.tags.slice(1).join(', ') || 'Native APIs' },
    { label: 'Platform', value: proj.type.includes('Chrome') ? 'Browser (V8)' : proj.type.includes('Python') ? 'OS Shell' : 'Browser Client' }
  ];
});

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Esc key listener to close active popover
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="projects-section reveal-on-load delay-2">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
        <div>
          <span className="mono-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>SEC_02</span>
          <h2>02/PROJECTS</h2>
        </div>
        <span className="mono-tag">INDEXED // 08_ITEMS</span>
      </div>

      <div className="projects-list">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={project.id}
            className="project-row"
            onClick={() => setSelectedProject(project)}
          >
            <span className="proj-number">0{idx + 1}</span>
            <span className="proj-title">{project.title}</span>
            <div className="proj-tech-container">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tech-pill">{tag}</span>
              ))}
            </div>
            <span className="proj-type">{project.type}</span>
          </div>
        ))}
      </div>

      {/* Popover Details Modal Overlay */}
      {selectedProject && (
        <div className="popover-overlay" onClick={() => setSelectedProject(null)}>
          <div className="popover-card reveal-on-load" onClick={(e) => e.stopPropagation()}>
            {/* popover Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
              <div>
                <span className="mono-tag" style={{ display: 'block', marginBottom: '0.25rem' }}>
                  PROJECT SPECIFICATION // YEAR_{selectedProject.year}
                </span>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', lineHeight: '1.1' }}>
                  {selectedProject.title}
                </h3>
                <span style={{ fontSize: '0.95rem', color: 'var(--accent-color)', fontStyle: 'italic', display: 'block', marginTop: '0.25rem' }}>
                  {selectedProject.type}
                </span>
              </div>
              <button 
                className="theme-btn" 
                onClick={() => setSelectedProject(null)}
                style={{ padding: '0.35rem 0.75rem' }}
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* popover Two-Column Body */}
            <div className="popover-columns" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem' }}>
              {/* Left Column: Markdown Content */}
              <div>
                <h4 className="mono-tag" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  01 / SYSTEM OVERVIEW
                </h4>
                <p style={{ fontSize: '0.98rem', lineHeight: '1.55', marginBottom: '1.75rem' }}>
                  {selectedProject.overview}
                </p>

                <h4 className="mono-tag" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  02 / SYSTEM SPECIFICATIONS
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                  {selectedProject.specs.map((spec, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', opacity: 0.55 }}>
                        {spec.label.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Video Demo & Core Capabilities */}
              <div>
                <h4 className="mono-tag" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  03 / DEMONSTRATION WIREFRAME
                </h4>
                <div className="popover-media-container" style={{ 
                  border: '1px dashed var(--border-color)', 
                  borderRadius: '6px', 
                  padding: '0.75rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: 'rgba(var(--text-color), 0.005)',
                  height: '190px',
                  overflow: 'hidden'
                }}>
                  {selectedProject.videoUrl ? (
                    <video 
                      src={selectedProject.videoUrl} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} 
                    />
                  ) : (
                    selectedProject.wireframe
                  )}
                </div>

                <h4 className="mono-tag" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.8rem', marginTop: '1.5rem' }}>
                  04 / KEY FEATURES
                </h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.5rem', fontSize: '0.88rem', lineHeight: '1.45' }}>
                      <span style={{ position: 'absolute', left: 0, top: '0.45rem', width: '5px', height: '5px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }}></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* popover Footer Action Bar */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="theme-btn" 
                style={{ padding: '0.5rem 1.25rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                VIEW REPOSITORY ON GITHUB ↗
              </a>
              <button 
                className="theme-btn" 
                onClick={() => setSelectedProject(null)} 
                style={{ padding: '0.5rem 1.25rem' }}
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
