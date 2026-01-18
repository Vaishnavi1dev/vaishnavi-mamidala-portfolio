import React, { useRef } from 'react';
import AnimatedContent from './AnimatedContent';
import StaggerAnimation from './StaggerAnimation';
import FloatingAnimation from './FloatingAnimation';
import VariableProximity from './VariableProximity';

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="about" className="min-h-screen w-full py-24" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
      <div className="max-w-7xl mx-auto px-6" ref={containerRef} style={{ position: 'relative' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedContent distance={100} direction="vertical" duration={1}>
            <div className="p-8 text-center">
              <FloatingAnimation direction="up" duration={4} distance={15} delay={0}>
                <VariableProximity
                  className="text-4xl md:text-5xl font-heading font-bold mb-6"
                  containerRef={containerRef}
                  radius={200}
                  falloff="linear"
                  minWeight={400}
                  maxWeight={900}
                  style={{ color: 'rgb(253, 240, 213)' }}
                >
                  About Me
                </VariableProximity>
              </FloatingAnimation>
              
              <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.3}>
                <VariableProximity
                  className="text-lg mb-6 leading-relaxed"
                  containerRef={containerRef}
                  radius={150}
                  falloff="linear"
                  minWeight={400}
                  maxWeight={700}
                  style={{ color: 'rgb(253, 240, 213)' }}
                >
                  I'm Vaishnavi Mamidala, a passionate video editor, designer, and developer who brings creative visions to life through code and visual storytelling. I am an undergrad student currently pursuing B.Tech at Keshav Memorial Engineering College, Hyderabad. I specialize in crafting engaging digital experiences that seamlessly blend technical expertise with artistic creativity.
                </VariableProximity>
              </AnimatedContent>
              
              <AnimatedContent distance={80} direction="horizontal" reverse duration={1.2} delay={0.6}>
                <VariableProximity
                  className="text-lg mb-8 leading-relaxed"
                  containerRef={containerRef}
                  radius={150}
                  falloff="linear"
                  minWeight={400}
                  maxWeight={700}
                  style={{ color: 'rgb(253, 240, 213)' }}
                >
                  My journey spans across multiple creative domains - from developing robust web applications using the MERN stack and Python to creating compelling video content with DaVinci Resolve and designing intuitive interfaces with Figma and Affinity. As a student and creator, I believe in the power of combining programming logic with creative design to solve real-world problems and tell meaningful stories.
                </VariableProximity>
              </AnimatedContent>

              <StaggerAnimation 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
                staggerDelay={0.2}
                direction="up"
                distance={40}
                scale={true}
              >
                {[
                  { value: '10+', label: 'Projects Completed' },
                  { value: '3+', label: 'Skills Mastered' },
                  { value: '100%', label: 'Passion Driven' },
                ].map((stat) => (
                  <FloatingAnimation 
                    key={stat.label} 
                    direction="up" 
                    duration={3} 
                    distance={8} 
                    delay={0}
                  >
                    <div className="rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
                      <VariableProximity
                        className="text-2xl md:text-3xl font-heading font-bold mb-1 transition-all duration-300 hover:scale-110"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                        minWeight={600}
                        maxWeight={900}
                        style={{ color: 'rgb(97, 33, 15)' }}
                      >
                        {stat.value}
                      </VariableProximity>
                      <VariableProximity
                        className="text-xs md:text-sm"
                        containerRef={containerRef}
                        radius={80}
                        falloff="linear"
                        minWeight={400}
                        maxWeight={600}
                        style={{ color: 'rgb(97, 33, 15)' }}
                      >
                        {stat.label}
                      </VariableProximity>
                    </div>
                  </FloatingAnimation>
                ))}
              </StaggerAnimation>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
