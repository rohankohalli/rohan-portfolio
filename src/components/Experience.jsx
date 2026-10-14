import { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/experience';

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
        >
            <div className="mb-12 sm:mb-16">
                <div className="font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                    03 / EXPERIENCE
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Career Milestones & Track Record
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
                    From academic engineering foundations to production-level full-stack development and APIs.
                </p>
            </div>

            {/* Alternating Animated Timeline */}
            <div className="relative max-w-5xl mx-auto">

                {/* Central Timeline Spine */}
                <div
                    aria-hidden="true"
                    className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 overflow-hidden rounded-full"
                >
                    {/* Animated Light Flow Pulse down the spine */}
                    <div className="w-full h-32 bg-linear-to-b from-transparent via-blue-500 to-transparent animate-flow-y" />
                </div>

                {/* Timeline Items */}
                <div className="space-y-10 sm:space-y-12 md:space-y-16">
                    {experiences.map((exp, index) => {
                        const isLeft = exp.side === 'left';
                        const staggerDelay = `${index * 200}ms`;

                        // Animation classes based on visibility and side
                        const slideClass = isVisible
                            ? 'opacity-100 translate-x-0 translate-y-0'
                            : isLeft
                                ? 'opacity-0 -translate-x-8 md:-translate-x-14'
                                : 'opacity-0 translate-x-8 md:translate-x-14';

                        return (
                            <div
                                key={exp.id}
                                className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                            >
                                {/* Center Node Marker */}
                                <div
                                    aria-hidden="true"
                                    className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
                                >
                                    {exp.isCurrent ? (
                                        <div className="relative flex items-center justify-center">
                                            <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-blue-500/40"></span>
                                            <span className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-950 border-2 border-white dark:border-slate-950 shadow-md"></span>
                                        </div>
                                    ) : (
                                        <div className="relative flex items-center justify-center">
                                            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-400 dark:bg-slate-500 ring-4 ring-slate-100 dark:ring-slate-900 border-2 border-white dark:border-slate-950 shadow-xs"></span>
                                        </div>
                                    )}
                                </div>

                                {/* LEFT SIDE (Card if isLeft, Meta if isRight on desktop) */}
                                <div
                                    className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:pr-10 lg:pr-12' : 'md:pr-10 lg:pr-12 md:text-right hidden md:block'
                                        }`}
                                >
                                    {isLeft ? (
                                        /* Card Component on Left */
                                        <div
                                            style={{ transitionDelay: staggerDelay }}
                                            className={`duration-700 ease-out p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700/70 transition-all ${slideClass}`}
                                        >
                                            <CardContent exp={exp} />
                                        </div>
                                    ) : (
                                        /* Opposite Meta Pill on Desktop */
                                        <div
                                            style={{ transitionDelay: staggerDelay }}
                                            className={`transition-all duration-700 ease-out font-mono text-xs text-slate-500 dark:text-slate-400 ${slideClass}`}
                                        >
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                <span className="font-semibold text-slate-700 dark:text-slate-300">
                                                    {exp.period}
                                                </span>
                                                <span>•</span>
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT SIDE (Meta if isLeft, Card if isRight on desktop) */}
                                <div
                                    className={`w-full md:w-1/2 ${isLeft
                                            ? 'md:pl-10 lg:pl-12 hidden md:block'
                                            : 'pl-10 md:pl-10 lg:pl-12'
                                        }`}
                                >
                                    {!isLeft ? (
                                        /* Card Component on Right */
                                        <div
                                            style={{ transitionDelay: staggerDelay }}
                                            className={`duration-700 ease-out p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700/70 transition-all ${slideClass}`}
                                        >
                                            <CardContent exp={exp} />
                                        </div>
                                    ) : (
                                        /* Opposite Meta Pill on Desktop */
                                        <div
                                            style={{ transitionDelay: staggerDelay }}
                                            className={`transition-all duration-700 ease-out font-mono text-xs text-slate-500 dark:text-slate-400 ${slideClass}`}
                                        >
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                                                        }`}
                                                ></span>
                                                <span className="font-semibold text-slate-700 dark:text-slate-300">
                                                    {exp.period}
                                                </span>
                                                <span>•</span>
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function CardContent({ exp }) {
    return (
        <div className="space-y-3">
            {/* Top Bar with Tag and Status Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {exp.tag}
                </span>

                {exp.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {exp.badge}
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-slate-700/80">
                        {exp.badge}
                    </span>
                )}
            </div>

            {/* Title & Duration */}
            <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {exp.title}
                </h3>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                    <span>{exp.period}</span>
                    {exp.location && (
                        <>
                            <span>•</span>
                            <span>{exp.location}</span>
                        </>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
            </p>

            {/* Skills & Tech Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {exp.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
