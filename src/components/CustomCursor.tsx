import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      // Precise check: Only disable if the primary pointer is coarse (like a finger)
      // and hover is not supported (standard mobile behavior)
      const isMobile = window.matchMedia("(pointer: coarse)").matches &&
        !window.matchMedia("(hover: hover)").matches;
      setIsTouchDevice(isMobile);
    };
    checkTouch();
  }, []);

  // Premium spring configuration
  const dotSpringConfig = { stiffness: 800, damping: 50 };
  const ringSpringConfig = { stiffness: 250, damping: 30 };

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
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
        target.classList.contains('interactive') ||
        window.getComputedStyle(target).cursor === 'pointer'
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

  useEffect(() => {
    if (isVisible && !isTouchDevice) {
      document.body.classList.add('cursor-active');
    } else {
      document.body.classList.remove('cursor-active');
    }
    return () => document.body.classList.remove('cursor-active');
  }, [isVisible, isTouchDevice]);

  // Completely hidden on mobile or when not visible
  if (!isVisible || isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[var(--color-neon-blue)] rounded-full pointer-events-none z-[9999] opacity-40"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : (isClicking ? 0.8 : 1),
          opacity: isHovering ? 0.8 : 0.4,
          borderWidth: isHovering ? '1px' : '2px',
        }}
        transition={{ type: 'spring', ...ringSpringConfig }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-neon-blue)] rounded-full pointer-events-none z-[10000] box-glow"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0.5 : (isClicking ? 1.5 : 1),
        }}
      />
    </>
  );
}

