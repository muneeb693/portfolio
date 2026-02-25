import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Cpu, Code2, Globe, Database, Layers, Zap, Terminal } from 'lucide-react';

const skills = [
  { name: 'React', level: 90, icon: <Layers size={14} />, category: 'Frontend' },
  { name: 'Next.js', level: 85, icon: <Zap size={14} />, category: 'Framework' },
  { name: 'JavaScript', level: 95, icon: <Code2 size={14} />, category: 'Language' },
  { name: 'TypeScript', level: 80, icon: <Code2 size={14} />, category: 'Language' },
  { name: 'Python', level: 75, icon: <Terminal size={14} />, category: 'Scripting' },
  { name: 'PostgreSQL', level: 70, icon: <Database size={14} />, category: 'Database' },
  { name: 'Tailwind', level: 95, icon: <Globe size={14} />, category: 'Styling' },
  { name: 'Three.js', level: 60, icon: <Cpu size={14} />, category: '3D/WebGL' },
  { name: 'Node.js', level: 82, icon: <Database size={14} />, category: 'Backend' },
];

function SkillHexNode({ skill, index }: { skill: typeof skills[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-40 h-44 md:w-52 md:h-56 group cursor-pointer"
    >
      {/* Background Shape (Hexagon/Unique Cut) */}
      <div
        className="absolute inset-0 bg-[#0a0a0c] border border-white/5 transition-all duration-500 group-hover:border-[var(--color-neon-blue)]/50 box-glow"
        style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        }}
      >
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-neon-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated Scanning Line */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-[var(--color-neon-blue)]/30 blur-sm z-10"
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="mb-3 text-[var(--color-neon-blue)] opacity-50 group-hover:opacity-100 transition-all transform group-hover:scale-110">
            {skill.icon}
          </div>

          <h3 className="text-center font-orbitron font-bold text-[10px] md:text-sm text-white tracking-widest uppercase mb-2">
            {skill.name}
          </h3>

          <div className="w-16 h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[var(--color-neon-blue)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <span className="mt-4 text-[8px] font-mono text-gray-600 uppercase tracking-tighter group-hover:text-gray-400">
            Level: {skill.level}%
          </span>
        </div>
      </div>

      {/* Decorative Outer Bits */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-neon-blue)]/0 group-hover:border-[var(--color-neon-blue)]/50 transition-all duration-500" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-neon-blue)]/0 group-hover:border-[var(--color-neon-blue)]/50 transition-all duration-500" />
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="skills" ref={containerRef} className="relative py-32 bg-black overflow-hidden flex flex-col items-center">
      {/* HUD Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--color-neon-blue) 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-blue)] opacity-5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full px-4">
        {/* Section Title */}
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block relative"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-[var(--color-neon-blue)]" />
              <span className="text-[var(--color-neon-blue)] font-mono text-[10px] tracking-[0.5em] uppercase">Tech Stack Integrity</span>
              <div className="w-8 h-px bg-[var(--color-neon-blue)]" />
            </div>
            <h2 className="text-5xl md:text-8xl font-orbitron font-black text-white italic tracking-tighter leading-none mb-4">
              NEURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-neon-blue)]">NODES</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
              <div className="w-1 h-1 rounded-full bg-[var(--color-neon-blue)] animate-ping" />
              <span className="text-[8px] font-mono text-white tracking-widest uppercase">System Core Analysis Active</span>
            </div>
          </motion.div>
        </div>

        {/* Hex Grid Layout */}
        <motion.div
          style={{ rotateX, scale }}
          className="flex flex-wrap justify-center gap-4 md:gap-x-12 md:gap-y-8 max-w-5xl mx-auto perspective-1000"
        >
          {skills.map((skill, index) => (
            <SkillHexNode key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Global Stats Footer */}
        <motion.div
          className="mt-32 border-t border-white/5 pt-12 flex flex-wrap justify-center gap-12 text-center opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white uppercase tracking-widest">Total Integrity</span>
            <span className="text-lg font-orbitron font-bold text-[var(--color-neon-blue)]">94.8%</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white uppercase tracking-widest">Core Frequency</span>
            <span className="text-lg font-orbitron font-bold text-[var(--color-neon-blue)]">4.2 GHz</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white uppercase tracking-widest">Neural Latency</span>
            <span className="text-lg font-orbitron font-bold text-[var(--color-neon-blue)]">0.12 ms</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
