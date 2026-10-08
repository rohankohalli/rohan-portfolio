import { Monitor, Server, Database, Sparkles, ArrowRight, ArrowDown } from 'lucide-react'

export default function ArchitectureVisual() {
    return (
        <div className="w-full max-w-xl mx-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all duration-300">

            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 tracking-tight">
                    ~system-architecture.ts <span className="opacity-40">|</span> v1.0
                </div>
            </div>

            {/* Architecture Canvas */}
            <div className="p-6 sm:p-7 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[14px_14px]">

                {/* Horizontal Primary Pipeline with Animated Connectors */}
                <div className="flex items-center justify-between gap-1 sm:gap-2 relative">

                    {/* Node 1: Client */}
                    <div className="flex-1 flex flex-col items-center p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xs hover:border-blue-400 dark:hover:border-blue-500 transition-colors z-10">
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-2">
                            <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-mono text-[11px] font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase text-center">
                            Client App
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 text-center">
                            React (Vite)
                        </span>
                    </div>

                    {/* Animated Connector 1: Client -> Node API */}
                    <div className="w-8 sm:w-12 flex items-center justify-center relative shrink-0">
                        <div className="w-full h-0.5 bg-slate-200 dark:bg-slate-700 relative overflow-hidden rounded-full">
                            {/* Animated glowing packet traveling right */}
                            <span className="absolute top-1/2 -translate-y-1/2 w-3 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.9)] animate-flow-x"></span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 absolute -right-1" />
                    </div>

                    {/* Node 2: Node API */}
                    <div className="flex-1 flex flex-col items-center p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xs hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors z-10">
                        <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-2">
                            <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-mono text-[11px] font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase text-center">
                            Node.js API
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 text-center">
                            Express.js
                        </span>
                    </div>

                    {/* Animated Connector 2: Node API -> MySQL DB */}
                    <div className="w-8 sm:w-12 flex items-center justify-center relative shrink-0">
                        <div className="w-full h-0.5 bg-slate-200 dark:bg-slate-700 relative overflow-hidden rounded-full">
                            {/* Animated glowing packet traveling right (offset delay) */}
                            <span className="absolute top-1/2 -translate-y-1/2 w-3 h-1 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-flow-x-delay"></span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 absolute -right-1" />
                    </div>

                    {/* Node 3: Database */}
                    <div className="flex-1 flex flex-col items-center p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xs hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors z-10">
                        <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 mb-2">
                            <Database className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-mono text-[11px] font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase text-center">
                            MySQL DB
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 text-center">
                            Relational
                        </span>
                    </div>

                </div>

                {/* Animated Vertical Connector: Node API -> Gemini AI */}
                <div className="flex flex-col items-center my-3 relative h-7">
                    <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden rounded-full">
                        {/* Animated packet traveling downward */}
                        <span className="absolute left-1/2 -translate-x-1/2 w-1 h-3 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-flow-y"></span>
                    </div>
                    <ArrowDown className="w-3 h-3 text-slate-400 dark:text-slate-500 -mt-1" />
                </div>

                {/* External Services Card */}
                <div className="mx-auto max-w-xs rounded-xl border border-dashed border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 p-2.5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 shrink-0">
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                                Gemini AI
                            </span>
                            <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-purple-100 dark:bg-purple-900/70 text-purple-700 dark:text-purple-300 font-semibold">
                                External
                            </span>
                        </div>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 truncate mt-0.5">
                            Resume-JD Matching & Interview Prep
                        </p>
                    </div>
                </div>

            </div>

            {/* Terminal Status Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 font-bold">&gt</span>
                    <span>npm run dev --portfolio</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider text-[10px] uppercase">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>LISTENING : 3000</span>
                </div>
            </div>

        </div>
    )
}
