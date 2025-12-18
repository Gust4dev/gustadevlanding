import React from 'react';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import { Project } from '../../types';

interface DesignSectionProps {
  projects: Project[];
}

const DesignSection: React.FC<DesignSectionProps> = ({ projects }) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-t border-white/10 pt-24">
        <SectionHeader 
          number="03" 
          title="High-Fidelity Frontend" 
          subtitle="Interface & UX" 
          description="Quando a engenharia robusta encontra o design de luxo. Foco total em conversão e fluidez." 
          color="emerald"
        />
      </div>

      <div className="space-y-24">
         {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
