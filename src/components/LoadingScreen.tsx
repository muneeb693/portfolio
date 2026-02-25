import React from 'react';
import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Glowing Line */}
      <motion.div
        className="absolute top-1/2 left-0 h-[2px] bg-[var(--color-neon-blue)] box-glow"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* 3D Logo / Symbol Placeholder */}
        <motion.div
          className="w-16 h-16 mb-8 border-2 border-[var(--color-neon-blue)] box-glow"
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d' }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-orbitron font-bold text-white tracking-widest uppercase glitch-effect"
          data-text="Muneeb Ur Rehman"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Muneeb Ur Rehman
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl font-exo text-[var(--color-neon-blue)] tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
