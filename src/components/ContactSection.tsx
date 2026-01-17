import React, { useState } from 'react';
import AnimatedContent from './AnimatedContent';
import ElectricBorder from './ElectricBorder';
import ClickSpark from './ClickSpark';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <AnimatedContent distance={80} direction="vertical" reverse duration={1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedContent distance={100} direction="horizontal" duration={1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Let's talk about your project
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and help bring ideas to life.
                  Whether you need a full website, a web app, or just some consultation,
                  feel free to reach out.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'hello@example.com', href: 'mailto:hello@example.com' },
                  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: MapPin, text: 'San Francisco, CA', href: '#' },
                ].map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com' },
                  { icon: Linkedin, href: 'https://linkedin.com' },
                  { icon: Twitter, href: 'https://twitter.com' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
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
              speed={0.8}
              chaos={0.3}
              thickness={2}
              style={{ borderRadius: 24 }}
            >
              <form
                onSubmit={handleSubmit}
                className="card-gradient rounded-3xl p-8 space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <ClickSpark sparkColor="#7df9ff" sparkCount={10}>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 hover:glow-box-intense transition-all duration-300"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </ClickSpark>
              </form>
            </ElectricBorder>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
