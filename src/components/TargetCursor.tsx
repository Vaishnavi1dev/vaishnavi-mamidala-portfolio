import React, { useEffect, useRef, useState } from 'react';

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parallaxOn?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  spinDuration = 2,
  hideDefaultCursor = true,
  parallaxOn = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isInSection, setIsInSection] = useState(false);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [targetBounds, setTargetBounds] = useState({ width: 32, height: 32, x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      // Check if mouse is in hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInside = e.clientX >= rect.left && 
                        e.clientX <= rect.right && 
                        e.clientY >= rect.top && 
                        e.clientY <= rect.bottom;

        setIsInSection(isInside);

        if (isInside) {
          if (hideDefaultCursor) {
            document.body.style.cursor = 'none';
          }
          
          if (targetElement) {
            // Position cursor around the target element
            const targetRect = targetElement.getBoundingClientRect();
            cursorRef.current.style.left = `${targetRect.left + targetRect.width / 2}px`;
            cursorRef.current.style.top = `${targetRect.top + targetRect.height / 2}px`;
            setTargetBounds({
              width: targetRect.width + 16, // Add padding
              height: targetRect.height + 16,
              x: targetRect.left,
              y: targetRect.top
            });
          } else {
            // Follow mouse when not hovering
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
            setTargetBounds({ width: 32, height: 32, x: e.clientX, y: e.clientY });
          }
          
          cursorRef.current.style.opacity = '1';
        } else {
          if (hideDefaultCursor) {
            document.body.style.cursor = 'auto';
          }
          cursorRef.current.style.opacity = '0';
        }
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-target') && isInSection) {
        setIsHovering(true);
        setTargetElement(target);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-target')) {
        setIsHovering(false);
        setTargetElement(null);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (hideDefaultCursor) {
        document.body.style.cursor = 'auto';
      }
    };
  }, [hideDefaultCursor, isInSection, targetElement]);

  const cornerSize = Math.min(targetBounds.width, targetBounds.height) * 0.15;
  const cornerThickness = Math.max(2, cornerSize * 0.2);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 transition-all duration-300"
      style={{
        transform: 'translate(-50%, -50%)',
        opacity: 0,
      }}
    >
      {/* Corner brackets that resize to fit target */}
      <div 
        className="relative transition-all duration-300"
        style={{
          width: `${targetBounds.width}px`,
          height: `${targetBounds.height}px`,
        }}
      >
        {/* Top-left corner */}
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '0',
            left: '0',
            width: `${cornerSize}px`,
            height: `${cornerThickness}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '0',
            left: '0',
            width: `${cornerThickness}px`,
            height: `${cornerSize}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        
        {/* Top-right corner */}
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '0',
            right: '0',
            width: `${cornerSize}px`,
            height: `${cornerThickness}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        <div
          className="absolute transition-all duration-300"
          style={{
            top: '0',
            right: '0',
            width: `${cornerThickness}px`,
            height: `${cornerSize}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        
        {/* Bottom-left corner */}
        <div
          className="absolute transition-all duration-300"
          style={{
            bottom: '0',
            left: '0',
            width: `${cornerSize}px`,
            height: `${cornerThickness}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        <div
          className="absolute transition-all duration-300"
          style={{
            bottom: '0',
            left: '0',
            width: `${cornerThickness}px`,
            height: `${cornerSize}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        
        {/* Bottom-right corner */}
        <div
          className="absolute transition-all duration-300"
          style={{
            bottom: '0',
            right: '0',
            width: `${cornerSize}px`,
            height: `${cornerThickness}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        <div
          className="absolute transition-all duration-300"
          style={{
            bottom: '0',
            right: '0',
            width: `${cornerThickness}px`,
            height: `${cornerSize}px`,
            backgroundColor: 'rgb(97, 33, 15)',
            opacity: isHovering ? 1 : 0.7,
          }}
        />
        
        {/* Center dot (only when not hovering) */}
        {!isHovering && (
          <div
            className="absolute rounded-full transition-all duration-300"
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: 'rgb(97, 33, 15)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.6,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TargetCursor;