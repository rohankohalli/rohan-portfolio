import { Sparkles } from 'lucide-react'

function ReactIcon({ className = "w-5 h-5" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
    )
}

function NodeIcon({ className = "w-5 h-5" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" />
            <path d="M12 22V12" />
            <path d="M20.5 7L12 12L3.5 7" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    )
}

function MySQLIcon({ className = "w-5 h-5" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <line x1="12" y1="8" x2="12" y2="15" strokeDasharray="2 2" />
        </svg>
    )
}

const corePillars = [
    {
        name: 'React.js',
        version: 'v19.x',
        role: 'Frontend Architecture',
        desc: 'Component-based UI architecture, custom hooks, and predictable state flow.',
        icon: ReactIcon,
        iconColor: 'text-sky-500 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800',
        capabilities: ['Custom Hooks', 'Context API', 'Responsive Layouts']
    },
    {
        name: 'Node.js & Express',
        version: 'v20.x',
        role: 'Backend Services',
        desc: 'RESTful API architecture, JWT authentication pipelines, and modular middleware.',
        icon: NodeIcon,
        iconColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800',
        capabilities: ['RESTful APIs', 'JWT Auth & bcrypt', 'Middleware Pipelines']
    },
    {
        name: 'MySQL & Sequelize',
        version: 'v8.x',
        role: 'Relational Database',
        desc: 'Normalized schema modeling, relational foreign keys, and query optimization.',
        icon: MySQLIcon,
        iconColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800',
        capabilities: ['Schema Modeling', 'Query Optimization', 'Sequelize ORM']
    },
    {
        name: 'Gemini AI API',
        version: 'v1.5 / 2.0',
        role: 'AI & Integrations',
        desc: 'LLM API integration for automated resume-JD scoring and interview question generation.',
        icon: Sparkles,
        iconColor: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800',
        capabilities: ['Prompt Engineering', 'Structured JSON', 'REST Integration']
    }
]

const secondaryTools = [
    'JavaScript (ES6+)',
    'Tailwind CSS v4',
    'Python',
    'TypeScript',
    'Git',
    'GitHub',
    'Postman',
    'Linux (Ubuntu)'
]

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
            {/* Section Header */}
            <div className="mb-8">
                <div className="font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                    01 / ABOUT
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Engineering Focus & Core Architecture
                </h2>
            </div>

            {/* Intro Description */}
            <div className="max-w-3xl space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-12">
                <p>
                    I'm a full-stack developer focused on building practical, real-world applications with clean architecture and maintainable code. I enjoy working across the stack — from designing responsive UIs to building robust backend APIs and managing data.
                </p>
                <p>
                    My core foundation centers around modern JavaScript/TypeScript, React, Node.js, and MySQL. I believe in writing code that is clean to read, easy to reason about, and solves concrete user problems.
                </p>
            </div>

            {/* 4 Core Architectural Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
                {corePillars.map((pillar) => {
                    const Icon = pillar.icon
                    return (
                        <div
                            key={pillar.name}
                            className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-2.5 rounded-xl border flex items-center justify-center ${pillar.iconColor}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 tracking-wider">
                                        {pillar.version}
                                    </span>
                                </div>

                                <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 mb-1">
                                    {pillar.role}
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    {pillar.name}
                                </h3>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                                    {pillar.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                                {pillar.capabilities.map((cap) => (
                                    <span
                                        key={cap}
                                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                                    >
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Secondary Tools & Workflow Strip */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
                <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0">
                    Secondary Tools & Workflow
                </span>
                <div className="flex flex-wrap gap-2">
                    {secondaryTools.map((tool) => (
                        <span
                            key={tool}
                            className="px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs font-mono text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
