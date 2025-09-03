import { useState, useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };

    const handleMouseEnter = () => setIsHoveringLink(true);
    const handleMouseLeave = () => setIsHoveringLink(false);

    window.addEventListener('mousemove', handleMouseMove);

    const clickableElements = document.querySelectorAll('a, button, [role="button"]');
    clickableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clickableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorClasses = isHoveringLink
    ? "w-12 h-12 bg-theme-accent/20 border-transparent"
    : "w-5 h-5 border-2 border-theme-accent";

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out ${cursorClasses}`}
    />
  );
};