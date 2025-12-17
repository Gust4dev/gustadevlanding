import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-white tracking-tight">Gustavo Dev</h3>
            <p className="text-sm text-secondary mt-1">SaaS Architect & Full-Stack Engineer</p>
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-xs text-secondary/50">
            © {new Date().getFullYear()} The Architect Portfolio.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;