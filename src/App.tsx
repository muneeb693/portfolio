import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Re-added the transition prop
            className="relative w-full overflow-hidden bg-black gpu-accelerated"
          >
            {/* Ambient background glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-neon-blue)] opacity-10 blur-[120px] rounded-full mix-blend-screen" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600 opacity-10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10">
              <Hero />
              <About />
              <Resume />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
