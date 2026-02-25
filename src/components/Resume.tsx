import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const experienceData = [
    {
        title: 'Full-Stack Developer',
        company: 'BytechSol LLC',
        date: 'Aug 2026 – Present',
        description: [
            'Developing and maintaining full-stack web applications with scalable architecture.',
            'Building responsive, high-performance interfaces with React & Next.js.',
            'Collaborating with cross-functional teams on enterprise-level projects.',
            'Implementing RESTful APIs and optimizing database performance.',
        ],
        current: true,
    },
];

const educationData = [
    {
        title: '1 Year Diploma in Information Technology',
        institution: 'Aptech',
        date: '2024',
        description: 'Completed a comprehensive diploma program covering core IT fundamentals, programming, networking, and software development.',
        type: 'diploma' as const,
    },
    {
        title: 'Python Programming Fundamentals',
        institution: 'Coursera / IBM',
        date: '2026',
        description: 'Certified in Python programming covering data structures, algorithms, and application development.',
        type: 'certificate' as const,
    },
    {
        title: 'Designing User Interfaces & Experiences (UI/UX)',
        institution: 'Google',
        date: '2026',
        description: 'Certified in UI/UX design principles, prototyping, and user-centered design methodology.',
        type: 'certificate' as const,
    },
];

export default function Resume() {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    return (
        <section id="resume" className="relative w-full py-24 px-4 overflow-x-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
                    style={{
                        backgroundImage: 'radial-gradient(var(--color-neon-blue) 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-neon-blue)] opacity-5 blur-[200px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-[1px] bg-[var(--color-neon-blue)] box-glow" />
                        <span className="text-[var(--color-neon-blue)] font-exo tracking-[0.3em] uppercase text-sm font-bold">
                            Career Archive
                        </span>
                        <div className="w-12 h-[1px] bg-[var(--color-neon-blue)] box-glow" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white uppercase tracking-wider mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-neon-blue)] text-glow">Resume</span>
                    </h2>
                </motion.div>

                {/* Tab Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-2 sm:gap-6 mb-16"
                >
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`group relative px-4 sm:px-12 py-3 sm:py-5 font-orbitron font-bold text-xs sm:text-base uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-500 interactive overflow-hidden rounded-sm ${activeTab === 'experience'
                            ? 'text-black bg-[var(--color-neon-blue)] shadow-[0_0_30px_rgba(0,245,255,0.4),0_0_60px_rgba(0,245,255,0.1)]'
                            : 'text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:border-[var(--color-neon-blue)]/50 hover:text-[var(--color-neon-blue)]'
                            }`}
                    >
                        {activeTab === 'experience' && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-3">
                            <Briefcase size={18} />
                            Experience
                        </span>
                    </button>

                    <button
                        onClick={() => setActiveTab('education')}
                        className={`group relative px-4 sm:px-12 py-3 sm:py-5 font-orbitron font-bold text-xs sm:text-base uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-500 interactive overflow-hidden rounded-sm ${activeTab === 'education'
                            ? 'text-black bg-[var(--color-neon-blue)] shadow-[0_0_30px_rgba(0,245,255,0.4),0_0_60px_rgba(0,245,255,0.1)]'
                            : 'text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:border-[var(--color-neon-blue)]/50 hover:text-[var(--color-neon-blue)]'
                            }`}
                    >
                        {activeTab === 'education' && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-3">
                            <GraduationCap size={18} />
                            Education
                        </span>
                    </button>
                </motion.div>

                {/* Content Area */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'experience' ? (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <div className="relative">
                                    <div className="absolute left-[28px] md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-neon-blue)] via-[var(--color-neon-blue-dark)] to-transparent" />

                                    {experienceData.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.15 }}
                                            className="relative flex items-start gap-6 mb-12 pl-20 md:pl-24"
                                        >
                                            <div className="absolute left-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black border-2 border-[var(--color-neon-blue)] flex items-center justify-center box-glow z-10">
                                                <Briefcase className="w-6 h-6 text-[var(--color-neon-blue)]" />
                                            </div>

                                            <div className="flex-1 glass-panel p-6 md:p-8 hover:border-[var(--color-neon-blue)] transition-all duration-500 group relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--color-neon-blue)] box-glow opacity-0 group-hover:opacity-50 animate-scan" />
                                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                    <div>
                                                        <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[var(--color-neon-blue)] font-exo font-medium">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col items-start md:items-end gap-1">
                                                        <span className="flex items-center gap-2 text-sm font-space text-gray-400">
                                                            <Calendar size={14} className="text-[var(--color-neon-blue)]" />
                                                            {item.date}
                                                        </span>
                                                    </div>
                                                </div>

                                                {item.current && (
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-neon-blue-dark)] border border-[var(--color-neon-blue)]/30 rounded-full mb-4">
                                                        <span className="w-2 h-2 rounded-full bg-[var(--color-neon-blue)] animate-pulse shadow-[0_0_10px_var(--color-neon-blue)]" />
                                                        <span className="text-[10px] font-mono text-[var(--color-neon-blue)] uppercase tracking-wider">Currently Active</span>
                                                    </div>
                                                )}

                                                <ul className="space-y-3">
                                                    {item.description.map((point, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-400 font-space">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-blue)]/50 mt-2 flex-shrink-0" />
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {educationData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="glass-panel p-6 md:p-8 hover:border-[var(--color-neon-blue)] transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <GraduationCap size={48} className="text-[var(--color-neon-blue)]" />
                                        </div>

                                        <div className="relative z-10">
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider mb-4 ${item.type === 'diploma'
                                                ? 'bg-green-500/10 text-green-500 border border-green-500/30'
                                                : 'bg-[var(--color-neon-blue)]/10 text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)]/30'
                                                }`}>
                                                {item.type === 'diploma' ? 'Academic Diploma' : 'Professional Certificate'}
                                            </div>

                                            <h3 className="text-lg md:text-xl font-orbitron font-bold text-white mb-2 group-hover:text-[var(--color-neon-blue)] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-[var(--color-neon-blue)] font-exo text-sm mb-4">
                                                {item.institution}
                                            </p>

                                            <div className="flex items-center gap-2 text-xs font-space text-gray-500 mb-6">
                                                <Calendar size={12} />
                                                {item.date}
                                            </div>

                                            <p className="text-sm text-gray-400 font-space leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
