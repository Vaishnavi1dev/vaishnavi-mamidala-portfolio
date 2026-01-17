import React from 'react';
import AnimatedContent from './AnimatedContent';
import StarBorder from './StarBorder';
import { Code2, Video, FileCode, Layers, Coffee, Braces, Zap, BarChart3, Database, TrendingUp, Brain, Film, Figma, Palette, Play } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', icon: FileCode },
      { name: 'MERN Stack', icon: Layers },
      { name: 'Java', icon: Coffee },
      { name: 'JavaScript', icon: Braces },
      { name: 'C', icon: Zap },
      { name: 'Scikit-learn', icon: Brain },
      { name: 'NumPy', icon: BarChart3 },
      { name: 'Pandas', icon: Database },
      { name: 'Matplotlib', icon: TrendingUp },
      { name: 'PyTorch', icon: Brain },
    ],
    color: '#7df9ff',
  },
  {
    title: 'Video Editing & Designing',
    icon: Video,
    skills: [
      { name: 'DaVinci Resolve', icon: Film },
      { name: 'Figma', icon: Figma },
      { name: 'Affinity', icon: Palette },
      { name: 'Motion Graphics', icon: Play },
    ],
    color: '#ec4899',
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-24 relative" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-10">
          <AnimatedContent distance={80} direction="vertical" reverse duration={1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'rgb(97, 33, 15)' }}>
                My <span style={{ color: 'rgb(97, 33, 15)' }}>Skills</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgb(97, 33, 15)' }}>
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </AnimatedContent>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <AnimatedContent
                key={category.title}
                distance={100}
                direction="vertical"
                duration={1}
                delay={index * 0.1}
                className="flex-1 min-w-0"
              >
                <StarBorder speed={2} color="rgb(97, 33, 15)" className="h-full">
                  <div className="rounded-xl p-8 h-full flex flex-col min-h-[400px] hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(253, 240, 213, 0.2)' }}>
                        <category.icon
                          size={28}
                          style={{ color: 'rgb(253, 240, 213)' }}
                        />
                      </div>
                      <h3 className="text-2xl font-heading font-bold" style={{ color: 'rgb(253, 240, 213)' }}>
                        {category.title}
                      </h3>
                    </div>

                    <div className={`flex-1 ${category.title === 'Video Editing & Designing' ? 'flex flex-col items-center gap-3' : 'flex flex-wrap gap-3 content-start justify-center'}`}>
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 border hover:scale-105"
                          style={{ 
                            backgroundColor: '#fdf0d5ff', 
                            color: 'rgb(97, 33, 15)',
                            borderColor: 'rgb(253, 240, 213)'
                          }}
                        >
                          <skill.icon size={18} style={{ color: 'rgb(97, 33, 15)' }} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StarBorder>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
