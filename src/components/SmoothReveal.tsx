import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SmoothReveal: React.FC<SmoothRevealProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state - more subtle
    gsap.set(element, {
      y: 30,
      opacity: 0,
      scale: 0.95,
    });

    // Create smooth scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay,
        });
      },
      onLeave: () => {
        gsap.to(element, {
          y: -20,
          opacity: 0.3,
          scale: 0.98,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      },
      onEnterBack: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(element, {
          y: 20,
          opacity: 0.3,
          scale: 0.98,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default SmoothReveal;