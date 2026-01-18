import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  individualWords?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
  style = {},
  onComplete,
  individualWords = false,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete]);

  if (isComplete && individualWords) {
    const parts = text.split(/(\s+|,|&)/).filter(part => part.trim() !== '' || part === ' ');
    
    return (
      <span className={className} style={style}>
        <span className="flex flex-wrap justify-center gap-1 items-center">
          {parts.map((part, index) => {
            if (part === ' ') return null;
            return (
              <span key={index} className="cursor-target inline-block">
                {part}
              </span>
            );
          })}
          <span 
            className="inline-block w-0.5 h-6 bg-current ml-1"
            style={{
              animation: 'blink 1s infinite'
            }}
          >
            |
          </span>
        </span>
        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </span>
    );
  }

  return (
    <span className={className} style={style}>
      <span className={individualWords ? '' : 'cursor-target'}>
        {displayText}
      </span>
      <span 
        className="inline-block w-0.5 h-6 bg-current ml-1"
        style={{
          animation: 'blink 1s infinite'
        }}
      >
        |
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypingAnimation;