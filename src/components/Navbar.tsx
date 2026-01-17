import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: 'power3.inOut',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="text-2xl font-heading font-bold text-gradient"
        >
          Portfolio
        </button>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('contact');
          }}
          className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:glow-box transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
