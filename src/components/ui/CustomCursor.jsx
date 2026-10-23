import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const requestRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Store coordinates in refs to completely avoid React re-renders during mouse movement
  const mouse = useRef({ x: -100, y: -100 });
  const trailing = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable custom cursor on touch devices to prevent mobile bugs
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Move the inner dot instantly for immediate responsiveness
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      // Detect if we are hovering over clickable elements
      if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Animation loop for the smooth trailing ring
    const animate = () => {
      // Linear Interpolation (LERP) for buttery smooth trailing effect
      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.2;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.2;

      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate3d(${trailing.current.x}px, ${trailing.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Global styles to hide the default OS cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Inner Dot - Instant precise tracking */}
      <div
        ref={cursorDot}
        className={`fixed top-0 left-0 w-2 h-2 bg-theme-accent rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 transition-opacity duration-200 ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
      />
      
      {/* Outer Ring - Smooth trailing & hover expansion */}
      <div
        ref={cursorRing}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] -ml-4 -mt-4 transition-all duration-300 ease-out border ${
          isHovering 
            ? 'scale-150 bg-theme-accent/20 border-transparent backdrop-blur-[2px]' 
            : 'scale-100 bg-transparent border-theme-accent/60'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};