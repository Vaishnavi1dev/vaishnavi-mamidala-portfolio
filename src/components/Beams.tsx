import React, { useRef, useEffect } from 'react';

interface BeamsProps {
  beamWidth?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

const Beams: React.FC<BeamsProps> = ({
  beamWidth = 2.7,
  lightColor = '#6be1ff',
  speed = 3.5,
  noiseIntensity = 0.8,
  rotation = 64,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const { offsetWidth: width, offsetHeight: height } = canvas;
      ctx.clearRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-width / 2, -height / 2);

      const beamCount = 15;
      const spacing = width / beamCount;

      for (let i = 0; i < beamCount; i++) {
        const x = i * spacing - width / 2;
        const noise = Math.sin(time * speed + i * 0.5) * noiseIntensity * 20;
        const opacity = 0.3 + Math.sin(time * speed * 0.5 + i) * 0.2;

        const gradient = ctx.createLinearGradient(
          x + noise,
          -height,
          x + noise,
          height * 2
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.3, `${lightColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, lightColor);
        gradient.addColorStop(0.7, `${lightColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(x + noise - beamWidth / 2, -height);
        ctx.lineTo(x + noise + beamWidth / 2, -height);
        ctx.lineTo(x + noise * 1.5 + beamWidth / 2, height * 2);
        ctx.lineTo(x + noise * 1.5 - beamWidth / 2, height * 2);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.globalAlpha = opacity;
        ctx.fill();
      }

      ctx.restore();
      ctx.globalAlpha = 1;

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [beamWidth, lightColor, speed, noiseIntensity, rotation]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Beams;
