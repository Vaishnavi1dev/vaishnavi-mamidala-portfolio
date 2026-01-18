import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

interface FloatingAnimationProps {
  children: ReactNode;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'circular';
  delay?: number;
  className?: string;
}

const FloatingAnimation: React.FC<FloatingAnimationProps> = ({
  children,
  duration = 3,
  distance = 20,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animation;

    switch (direction) {
      case 'up':
        animation = gsap.to(element, {
          y: -distance,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay,
        });
        break;
      case 'down':
        animation = gsap.to(element, {
          y: distance,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay,
        });
        break;
      case 'left':
        animation = gsap.to(element, {
          x: -distance,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay,
        });
        break;
      case 'right':
        animation = gsap.to(element, {
          x: distance,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay,
        });
        break;
      case 'circular':
        animation = gsap.to(element, {
          rotation: 360,
          duration: duration * 2,
          repeat: -1,
          ease: 'none',
          delay,
        });
        gsap.to(element, {
          x: distance,
          y: distance / 2,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay,
        });
        break;
    }

    return () => {
      animation?.kill();
    };
  }, [duration, distance, direction, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default FloatingAnimation;