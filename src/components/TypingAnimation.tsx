import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 0.1,
  delay = 0,
  className = '',
  style = {},
  onComplete,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const cursorElement = cursorRef.current;
    if (!textElement || !cursorElement) return;

    // Clear text initially
    textElement.textContent = '';
    
    // Cursor blinking animation
    gsap.to(cursorElement, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    // Typing animation
    const tl = gsap.timeline({ delay });
    
    text.split('').forEach((char, index) => {
      tl.call(() => {
        textElement.textContent += char;
      }, [], index * speed);
    });

    // Hide cursor after typing is complete
    tl.call(() => {
      gsap.to(cursorElement, { opacity: 0, duration: 0.3 });
      onComplete?.();
    });

    return () => {
      tl.kill();
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={className} style={style}>
      <span ref={textRef}></span>
      <span ref={cursorRef} className="inline-block w-0.5 h-6 bg-current ml-1">|</span>
    </span>
  );
};

export default TypingAnimation;