import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 150,
  direction = 'horizontal',
  reverse = false,
  duration = 1.2,
  ease = 'power3.out',
  initialOpacity = 0.2,
  animateOpacity = true,
  scale = 1,
  threshold = 0.2,
  delay = 0,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getTransform = () => {
      const sign = reverse ? 1 : -1;
      if (direction === 'horizontal') {
        return { x: sign * distance, y: 0 };
      }
      return { x: 0, y: sign * distance };
    };

    const { x, y } = getTransform();

    gsap.set(element, {
      x,
      y,
      opacity: animateOpacity ? initialOpacity : 1,
      scale: scale !== 1 ? 0.9 : 1,
    });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${100 - threshold * 100}%`,
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease,
          delay,
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;
