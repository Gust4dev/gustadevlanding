import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-blue-900 border border-white/10 flex items-center justify-center">
             <img 
               src={BRAND_CONFIG.logoUrl} 
               alt="Logo" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               style={{
                 transform: `scale(${BRAND_CONFIG.navbarLogo.zoom})`,
                 objectPosition: BRAND_CONFIG.navbarLogo.position
               }}
             />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-tighter">
            {BRAND_CONFIG.name.split(' ')[0]}<span className="text-blue-500">{BRAND_CONFIG.name.split(' ')[1]}</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-secondary hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('#contact')}
             className="px-5 py-2 bg-white text-black text-xs font-bold rounded hover:bg-white/90 transition-all uppercase tracking-widest"
          >
            Contato
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium text-secondary hover:text-white transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full py-4 bg-white text-black text-sm font-bold rounded uppercase tracking-widest"
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
