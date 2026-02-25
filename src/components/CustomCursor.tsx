import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);

    if (touch) return; // Exit if mobile

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      );

      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Rotating Brackets */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
        }}
        transition={{ type: 'spring', ...springConfig }}
      >
        {/* Corner Brackets */}
        <div className="relative w-full h-full relative">
          <motion.div
            className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--color-neon-blue)]"
            animate={{ rotate: isClicking ? 90 : 0 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--color-neon-blue)]"
            animate={{ rotate: isClicking ? -90 : 0 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--color-neon-blue)]"
            animate={{ rotate: isClicking ? -90 : 0 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--color-neon-blue)]"
            animate={{ rotate: isClicking ? 90 : 0 }}
          />
        </div>
      </motion.div>

      {/* Inner Crosshair */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[101] mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ rotate: isHovering ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Vertical Line */}
          <div className="absolute w-[1px] h-3 bg-[var(--color-neon-blue)] opacity-50" />
          {/* Horizontal Line */}
          <div className="absolute h-[1px] w-3 bg-[var(--color-neon-blue)] opacity-50" />

          {/* Center Point */}
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--color-neon-blue)] rounded-full box-glow"
            animate={{
              scale: isClicking ? 0.5 : 1,
              opacity: isClicking ? 1 : 0.8
            }}
          />
        </motion.div>
      </motion.div>

      {/* Secondary Glow Trail (Very Subtle) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-neon-blue)] opacity-10 pointer-events-none z-[98]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicking ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </>
  );
}
