import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ExternalLink, Github, Zap, Terminal, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Granny Cafe',
    description: 'A premium cafe ordering system with real-time menu management, automated receipt generation, and a sleek dark-themed UI for efficient customer service.',
    tech: ['React 19', 'Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Bytechsol1/granny-cafe.git',
    category: 'Full-Stack System',
    id: '01'
  },
  {
    title: 'Nexus AI Dashboard',
    description: 'Advanced analytics platform featuring real-time data visualization, predictive AI modeling, and a highly interactive holographic control interface.',
    tech: ['Python', 'Streamlit', 'TensorFlow', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Artificial Intelligence',
    id: '02'
  },
  {
    title: 'Cyber Commerce',
    description: 'Next-gen e-commerce with VR product previews, secure blockchain payments, and an ultra-fast edge-computed global architecture.',
    tech: ['Three.js', 'Solidity', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web3 / Blockchain',
    id: '03'
  },
];

function ProjectTimelineCard({ project, index }: { project: typeof projects[0], index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-between mb-24 md:mb-40 w-full group">
      {/* Central Connector Node */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-20">
        <motion.div
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black border-2 border-[var(--color-neon-blue)] flex items-center justify-center box-glow transition-all duration-500 group-hover:scale-125 group-hover:bg-[var(--color-neon-blue-dark)]"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.1 }}
        >
          <div className="text-[var(--color-neon-blue)] group-hover:text-white transition-colors">
            <Terminal size={18} />
          </div>
        </motion.div>

        {/* Node Label (ID) */}
        <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${isLeft ? 'left-20' : 'right-20'} opacity-20 group-hover:opacity-100 transition-opacity`}>
          <span className="text-4xl font-orbitron font-black text-white">{project.id}</span>
        </div>
      </div>

      {/* Project Content Card */}
      <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 md:text-left'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative Background Bar */}
          <div className={`absolute top-0 bottom-0 w-1 bg-[var(--color-neon-blue)] hidden md:block ${isLeft ? 'right-[-40px]' : 'left-[-40px]'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className="glass-panel overflow-hidden border border-white/5 hover:border-[var(--color-neon-blue)]/50 transition-all duration-500 group">
            {/* Project Image */}
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

              {/* Label Overlay */}
              <div className="absolute bottom-4 left-4 md:left-auto md:right-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10">
                <span className="text-[8px] font-orbitron font-bold text-[var(--color-neon-blue)] tracking-widest uppercase">{project.category}</span>
              </div>
            </div>

            {/* Project Text Info */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-4xl font-orbitron font-bold text-white mb-4 tracking-tighter group-hover:text-glow">
                {project.title}
              </h3>
              <p className="text-gray-400 font-space text-sm md:text-base mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className={`flex flex-wrap gap-2 mb-8 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-gray-500 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className={`flex gap-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                <a href={project.liveUrl} className="flex items-center gap-2 px-6 py-3 bg-[var(--color-neon-blue)] text-black font-orbitron font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 interactive">
                  <Globe size={14} /> View Live
                </a>
                <a href={project.githubUrl} className="flex items-center justify-center w-12 h-12 border border-white/10 hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)] transition-all duration-500 interactive">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Use direct transform instead of spring for the central line to reduce CPU overhead
  const pathScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="projects" ref={containerRef} className="relative py-32 bg-black px-4 overflow-hidden [content-visibility:auto]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[var(--color-neon-blue)] opacity-5 blur-[300px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[var(--color-neon-blue)] box-glow" />
              <span className="text-[var(--color-neon-blue)] font-exo tracking-[0.4em] uppercase text-xs font-bold">Selected Artifacts</span>
              <div className="w-12 h-[1px] bg-[var(--color-neon-blue)] box-glow" />
            </div>
            <h2 className="text-5xl md:text-9xl font-orbitron font-black text-white uppercase tracking-tighter leading-none mb-4">
              BUILT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-neon-blue)]">FUTURE</span>
            </h2>
            <div className="w-1 h-32 bg-gradient-to-b from-[var(--color-neon-blue)] to-transparent opacity-20" />
          </motion.div>
        </div>

        {/* Vertical Project Timeline Track */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--color-neon-blue)] to-[var(--color-neon-blue-dark)] box-glow will-change-transform"
              style={{ height: '100%', scaleY: pathScaleY, originY: 0 }}
            />
          </div>

          {/* Project List */}
          <div className="flex flex-col">
            {projects.map((p, i) => (
              <ProjectTimelineCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Global Catalog Footer */}
        <motion.div
          className="mt-20 py-20 flex flex-col items-center justify-center text-center opacity-30"
          whileInView={{ opacity: 1 }}
        >
          <Code2 size={48} className="text-[var(--color-neon-blue)] mb-6 animate-pulse" />
          <p className="font-mono text-xs tracking-[0.8em] text-white uppercase">End of Secure Protocol</p>
          <div className="w-1 h-24 bg-gradient-to-t from-[var(--color-neon-blue)] to-transparent mt-8" />
        </motion.div>

      </div>
    </section>
  );
}
