import React from 'react';
import { SOCIAL_LINKS, BRAND_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-lg bg-blue-900 border border-white/10 overflow-hidden flex items-center justify-center">
              <img 
                src={BRAND_CONFIG.logoUrl} 
                alt="Logo" 
                className="w-full h-full object-cover"
                style={{
                  transform: `scale(${BRAND_CONFIG.footerLogo.zoom})`,
                  objectPosition: BRAND_CONFIG.footerLogo.position
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white tracking-tight">{BRAND_CONFIG.name}</h3>
              <p className="text-sm text-secondary mt-1">SaaS Architect & Full-Stack Engineer</p>
            </div>
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
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