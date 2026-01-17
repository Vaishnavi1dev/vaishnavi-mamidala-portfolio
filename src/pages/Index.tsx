import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ClickSpark from '@/components/ClickSpark';
import Beams from '@/components/Beams';

const Index: React.FC = () => {
  return (
    <ClickSpark sparkColor="#7df9ff" sparkSize={10} sparkCount={8}>
      <div className="relative min-h-screen">
        {/* Fixed Beams Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <Beams
            beamWidth={2.7}
            lightColor="#7df9ff"
            speed={3.5}
            noiseIntensity={0.8}
            rotation={64}
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <SmoothScroll>
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </main>
            <Footer />
          </SmoothScroll>
        </div>
      </div>
    </ClickSpark>
  );
};

export default Index;
