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
    const tl = gsap.timeline({
      delay: 0.5
    });
    if (titleRef.current) {
      const nameWords = titleRef.current.querySelectorAll('.cursor-target');
      tl.fromTo(nameWords, {
        opacity: 0,
        y: 100,
        rotateX: -90
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
    if (subtitleRef.current) {
      const subtitleWords = subtitleRef.current.querySelectorAll('.cursor-target');
      tl.fromTo(subtitleWords, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4');
    }
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
              <span className="cursor-target inline-block" style={{ color: '#61210fff' }}>Vaishnavi</span>
              <span className="cursor-target inline-block" style={{ color: '#61210fff' }}>Mamidala</span>
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

          <div className="text-xl md:text-3xl max-w-3xl mx-auto mb-10 -mt-4 flex flex-wrap justify-center gap-2" style={{ color: 'rgb(97, 33, 15)' }}>
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
              <a href="#projects" className="cursor-target px-8 py-4 rounded-full font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105 w-48 text-center" style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}>
                View My Work
              </a>
            </FloatingAnimation>
            <FloatingAnimation direction="up" duration={3} distance={10} delay={0}>
              <a href="#contact" className="cursor-target px-8 py-4 rounded-full font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105 w-48 text-center" style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}>
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