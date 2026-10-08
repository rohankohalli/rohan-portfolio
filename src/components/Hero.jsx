import { MapPin, Globe, Briefcase, ArrowRight, FileDown } from 'lucide-react'
import ArchitectureVisual from './ArchitectureVisual'

export default function Hero() {
    return (
        <section id="hero" className="py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Column: Intro & Details */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/80 text-blue-700 dark:text-blue-300 font-mono text-[11px] uppercase tracking-wider mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        <span>BUILD &bull LEARN &bull GROW &bull NEW OPPORTUNITIES</span>
                    </div>

                    {/* Role Header */}
                    <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2">
                        FULL-STACK DEVELOPER / REACT / NODE.JS
                    </div>

                    {/* Main Name Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-4">
                        Rohan Kohalli<span className="text-blue-600 dark:text-blue-500">.</span>
                    </h1>

                    {/* Tagline Description */}
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-6">
                        Building scalable web applications, robust backend APIs, and intuitive user interfaces with React.js, Node.js, Express, and MySQL.
                    </p>

                    {/* Status / Location Meta Pills */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-600 dark:text-slate-400 mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70">
                            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>Pune, India</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70">
                            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>Open to Relocate</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70">
                            <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>Looking for Full-Time Roles</span>
                        </span>
                    </div>

                    {/* Call to Actions */}
                    <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
                        >
                            <span>View Projects</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm shadow-2xs hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 active:scale-95"
                        >
                            <FileDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                            <span>Download Resume</span>
                            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase font-bold">
                                PDF
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Interactive System Architecture Card */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <ArchitectureVisual />
                </div>

            </div>
        </section>
    )
}
