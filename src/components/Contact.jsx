import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || '';

function LinkedInIcon({ className = "w-4 h-4" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" rx="1" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function GitHubIcon({ className = "w-4 h-4" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );
}

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Fallback simulation if Formspree ID is not provided
        if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormState({ name: '', email: '', subject: '', message: '' });
            }, 800);
            return;
        }

        try {
            const payload = {
                name: formState.name,
                email: formState.email,
                subject: formState.subject,
                message: formState.message,
                _subject: formState.subject
                    ? `[Portfolio] ${formState.subject}`
                    : `[Portfolio] New message from ${formState.name}`,
                _replyto: formState.email
            };

            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormState({ name: '', email: '', subject: '', message: '' });
            } else {
                const data = await response.json();
                const errorMsg = data.errors?.map((err) => err.message).join(', ') || data.error || 'Failed to send message.';
                throw new Error(errorMsg);
            }
        } catch (err) {
            console.error('Contact form error:', err);
            setError(err.message || 'Something went wrong. Please reach out directly via email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactChannels = [
        {
            icon: Mail,
            label: 'Email',
            value: 'rohan.kohalli@gmail.com',
            href: 'mailto:rohan.kohalli@gmail.com',
            color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-900/60'
        },
        {
            icon: LinkedInIcon,
            label: 'LinkedIn',
            value: 'linkedin.com/in/rohankohalli',
            href: 'https://www.linkedin.com/in/rohan-kohalli/',
            color: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border-sky-200/80 dark:border-sky-900/60'
        },
        {
            icon: GitHubIcon,
            label: 'GitHub',
            value: 'github.com/rohankohalli',
            href: 'https://github.com/rohankohalli',
            color: 'text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Pune, India (Open to Relocate)',
            href: null,
            color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-900/60'
        }
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
            {/* Section Tag & Heading */}
            <div className="mb-10 sm:mb-12">
                <div className="font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                    04 / CONTACT
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Initiate Transmission
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Column: Direct Outreach & Channels */}
                <div className="lg:col-span-5 space-y-6">
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        Looking for a full-time opportunity as a Full Stack Developer or React/Node.js Developer. If you think I'd be a good fit for your team or just want to say hi, feel free to reach out!
                    </p>

                    {/* Contact Channels List */}
                    <div className="space-y-3 pt-2">
                        {contactChannels.map((item) => {
                            const Icon = item.icon;
                            const isClickable = Boolean(item.href);

                            const Content = (
                                <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-2xs group">
                                    <div className={`p-2 rounded-lg border shrink-0 ${item.color}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                                            {item.label}
                                        </div>
                                        <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {item.value}
                                        </div>
                                    </div>
                                    {isClickable && (
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all shrink-0" />
                                    )}
                                </div>
                            );

                            return isClickable ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="block focus:outline-hidden"
                                >
                                    {Content}
                                </a>
                            ) : (
                                <div key={item.label}>{Content}</div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Transmission Form Card */}
                <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs p-6 sm:p-8 backdrop-blur-xs">
                        {isSubmitted ? (
                            <div className="py-10 text-center flex flex-col items-center justify-center space-y-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                    TRANSMISSION LOGGED // SUCCESS
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                                    Thank you for reaching out. I’ve received your message and will review it and follow up as soon as possible.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-4 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                                >
                                    SEND ANOTHER MESSAGE
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                {/* Card Header */}
                                <div className="border-b border-slate-100 dark:border-slate-800/80 pb-3 flex items-center justify-between">
                                    <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        SEND A MESSAGE
                                    </span>
                                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
                                        * REQUIRED FIELDS
                                    </span>
                                </div>

                                {error && (
                                    <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/60 text-xs text-rose-600 dark:text-rose-400 font-mono">
                                        [ERROR] // {error}
                                    </div>
                                )}

                                {/* Row 1: Name and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder=""
                                            disabled={isSubmitting}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder=""
                                            disabled={isSubmitting}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                                    >
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formState.subject}
                                        onChange={handleChange}
                                        placeholder="e.g. Full-Stack Developer Opportunity"
                                        disabled={isSubmitting}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    />
                                </div>

                                {/* Row 3: Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="opportunity details."
                                        disabled={isSubmitting}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer w-full sm:w-auto"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
