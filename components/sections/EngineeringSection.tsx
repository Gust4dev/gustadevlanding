import React from 'react';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import { Project } from '../../types';

interface EngineeringSectionProps {
  projects: Project[];
}

const EngineeringSection: React.FC<EngineeringSectionProps> = ({ projects }) => {
  return (
    <section className="mb-32">
      <SectionHeader 
        number="01" 
        title="Engenharia & SaaS" 
        subtitle="Sistemas Complexos" 
        description="Arquitetura escalável, segurança RBAC e funcionalidades em tempo real. Onde o código resolve problemas de negócio." 
        color="blue"
      />
      
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EngineeringSection;
