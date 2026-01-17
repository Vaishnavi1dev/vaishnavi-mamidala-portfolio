import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. Built with passion and code.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with{' '}
            <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
