import React, { useRef, useEffect, ReactNode, CSSProperties } from 'react';

interface ElectricBorderProps {
  children: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  style?: CSSProperties;
  className?: string;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#7df9ff',
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  style = {},
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const drawElectricBorder = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;

      const borderRadius = parseInt(String(style.borderRadius || 16));

      // Draw electric border with noise
      ctx.beginPath();
      
      const segments = 100;
      const perimeter = 2 * (width + height);
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const pos = t * perimeter;
        
        let x: number, y: number;
        
        if (pos < width) {
          x = pos;
          y = 0;
        } else if (pos < width + height) {
          x = width;
          y = pos - width;
        } else if (pos < 2 * width + height) {
          x = width - (pos - width - height);
          y = height;
        } else {
          x = 0;
          y = height - (pos - 2 * width - height);
        }
        
        // Add electric noise
        const noise = Math.sin(time * speed * 10 + i * 0.5) * chaos * 3;
        const noise2 = Math.cos(time * speed * 8 + i * 0.3) * chaos * 2;
        
        x += noise;
        y += noise2;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      ctx.stroke();
      
      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      time += 0.016;
      drawElectricBorder();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [color, speed, chaos, thickness, style.borderRadius]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ ...style }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: style.borderRadius }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ElectricBorder;
