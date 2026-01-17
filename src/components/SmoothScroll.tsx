import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up smooth scroll behavior
    const sections = gsap.utils.toArray('section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section as Element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(section as Element, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    });

    // Refresh ScrollTrigger after everything is loaded
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export default SmoothScroll;
