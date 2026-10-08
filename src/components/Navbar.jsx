import { ArrowRight, Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    <div className="flex items-center gap-3 sm:gap-4">
                        <a href="#" className="group flex items-center gap-3 focus:outline-hidden">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/80 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base tracking-tight shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                                RK
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Rohan Kohalli
                                </span>
                            </div>
                        </a>

                        <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/80 shadow-2xs ml-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="tracking-wide text-xs uppercase">Available</span>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all">
                            About
                        </a>
                        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all">
                            Projects
                        </a>
                        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all">
                            Experience
                        </a>
                        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all">
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            className="p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs focus:outline-hidden cursor-pointer"
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 group uppercase"
                        >
                            <span>Get in Touch</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
}
