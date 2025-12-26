import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Binary, Code2 } from 'lucide-react';
import { Project } from '@/types';
import SectionHeader from './SectionHeader';

interface DeepTechSectionProps {
  projects: Project[];
}

const DeepTechSection: React.FC<DeepTechSectionProps> = ({ projects }) => {
  return (
    <section className="py-32 relative">
      <SectionHeader 
        number="02" 
        title="Deep Tech & Backend" 
        subtitle="Lógica & Algoritmos" 
        description="Onde a performance é medida em milissegundos. Arquiteturas resilientes para processamento de dados críticos." 
        color="purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group relative p-10 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all"
          >
            {/* Efeito de Scanline visual */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
            <div className="mb-8 p-3 w-fit rounded-lg glass text-purple-400">
               {project.id === 'vect-ai' ? <Cpu size={24} /> : 
                project.id === 'psicare-api' ? <Database size={24} /> : <Binary size={24} />}
            </div>

            <h4 className="text-xl font-display font-bold text-white mb-4 italic tracking-tight">
              {project.title}
            </h4>
            
            <p className="text-secondary text-sm leading-relaxed mb-8 font-light">
              {project.description}
            </p>

            <div className="space-y-3">
               <div className="text-[10px] text-secondary/40 font-mono tracking-widest uppercase">Stack Principal</div>
               <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] text-purple-300/60 font-mono">#{tag}</span>
                  ))}
               </div>
            </div>

            <a 
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-purple-400"
            >
              <Code2 size={20} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DeepTechSection;