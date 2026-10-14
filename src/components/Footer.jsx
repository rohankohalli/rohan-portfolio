export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-16 sm:mt-20 border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Brand Info */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs shadow-2xs">
                        RK
                    </div>
                    <div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                            Rohan Kohalli
                        </span>
                        <span className="hidden sm:inline text-xs text-slate-400 dark:text-slate-500 font-mono ml-2">
                            / Full-Stack Developer
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center sm:text-right">
                    © {currentYear} Rohan Kohalli. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
