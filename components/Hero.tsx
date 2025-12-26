import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Github, ArrowDown, Terminal, Code2 } from 'lucide-react';
import { HERO_TITLE, HERO_SUBTITLE, HERO_DESC } from '../constants';
import LuxuryReveal from './ui/LuxuryReveal';
import Experience3D from './Experience3D';
import { useMobile } from '../hooks/useMobile';

const Hero: React.FC = () => {
  const isMobile = useMobile(); //

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        {!isMobile && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <Experience3D />
            </Suspense>
          </Canvas>
        )}
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-xs font-mono mb-8 tracking-[0.2em] uppercase"
        >
          <Terminal size={14} />
          <span>System.out.println("Hello World");</span> {/* */}
        </motion.div>

        <LuxuryReveal 
          text={HERO_TITLE} //
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter"
        />
        
        <LuxuryReveal 
          text={HERO_SUBTITLE} //
          className="text-lg md:text-xl text-secondary mb-10 font-subtitle font-light tracking-[0.3em] uppercase"
          as="h2"
          delay={0.5}
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-xl mx-auto text-secondary/70 text-base md:text-lg mb-12 leading-relaxed font-light"
        >
          {HERO_DESC} {/* */}
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.2, duration: 0.8 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code2 size={18} /> Ver Engenharia
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <a 
            href="https://github.com/Gust4dev" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/5 transition-all"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;