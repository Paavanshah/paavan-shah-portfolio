import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Adjust this to trigger highlight when section is in the middle of the viewport
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.current.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
};