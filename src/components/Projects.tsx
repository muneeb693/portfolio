import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A futuristic web application built with React and Three.js, featuring immersive 3D environments and real-time data visualization.',
    tech: ['React', 'Three.js', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/cyber/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Neon Dashboard',
    description: 'Cyberpunk-themed admin dashboard with advanced analytics, interactive charts, and a dark mode UI that glows.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: 'https://picsum.photos/seed/neon/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Quantum E-Commerce',
    description: 'Next-generation e-commerce platform with AR product previews, seamless checkout, and a highly optimized frontend.',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/seed/quantum/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section id="projects" ref={targetRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 z-10"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider mb-4">
            Cinematic <span className="text-[var(--color-neon-blue)]">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-neon-blue)] mx-auto box-glow" />
        </motion.div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-24 w-[200vw] md:w-[150vw] optimized-transform">
          {projects.map((project, index) => (
            <div key={index} className="w-[80vw] md:w-[40vw] flex-shrink-0">
              <div className="glass-panel overflow-hidden group relative h-[500px] flex flex-col">
                {/* Image Container */}
                <div className="relative h-1/2 overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-neon-blue)] opacity-20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between relative z-30 bg-black/80 backdrop-blur-sm">
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-[var(--color-neon-blue)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-space text-gray-400 mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-exo text-[var(--color-neon-blue)] border border-[var(--color-neon-blue-dark)] rounded-full bg-[var(--color-neon-blue-dark)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={project.liveUrl} className="flex items-center gap-2 px-4 py-2 bg-[var(--color-neon-blue-dark)] border border-[var(--color-neon-blue)] text-white font-orbitron text-sm uppercase tracking-widest hover:bg-[var(--color-neon-blue)] hover:text-black transition-all duration-300 box-glow interactive">
                      <ExternalLink size={16} /> View Live
                    </a>
                    <a href={project.githubUrl} className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white font-orbitron text-sm uppercase tracking-widest hover:border-white transition-all duration-300 interactive">
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
