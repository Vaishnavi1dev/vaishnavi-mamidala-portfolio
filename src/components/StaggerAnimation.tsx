import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StaggerAnimationProps {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  className?: string;
}

const StaggerAnimation: React.FC<StaggerAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  duration = 0.8,
  distance = 50,
  direction = 'up',
  scale = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = container.children;
    if (!childElements.length) return;

    // Set initial state
    const getInitialTransform = () => {
      switch (direction) {
        case 'up': return { y: distance, x: 0 };
        case 'down': return { y: -distance, x: 0 };
        case 'left': return { x: distance, y: 0 };
        case 'right': return { x: -distance, y: 0 };
        default: return { y: distance, x: 0 };
      }
    };

    const { x, y } = getInitialTransform();

    gsap.set(childElements, {
      x,
      y,
      opacity: 0,
      scale: scale ? 0.8 : 1,
    });

    // Create scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(childElements, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          stagger: staggerDelay,
          ease: 'back.out(1.7)',
        });
      },
      onLeave: () => {
        gsap.to(childElements, {
          x,
          y,
          opacity: 0,
          scale: scale ? 0.8 : 1,
          duration: duration * 0.5,
          stagger: staggerDelay * 0.5,
          ease: 'power2.inOut',
        });
      },
      onEnterBack: () => {
        gsap.to(childElements, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          stagger: staggerDelay,
          ease: 'back.out(1.7)',
        });
      },
      onLeaveBack: () => {
        gsap.to(childElements, {
          x,
          y,
          opacity: 0,
          scale: scale ? 0.8 : 1,
          duration: duration * 0.5,
          stagger: staggerDelay * 0.5,
          ease: 'power2.inOut',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [staggerDelay, duration, distance, direction, scale]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default StaggerAnimation;