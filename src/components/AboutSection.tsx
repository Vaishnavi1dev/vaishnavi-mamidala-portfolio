import React from 'react';
import AnimatedContent from './AnimatedContent';
import ElectricBorder from './ElectricBorder';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen w-full py-24" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent distance={100} direction="vertical" duration={1}>
            <div className="p-8 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6" style={{ color: 'rgb(253, 240, 213)' }}>
                About <span style={{ color: 'rgb(253, 240, 213)' }}>Me</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'rgb(253, 240, 213)' }}>
                I'm Vaishnavi Mamidala, a passionate video editor, designer, and developer who brings creative visions to life through code and visual storytelling. I am an undergrad student currently pursuing B.Tech at Keshav Memorial Engineering College, Hyderabad. I specialize in crafting engaging digital experiences that seamlessly blend technical expertise with artistic creativity.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgb(253, 240, 213)' }}>
                My journey spans across multiple creative domains - from developing robust web applications using the MERN stack and Python to creating compelling video content with DaVinci Resolve and designing intuitive interfaces with Figma and Affinity. As a student and creator, I believe in the power of combining programming logic with creative design to solve real-world problems and tell meaningful stories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { value: '10+', label: 'Projects Completed' },
                  { value: '3+', label: 'Skills Mastered' },
                  { value: '100%', label: 'Passion Driven' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl p-4 text-center hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
                    <div className="text-2xl md:text-3xl font-heading font-bold mb-1" style={{ color: 'rgb(97, 33, 15)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm" style={{ color: 'rgb(97, 33, 15)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
