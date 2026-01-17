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

const Index: React.FC = () => {
  return (
    <ClickSpark sparkColor="#7df9ff" sparkSize={10} sparkCount={8}>
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
    </ClickSpark>
  );
};

export default Index;
