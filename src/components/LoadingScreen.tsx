import React from 'react';
import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--color-neon-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-blue) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Futuristic Hexagon/Orb Loader */}
        <div className="relative w-24 h-24 mb-12">
          {/* Inner Core */}
          <motion.div
            className="absolute inset-4 border-2 border-[var(--color-neon-blue)] rounded-full box-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
              rotate: 360
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Outer Ring 1 */}
          <motion.div
            className="absolute inset-0 border-t-2 border-l-2 border-[var(--color-neon-blue)] rounded-full opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Outer Ring 2 */}
          <motion.div
            className="absolute inset-[-8px] border-b-2 border-r-2 border-[var(--color-neon-blue)] rounded-full opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Tracking Lines */}
          <motion.div
            className="absolute top-1/2 left-[-40px] right-[-40px] h-[1px] bg-[var(--color-neon-blue)] opacity-30"
            animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Brand Name with Glitch & Scanline */}
        <div className="relative">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-black text-white tracking-[0.2em] uppercase text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Muneeb <span className="text-[var(--color-neon-blue)] text-glow">Ur</span> Rehman
          </motion.h1>

          {/* Glitch Overlay Effect */}
          <motion.div
            className="absolute inset-0 text-white opacity-40 select-none pointer-events-none overflow-hidden h-full transform translate-x-1"
            animate={{ x: [-2, 2, -1, 3, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
            style={{ clipPath: 'inset(45% 0 45% 0)' }}
          >
            Muneeb Ur Rehman
          </motion.div>
        </div>

        {/* Status Text */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <motion.div
            className="flex items-center gap-3 px-4 py-1 border border-[var(--color-neon-blue)]/30 bg-[var(--color-neon-blue-dark)]/20 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-blue)] animate-pulse" />
            <span className="text-[10px] font-mono text-[var(--color-neon-blue)] uppercase tracking-[0.3em]">
              Initializing Neural Interface...
            </span>
          </motion.div>

          {/* Progress Percentage */}
          <motion.span
            className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            System v4.0.2 Stable
          </motion.span>
        </div>
      </div>

      {/* Scanning Line Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-[var(--color-neon-blue)] opacity-10 blur-sm pointer-events-none"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
