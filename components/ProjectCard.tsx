import React from 'react';
import { Project, ProjectCategory } from '../types';
import { Github, ExternalLink, Code2, Hammer } from 'lucide-react';
import ComparisonSlider from './ComparisonSlider';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEngineering = project.category === ProjectCategory.SAAS;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-24 last:mb-0 ${
        index % 2 === 1 ? 'md:grid-flow-dense' : ''
      }`}
    >
      {/* Visual Side */}
      <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
        {project.comparisonImages ? (
          <ComparisonSlider 
            beforeImage={project.comparisonImages.before} 
            afterImage={project.comparisonImages.after} 
          />
        ) : (
          <div className="relative rounded-lg overflow-hidden border border-white/10 group-hover:border-blue-500/30 transition-all shadow-2xl bg-surface">
             {/* Tech/Code Overlay for Engineering projects */}
             {isEngineering && (
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                     {project.isInDevelopment && (
                         <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-mono uppercase tracking-wider rounded border border-yellow-500/20 flex items-center gap-1">
                             <Hammer size={12} /> Em Dev
                         </span>
                     )}
                </div>
             )}

            {project.imageUrl ? (
                <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
            ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-white/5">
                    <Code2 className="w-16 h-16 text-white/20" />
                </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
        <div className="flex items-center gap-3 mb-4">
           <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 ${isEngineering ? 'text-blue-400' : 'text-purple-400'}`}>
             {isEngineering ? 'Sistemas & SaaS' : 'Design & UI'}
           </span>
        </div>
        
        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.demoLink && (
            <a 
              href={project.demoLink}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-blue-400 transition-colors"
            >
              Ver Projeto <ExternalLink size={18} />
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink}
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
            >
              <Github size={18} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;