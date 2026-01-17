import React from 'react';
import AnimatedContent from './AnimatedContent';
import StarBorder from './StarBorder';
import { Code2, Palette, Database, Globe, Smartphone, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'GSAP'],
    color: '#7df9ff',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    color: '#a855f7',
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Motion Design', 'Responsive Design', '3D Graphics'],
    color: '#06b6d4',
  },
  {
    title: 'DevOps',
    icon: Globe,
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Vercel', 'Linux'],
    color: '#22c55e',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Expo'],
    color: '#f59e0b',
  },
  {
    title: 'AI/ML',
    icon: Cpu,
    skills: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Computer Vision', 'NLP'],
    color: '#ec4899',
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-container relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <AnimatedContent distance={80} direction="vertical" reverse duration={1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedContent
              key={category.title}
              distance={100}
              direction="vertical"
              duration={1}
              delay={index * 0.1}
            >
              <StarBorder speed={2} color={category.color} className="h-full">
                <div className="card-gradient rounded-xl p-6 h-full border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon
                        size={24}
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 className="text-xl font-heading font-bold">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge"
                        style={{
                          borderColor: `${category.color}40`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StarBorder>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
