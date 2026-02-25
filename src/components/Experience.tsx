import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider mb-4">
            Experience <span className="text-[var(--color-neon-blue)]">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-neon-blue)] mx-auto box-glow" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-neon-blue)] via-[var(--color-neon-blue-dark)] to-transparent md:-translate-x-1/2" />

          {/* Timeline Item - BytechSol */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pl-16 md:pl-0"
          >
            {/* Left Side (Empty on mobile, Date on Desktop) */}
            <div className="hidden md:block w-[45%] text-right pr-8">
              <span className="font-exo text-xl text-[var(--color-neon-blue)] tracking-widest uppercase">
                Aug 2026 – Active
              </span>
            </div>

            {/* Center Node */}
            <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-black border-2 border-[var(--color-neon-blue)] flex items-center justify-center md:-translate-x-1/2 box-glow z-10">
              <Briefcase className="w-6 h-6 text-[var(--color-neon-blue)]" />
            </div>

            {/* Right Side (Content) */}
            <div className="w-full md:w-[45%] md:pl-8">
              <div className="glass-panel p-6 hover:border-[var(--color-neon-blue)] transition-colors duration-300 group">
                <span className="md:hidden block font-exo text-sm text-[var(--color-neon-blue)] tracking-widest uppercase mb-2">
                  Aug 2026 – Active
                </span>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-1 group-hover:text-glow transition-all">
                  BytechSol LLC
                </h3>
                <h4 className="text-lg font-space text-gray-400 mb-4">
                  Full-stack Developer
                </h4>
                <p className="text-sm font-space text-gray-500 leading-relaxed">
                  Developing and maintaining full-stack web applications, focusing on scalable architecture, responsive design, and seamless user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Add more timeline items here in the future if needed */}

        </div>
      </div>
    </section>
  );
}
