import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Globe } from 'lucide-react';
import LuxuryReveal from './ui/LuxuryReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* Lado Esquerdo: Imagem com Overlay Técnico */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-10 -left-10 text-[12vw] font-display font-black text-white/[0.02] leading-none pointer-events-none">
              GUSTA
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass">
              <motion.img 
                src="/images/projects/Gustadev.webp" 
                alt="Gustavo" 
                className="w-full h-full object-cover"
                initial={{ filter: "grayscale(100%)", opacity: 0.5 }}
                whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating Tech Stats */}
            <motion.div 
              whileInView={{ x: [0, 20, 0] }} 
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 top-1/4 p-6 glass rounded-2xl backdrop-blur-3xl"
            >
              <div className="text-accent font-mono text-xs mb-1">UPTIME</div>
              <div className="text-2xl font-display font-bold text-white tracking-tighter">99.9%</div>
            </motion.div>
          </div>

          {/* Lado Direito: Texto Editorial */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase">Architecture & Mindset</span>
              <LuxuryReveal 
                text="TRANSFORMANDO COMPLEXIDADE EM ELEGÂNCIA TÉCNICA." 
                className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-[0.9]"
              />
              <p className="text-secondary text-xl font-light leading-relaxed max-w-2xl">
                Como Arquiteto de SaaS e Engenheiro Full-Cycle, meu foco não é apenas "codar", mas construir ecossistemas digitais resilientes, escaláveis e esteticamente impecáveis.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-display font-bold uppercase tracking-widest text-xs">
                  <Cpu size={16} className="text-accent" /> Systems
                </div>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  Desenvolvimento de arquiteturas baseadas em microserviços e alta disponibilidade.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-display font-bold uppercase tracking-widest text-xs">
                  <Globe size={16} className="text-accent" /> Global Reach
                </div>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  Experiência em projetos internacionais focados em performance extrema.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;