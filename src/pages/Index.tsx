import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import FaultyTerminal from '@/components/FaultyTerminal';

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed FaultyTerminal Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#37363629"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={true}
            brightness={1}
          />
        </div>
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <SmoothScroll>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </div>
  );
};

export default Index;
