import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedContent from './AnimatedContent';
import TypingAnimation from './TypingAnimation';
import FloatingAnimation from './FloatingAnimation';
import TargetCursor from './TargetCursor';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Set up performance optimizations
    gsap.set("*", { force3D: true });
    
    const tl = gsap.timeline({
      delay: 0.3,
      ease: "power2.out"
    });
    
    if (titleRef.current) {
      const nameWords = titleRef.current.querySelectorAll('.name-word');
      
      // Split only the name words into individual characters
      nameWords.forEach((word) => {
        const text = word.textContent || '';
        word.innerHTML = '';
        
        text.split('').forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.willChange = 'transform, opacity';
          span.style.backfaceVisibility = 'hidden';
          span.style.perspective = '1000px';
          word.appendChild(span);
        });
      });
      
      // Animate each character in name words with optimized settings
      nameWords.forEach((word, wordIndex) => {
        const chars = word.querySelectorAll('span');
        
        // Set initial state
        gsap.set(chars, {
          opacity: 0,
          y: 60,
          rotateX: -45,
          scale: 0.8,
          transformOrigin: "center bottom",
          force3D: true
        });
        
        tl.to(chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          stagger: {
            amount: 0.3,
            ease: "power2.out"
          },
          duration: 0.6,
          ease: "back.out(1.2)",
          force3D: true,
          transformOrigin: "center bottom"
        }, wordIndex * 0.2);
      });
    }
    
    if (subtitleRef.current) {
      const subtitleWords = subtitleRef.current.querySelectorAll('.cursor-target');
      
      // Set initial state for subtitle words
      gsap.set(subtitleWords, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        force3D: true
      });
      
      tl.to(subtitleWords, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: {
          amount: 0.4,
          ease: "power1.out"
        },
        duration: 0.5,
        ease: "power2.out",
        force3D: true
      }, "-=0.2");
    }
    
    // Animate buttons with smooth entrance
    const buttons = document.querySelectorAll('.hero-button');
    if (buttons.length > 0) {
      gsap.set(buttons, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        force3D: true
      });
      
      tl.to(buttons, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.1)",
        force3D: true
      }, "-=0.1");
    }
    
    return () => {
      tl.kill();
    };
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 md:p-12">
         

          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 -mt-6" style={{
          perspective: '1000px'
        }}>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <span className="cursor-target name-word inline-block" style={{ color: '#61210fff' }}>Vaishnavi</span>
              <span className="cursor-target name-word inline-block" style={{ color: '#61210fff' }}>Mamidala</span>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl" style={{ color: 'rgb(97, 33, 15)' }}>
              <TypingAnimation
                text="Video Editor, Designer & Developer"
                speed={100}
                delay={2000}
                individualWords={true}
              />
            </div>
          </h1>

          <div ref={subtitleRef} className="text-xl md:text-3xl max-w-3xl mx-auto mb-10 -mt-4 flex flex-wrap justify-center gap-2" style={{ color: 'rgb(97, 33, 15)' }}>
            <span className="cursor-target inline-block">I</span>
            <span className="cursor-target inline-block">craft</span>
            <span className="cursor-target inline-block">beautiful</span>
            <span className="cursor-target inline-block">,</span>
            <span className="cursor-target inline-block">interactive</span>
            <span className="cursor-target inline-block">digital</span>
            <span className="cursor-target inline-block">experiences</span>
            <span className="cursor-target inline-block">with</span>
            <span className="cursor-target inline-block">modern</span>
            <span className="cursor-target inline-block">web</span>
            <span className="cursor-target inline-block">technologies</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <FloatingAnimation direction="up" duration={3} distance={10} delay={0}>
              <a href="#projects" className="hero-button cursor-target px-8 py-4 rounded-full font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105 w-48 text-center" style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}>
                View My Work
              </a>
            </FloatingAnimation>
            <FloatingAnimation direction="up" duration={3} distance={10} delay={0}>
              <a href="#contact" className="hero-button cursor-target px-8 py-4 rounded-full font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105 w-48 text-center" style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}>
                Get In Touch
              </a>
            </FloatingAnimation>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;