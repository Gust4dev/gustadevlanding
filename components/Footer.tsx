import React from 'react';
import { Github, Linkedin, Instagram, ArrowUpRight, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-40 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-20 mb-32">
          
          <div className="md:col-span-6 space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
              VAMOS CRIAR<br /><span className="text-secondary/50">ALGO ÚNICO?</span>
            </h2>
            <a 
              href="mailto:gustavogomes034@outlook.com" 
              className="inline-flex items-center gap-4 text-xl font-mono text-accent hover:gap-8 transition-all duration-500"
            >
              gustavogomes034@outlook.com <ArrowUpRight />
            </a>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">Social</div>
            <ul className="space-y-4">
              <li><a href="https://github.com/Gust4dev" className="text-white hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/gustavo-rodrigues-ti" className="text-white hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-white hover:text-accent transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">Disponibilidade</div>
            <div className="flex items-center gap-2 text-emerald-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-tighter">Pronto para novos projetos</span>
            </div>
            <p className="text-secondary text-sm font-light">
              Atuando globalmente de Anápolis/GO para o mundo.
            </p>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-2 glass rounded-lg">
              <Globe size={14} className="text-secondary" />
            </div>
            <span className="text-[10px] font-mono text-secondary/50 uppercase tracking-widest">
              © {currentYear} Gust4dev Engine. All rights reserved.
            </span>
          </div>

          <div className="text-[10px] font-mono text-secondary/30 uppercase">
            Built with React 19 + Three Fiber + Vercel Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;