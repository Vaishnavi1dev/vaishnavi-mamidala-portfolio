import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedContent from './AnimatedContent';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5
    });
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      tl.fromTo(chars, {
        opacity: 0,
        y: 100,
        rotateX: -90
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');
    }
  }, []);
  const splitText = (text: string) => {
    return text.split('').map((char, index) => <span key={index} className="char inline-block" style={{
      display: char === ' ' ? 'inline' : 'inline-block'
    }}>
        {char === ' ' ? '\u00A0' : char}
      </span>);
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 md:p-12">
         

          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 -mt-6" style={{
          perspective: '1000px'
        }}>
            <span style={{ color: '#61210fff' }}>{splitText("Vaishnavi Mamidala")}</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl" style={{ color: 'rgb(97, 33, 15)' }}>Video Editor, Designer & Developer</span>
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-3xl max-w-3xl mx-auto mb-10 -mt-4" style={{ color: 'rgb(97, 33, 15)' }}>
            I craft beautiful, interactive digital experiences with modern web technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 rounded-full font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105 w-48 text-center" style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}>
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105 w-48 text-center" style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;