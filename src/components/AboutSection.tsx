import React from 'react';
import AnimatedContent from './AnimatedContent';
import ElectricBorder from './ElectricBorder';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedContent distance={100} direction="horizontal" duration={1}>
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience
              creating digital experiences that blend creativity with technical
              excellence. I specialize in building modern web applications with
              cutting-edge technologies.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or crafting pixel-perfect
              designs. I believe in writing clean, maintainable code and creating
              interfaces that users love.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-heading font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse
          duration={1}
          delay={0.2}
        >
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.3}
            thickness={2}
            style={{ borderRadius: 24 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Developer portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </ElectricBorder>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default AboutSection;
