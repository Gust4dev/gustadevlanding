import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, ShieldCheck, Zap } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import ProjectVisual from './ProjectVisual';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEngineering = project.category === ProjectCategory.SAAS;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid md:grid-cols-12 gap-8 md:gap-16 items-start py-20 border-b border-white/5 last:border-0"
    >
      {/* Visual Section (Col 7) */}
      <div className={`md:col-span-7 space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden glass aspect-video">
           <ProjectVisual 
             image={project.comparisonImages?.after || project.imageUrl || ''} 
             alt={project.title}
           />
        </div>
      </div>

      {/* Content Section (Col 5) */}
      <div className={`md:col-span-5 space-y-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
             <span className="text-accent font-mono text-xs tracking-widest uppercase">0{index + 1} //</span>
             <div className="h-[1px] flex-1 bg-white/10" />
          </div>
          <h3 className="text-4xl font-display font-bold text-white tracking-tight leading-none">
            {project.title}
          </h3>
        </div>

        <p className="text-secondary text-lg leading-relaxed font-light">
          {project.description}
        </p>

        {/* Technical KPIs - O diferencial da Fase 5 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <Activity size={16} className="text-accent" />
            <div className="text-[10px] text-secondary uppercase tracking-tighter">Performance</div>
            <div className="text-sm font-bold text-white">+90 Lighthouse</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <ShieldCheck size={16} className="text-emerald-500" />
            <div className="text-[10px] text-secondary uppercase tracking-tighter">Segurança</div>
            <div className="text-sm font-bold text-white">RBAC / AES-256</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-mono text-accent/60 bg-accent/5 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-4">
          <a href={project.githubLink} className="text-white hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold">
            <Github size={18} /> CODEBASE
          </a>
          {project.demoLink && (
            <a href={project.demoLink} className="text-white hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold">
              <Zap size={18} /> LIVE DEMO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;