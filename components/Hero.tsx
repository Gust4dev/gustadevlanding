import React from 'react';
import { Github, ArrowDown, Terminal, Code2 } from 'lucide-react';
import LuxuryReveal from './ui/LuxuryReveal';
import { HERO_TITLE, HERO_SUBTITLE, HERO_DESC } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface to-background">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10">
        
        {/* Animated Badge: System.out.println */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-mono mb-8"
        >
          <Terminal size={14} />
          <span>System.out.println("Hello World");</span>
        </motion.div>

        <LuxuryReveal 
          text={HERO_TITLE} 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 tracking-tight"
          delay={0.2}
        />
        
        <LuxuryReveal 
          text={HERO_SUBTITLE} 
          className="text-xl md:text-2xl text-secondary mb-8 font-light"
          as="h2"
          delay={0.8}
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-secondary/80 text-lg mb-12 leading-relaxed"
        >
          {HERO_DESC}
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.4, duration: 0.8 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Code2 size={20} /> Ver Engenharia
          </button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 flex items-center justify-center gap-2 border border-white/20 text-white rounded hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            <Github size={20} /> GitHub
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;