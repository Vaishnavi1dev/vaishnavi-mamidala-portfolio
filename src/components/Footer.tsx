import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8" style={{ backgroundColor: 'rgb(97, 33, 15)', borderColor: 'rgba(253, 240, 213, 0.3)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <p className="text-sm" style={{ color: 'rgb(253, 240, 213)' }}>
            © {new Date().getFullYear()} Portfolio. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
