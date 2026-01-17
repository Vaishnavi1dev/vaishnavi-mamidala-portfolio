import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Scene3D from './Scene3D';
import Beams from './Beams';
import AnimatedContent from './AnimatedContent';
import ClickSpark from './ClickSpark';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      tl.fromTo(
        chars,
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      <Beams
        beamWidth={3}
        lightColor="#7df9ff"
        speed={2}
        noiseIntensity={0.6}
        rotation={45}
      />
      <Scene3D className="opacity-60" />

      <div className="relative z-10 text-center px-6">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse
          duration={1}
          delay={0.2}
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Welcome to my world
          </p>
        </AnimatedContent>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          style={{ perspective: '1000px' }}
        >
          <span className="text-gradient">{splitText("Creative")}</span>
          <br />
          <span className="text-foreground">{splitText("Developer")}</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          I craft beautiful, interactive digital experiences with modern web technologies
        </p>

        <ClickSpark sparkColor="#7df9ff" sparkCount={12}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:glow-box-intense transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </ClickSpark>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
