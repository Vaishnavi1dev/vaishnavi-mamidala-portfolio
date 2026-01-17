import React, { useCallback, useRef, ReactNode } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  id: number;
}

interface ClickSparkProps {
  children: ReactNode;
  sparkSize?: number;
  sparkColor?: string;
  sparkCount?: number;
  className?: string;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkSize = 13,
  sparkColor = '#7df9ff',
  sparkCount = 8,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparkIdRef = useRef(0);

  const createSpark = useCallback((x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      const angle = (360 / sparkCount) * i;
      const id = sparkIdRef.current++;

      spark.className = 'spark';
      spark.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${sparkSize}px;
        height: ${sparkSize / 3}px;
        background: ${sparkColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: rotate(${angle}deg);
        box-shadow: 0 0 ${sparkSize}px ${sparkColor};
        animation: spark-fly-${id} 0.6s ease-out forwards;
      `;

      const style = document.createElement('style');
      const distance = 50 + Math.random() * 30;
      const radians = (angle * Math.PI) / 180;
      const endX = Math.cos(radians) * distance;
      const endY = Math.sin(radians) * distance;

      style.textContent = `
        @keyframes spark-fly-${id} {
          0% {
            transform: rotate(${angle}deg) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(${angle}deg) translateX(${distance}px) scale(0);
            opacity: 0;
          }
        }
      `;

      document.head.appendChild(style);
      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
        style.remove();
      }, 600);
    }
  }, [sparkSize, sparkColor, sparkCount]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    createSpark(e.clientX, e.clientY);
  }, [createSpark]);

  return (
    <div
      ref={containerRef}
      className={className}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  );
};

export default ClickSpark;
