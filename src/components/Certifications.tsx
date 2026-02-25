import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certs = [
  {
    title: '1 Year Diploma in Information Technology',
    issuer: 'Aptech',
    date: '2024',
  },
  {
    title: 'Python Programming Fundamentals',
    issuer: 'Coursera / IBM',
    date: '2026',
  },
  {
    title: 'Designing User Interfaces & Experiences (UI/UX)',
    issuer: 'Google',
    date: '2026',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider mb-4">
            Verified <span className="text-[var(--color-neon-blue)]">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-neon-blue)] mx-auto box-glow" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 relative overflow-hidden group border-[var(--color-neon-blue)] box-glow"
            >
              {/* Hologram Flicker Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-neon-blue-dark)] to-transparent opacity-0 group-hover:opacity-30 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out" />

              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 bg-black border border-[var(--color-neon-blue)] rounded-full text-[var(--color-neon-blue)] group-hover:text-white group-hover:bg-[var(--color-neon-blue)] transition-colors duration-300">
                  <Award size={32} />
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-glow transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-exo text-[var(--color-neon-blue)] tracking-widest uppercase mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-space text-gray-500">
                    Issued: {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
