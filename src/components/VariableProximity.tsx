import React, { useEffect, useRef, RefObject } from 'react';

interface VariableProximityProps {
  children: React.ReactNode;
  className?: string;
  containerRef: RefObject<HTMLElement>;
  radius?: number;
  falloff?: 'linear' | 'exponential';
  style?: React.CSSProperties;
  minWeight?: number;
  maxWeight?: number;
}

const VariableProximity: React.FC<VariableProximityProps> = ({
  children,
  className = '',
  containerRef,
  radius = 100,
  falloff = 'linear',
  style = {},
  minWeight = 400,
  maxWeight = 900,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current || !containerRef.current) return;

      const textRect = textRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to text center
      const textCenterX = textRect.left + textRect.width / 2;
      const textCenterY = textRect.top + textRect.height / 2;
      
      // Calculate distance from mouse to text center
      const distance = Math.sqrt(
        Math.pow(e.clientX - textCenterX, 2) + Math.pow(e.clientY - textCenterY, 2)
      );
      
      // Calculate proximity factor (0 = far, 1 = close)
      let proximityFactor = Math.max(0, 1 - distance / radius);
      
      if (falloff === 'exponential') {
        proximityFactor = Math.pow(proximityFactor, 2);
      }
      
      // Font weight interpolation
      const currentWeight = minWeight + (maxWeight - minWeight) * proximityFactor;
      
      // Apply the font weight
      textRef.current.style.fontWeight = currentWeight.toString();
      textRef.current.style.fontVariationSettings = `'wght' ${currentWeight}`;
    };

    // Add event listener to document for global mouse tracking
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef, radius, falloff, minWeight, maxWeight]);

  return (
    <div
      ref={textRef}
      className={className}
      style={{
        fontWeight: minWeight.toString(),
        fontVariationSettings: `'wght' ${minWeight}`,
        transition: 'font-weight 0.1s ease-out, font-variation-settings 0.1s ease-out',
        cursor: 'default',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default VariableProximity;