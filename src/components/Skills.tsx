import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const skills = [
  { name: 'HTML', scale: 1, z: 0 },
  { name: 'CSS', scale: 0.9, z: -50 },
  { name: 'JAVASCRIPT', scale: 1.1, z: 50 },
  { name: 'PYTHON', scale: 0.95, z: -20 },
  { name: 'WEB DEVELOPMENT', scale: 1.2, z: 100 },
  { name: 'FRONT-END', scale: 1, z: 20 },
  { name: 'UI/UX DESIGN', scale: 1.1, z: 40 },
  { name: 'REACT', scale: 1.1, z: 60 },
  { name: 'NODE.JS', scale: 0.9, z: -30 },
];

function SkillCard({ name, scale, z, index }: { name: string, scale: number, z: number, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, z: -100 }}
      whileInView={{ opacity: 1, scale: scale, z: z }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        scale: scale * 1.1,
        z: z + 50,
        transition: { duration: 0.3 }
      }}
      className="relative cursor-pointer group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="glass-panel px-6 py-4 md:px-10 md:py-8 bg-black/40 backdrop-blur-xl border-white/5 group-hover:border-[var(--color-neon-blue)]/50 transition-all duration-500 overflow-hidden">
        {/* Scanning Pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-neon-blue)]/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

        <h3 className="text-sm md:text-xl font-orbitron font-bold text-white tracking-[0.3em] uppercase group-hover:text-[var(--color-neon-blue)] transition-colors duration-300">
          {name}
        </h3>

        {/* Decorative corner tags */}
        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-1 h-1 bg-[var(--color-neon-blue)] rounded-full animate-ping" />
        </div>
      </div>

      {/* Bottom Glow Shadow */}
      <div className="absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[var(--color-neon-blue)] opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(smoothProgress, [0, 1], [20, -20]);
  const y = useTransform(smoothProgress, [0, 1], [0, -100]);

  return (
    <section id="skills" ref={containerRef} className="relative w-full py-40 px-4 overflow-hidden min-h-screen bg-black flex flex-col items-center">
      {/* Living Circuit Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(var(--color-neon-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-blue) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-20%)'
          }}
        />
        {/* Animated Data Packets */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ left: '-10%', top: `${20 + i * 15}%`, opacity: 0 }}
            animate={{ left: '110%', opacity: [0, 1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 2, ease: "linear" }}
            className="absolute w-40 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent shadow-[0_0_15px_var(--color-neon-blue)] z-1"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-7xl font-orbitron font-bold text-white uppercase tracking-tighter mb-4 peer">
              TECHNICAL <span className="text-[var(--color-neon-blue)] text-glow">ARSENAL</span>
            </h2>
            <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent" />
          </div>
          <p className="mt-8 font-space text-gray-500 uppercase tracking-[0.5em] text-xs">Synchronizing Core Competencies</p>
        </motion.div>

        <motion.div
          style={{ rotateX, y }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-12 perspective-2000 py-20"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`h-1 bg-[var(--color-neon-blue)] transition-all duration-1000`} style={{ width: `${Math.random() * 100 + 20}px` }} />
        ))}
      </div>
    </section>
  );
}
