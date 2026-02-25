import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Python', level: 88 },
];

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
    >
      <div className="relative p-8 glass-panel border-white/5 group-hover:border-[var(--color-neon-blue)]/50 transition-colors duration-500 overflow-hidden"
        style={{ transform: "translateZ(50px)" }}>

        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col items-center">
          {/* Hexagonal Meter */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full transform transition-transform duration-700 group-hover:rotate-12">
              {/* Outer Hex Path */}
              <path
                d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
              />
              {/* Progress Hex Path */}
              <motion.path
                d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
                fill="none"
                stroke="var(--color-neon-blue)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: skill.level / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                className="drop-shadow-[0_0_8px_rgba(0,245,255,1)]"
              />
            </svg>

            {/* Percentage Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl md:text-3xl font-orbitron font-bold text-white group-hover:text-glow transition-all">
                {skill.level}%
              </span>
            </div>
          </div>

          <h3 className="text-xs md:text-sm font-orbitron tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
            {skill.name}
          </h3>

          {/* Bottom Scanner Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen py-32 flex items-center justify-center px-4 overflow-x-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(var(--color-neon-blue) 0.5px, transparent 0.5px)',
            backgroundSize: '30px 30px',
          }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-blue)] opacity-5 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left: Futuristic Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Identity Scan Laser */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -left-8 -right-8 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent z-20 pointer-events-none shadow-[0_0_15px_rgba(0,245,255,0.8)]"
          />

          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--color-neon-blue)]/30 overflow-hidden">
              <motion.div
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full bg-[var(--color-neon-blue)] shadow-[0_0_10px_var(--color-neon-blue)]"
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-8 text-white uppercase tracking-tight leading-none group">
              IDENTITY <br />
              <span className="text-[var(--color-neon-blue)] relative inline-block">
                PROFILE
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[var(--color-neon-blue)] shadow-[0_0_15px_rgba(0,245,255,0.5)]"
                />
              </span>
            </h2>

            <div className="space-y-6 font-space">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-2 border-[var(--color-neon-blue)]/20 pl-6 italic">
                Full Stack Architect specialized in <span className="text-white font-bold tracking-wider underline decoration-[var(--color-neon-blue)]/50">Next-Gen Interfaces</span>.
                Currently bridging the gap between code and reality at BytechSol LLC.
              </p>

              <p className="text-base text-gray-400 leading-relaxed max-w-lg">
                Engineered with a focus on immersive UX and cinematic aesthetics. I transform complex logical architectures into fluid, human-centric digital journeys.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="px-4 py-2 border border-white/10 rounded flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-neon-blue)] animate-ping" />
                <span className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest">Core Synchronized</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Cyber-Hex Meters */}
        <div className="grid grid-cols-2 gap-6 md:gap-8 perspective-1000">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
