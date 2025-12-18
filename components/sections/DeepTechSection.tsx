import React from 'react';
import { Cpu, Database, Layers } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface DeepTechSectionProps {
  projects: Project[];
}

const DeepTechSection: React.FC<DeepTechSectionProps> = ({ projects }) => {
  return (
    <section className="mb-32">
       <SectionHeader 
        number="02" 
        title="Deep Tech & Backend" 
        subtitle="AI & Algoritmos" 
        description="Soluções 'under the hood'. Integração de LLMs, criptografia de dados e algoritmos de alta performance." 
        color="purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => {
            let icon = <Layers size={24} />;
            let colorClass = "text-red-400";
            let bgClass = "bg-red-500/20";
            let borderColor = "group-hover:border-red-500/50";
            
            if (project.id === 'vect-ai') { 
                icon = <Cpu size={24} />; 
                colorClass = "text-purple-400";
                bgClass = "bg-purple-500/20";
                borderColor = "group-hover:border-purple-500/50";
            } else if (project.id === 'psicare-api') {
                icon = <Database size={24} />;
                colorClass = "text-green-400";
                bgClass = "bg-green-500/20";
                borderColor = "group-hover:border-green-500/50";
            }

            return (
                <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl border border-white/10 bg-surface hover:bg-white/5 transition-all group hover:-translate-y-2 duration-300 ${borderColor}`}
                >
                    <div className={`w-14 h-14 ${bgClass} rounded-xl flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                            <span key={i} className={`text-xs font-mono ${colorClass} opacity-80`}>
                                {tag} •
                            </span>
                        ))}
                    </div>
                </motion.div>
            );
        })}
      </div>
    </section>
  );
};

export default DeepTechSection;
