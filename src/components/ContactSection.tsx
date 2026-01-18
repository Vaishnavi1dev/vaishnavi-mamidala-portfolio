import React from 'react';
import AnimatedContent from './AnimatedContent';
import PixelTransition from './PixelTransition';
import { Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen w-full py-24 relative" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative z-10">
          <AnimatedContent distance={80} direction="vertical" reverse duration={1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'rgb(97, 33, 15)' }}>
                Let's <span style={{ color: 'rgb(97, 33, 15)' }}>Connect</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: 'rgb(97, 33, 15)' }}>
                Feel free to connect with me on social media or check out my work on GitHub.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={100} direction="vertical" duration={1} delay={0.2}>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/vaishnavi-mamidala-59a050316"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl transition-all duration-300 hover:scale-105 w-64 h-48"
              >
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full rounded-2xl p-8 flex flex-col items-center gap-4" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(253, 240, 213, 0.2)' }}>
                        <Linkedin size={32} style={{ color: 'rgb(253, 240, 213)' }} />
                      </div>
                      <span className="text-lg font-semibold" style={{ color: 'rgb(253, 240, 213)' }}>LinkedIn</span>
                      <span className="text-sm text-center" style={{ color: 'rgb(253, 240, 213)' }}>
                        Connect with me professionally
                      </span>
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
                      <p className="text-2xl font-bold" style={{ color: 'rgb(253, 240, 213)' }}>Let's Connect!</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='rgb(253, 240, 213)'
                  once={false}
                  animationStepDuration={0.4}
                  className="custom-pixel-card w-full h-full rounded-2xl overflow-hidden"
                />
              </a>

              <a
                href="https://github.com/Vaishnavi1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl transition-all duration-300 hover:scale-105 w-64 h-48"
              >
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full rounded-2xl p-8 flex flex-col items-center gap-4" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(253, 240, 213, 0.2)' }}>
                        <Github size={32} style={{ color: 'rgb(253, 240, 213)' }} />
                      </div>
                      <span className="text-lg font-semibold" style={{ color: 'rgb(253, 240, 213)' }}>GitHub</span>
                      <span className="text-sm text-center" style={{ color: 'rgb(253, 240, 213)' }}>
                        Check out my projects
                      </span>
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
                      <p className="text-2xl font-bold" style={{ color: 'rgb(253, 240, 213)' }}>View Code!</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='rgb(253, 240, 213)'
                  once={false}
                  animationStepDuration={0.4}
                  className="custom-pixel-card w-full h-full rounded-2xl overflow-hidden"
                />
              </a>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
