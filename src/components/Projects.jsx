import { ExternalLink, Play, Lock } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="mb-10">
                <div className="font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                    02 / PROJECTS
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Full-Stack Deployments & Systems
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                    >
                        <div>
                            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 font-mono text-[11px]">
                                <span className="text-slate-400 dark:text-slate-500 font-semibold tracking-wider">
                                    // {project.id} {project.title.toUpperCase()}
                                </span>

                                {project.status === 'LIVE' ? (
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        LIVE
                                    </span>
                                ) : project.status === 'IN DEVELOPMENT' ? (
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/70 dark:border-amber-800/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                        IN DEVELOPMENT
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200/70 dark:border-blue-800/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        COMPLETED
                                    </span>
                                )}
                            </div>

                            <div className="h-44 sm:h-48 bg-slate-100 dark:bg-slate-950/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-center p-6 relative overflow-hidden">
                                <div className="w-full h-full rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 flex flex-col items-center justify-center text-center p-4">
                                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                                        {project.title}
                                    </span>
                                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                        {project.subtitle}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                    {project.title}
                                </h3>
                                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                                    {project.subtitle}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="px-5 sm:px-6 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/30 flex items-center justify-between text-xs font-semibold">
                            {project.githubUrl ? (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    <img src="./assets/icons/github.png"
                                        alt="GitHub"
                                        className="w-5.5 h-5.5 object-contain dark:invert"
                                    />
                                    <span>GitHub Repo</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                                    <Lock className="w-3.5 h-3.5" />
                                    <span>Private Repo</span>
                                </span>
                            )}

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                    <span>Live Demo </span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}

                            {!project.liveUrl && project.videoUrl && (
                                <a
                                    href={project.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:text-purple-700 transition-colors"
                                >
                                    <Play className="w-3.5 h-3.5" />
                                    <span>Demo Video ▶</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}