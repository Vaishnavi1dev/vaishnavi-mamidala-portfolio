import React, { useRef, useEffect, ReactNode } from 'react';

interface StarBorderProps {
  children: ReactNode;
  speed?: number;
  color?: string;
  className?: string;
}

const StarBorder: React.FC<StarBorderProps> = ({
  children,
  speed = 2,
  color = 'cyan',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; progress: number }[] = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticle = () => {
      particles.push({
        x: 0,
        y: 0,
        progress: 0,
      });
    };

    const getPointOnBorder = (progress: number) => {
      const { width, height } = canvas;
      const perimeter = 2 * (width + height);
      const pos = (progress % 1) * perimeter;

      if (pos < width) {
        return { x: pos, y: 0 };
      } else if (pos < width + height) {
        return { x: width, y: pos - width };
      } else if (pos < 2 * width + height) {
        return { x: width - (pos - width - height), y: height };
      } else {
        return { x: 0, y: height - (pos - 2 * width - height) };
      }
    };

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Add new particles
      if (Math.random() < 0.1) {
        createParticle();
      }

      // Update and draw particles
      particles = particles.filter((p) => p.progress < 1);

      particles.forEach((p) => {
        p.progress += 0.005 * speed;
        const { x, y } = getPointOnBorder(p.progress);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Trail effect
        for (let i = 1; i <= 5; i++) {
          const trailProgress = p.progress - i * 0.01;
          if (trailProgress > 0) {
            const trail = getPointOnBorder(trailProgress);
            ctx.beginPath();
            ctx.arc(trail.x, trail.y, 4 - i * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(125, 249, 255, ${0.3 - i * 0.05})`;
            ctx.fill();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [speed, color]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarBorder;
