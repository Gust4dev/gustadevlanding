import React from 'react';
import Hero from './components/Hero';
import AuthorityStrip from './components/AuthorityStrip';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { PROJECTS } from './constants';
import { ProjectCategory } from './types';
import { Cpu, Database, Layers } from 'lucide-react';

function App() {
  const saasProjects = PROJECTS.filter(p => p.category === ProjectCategory.SAAS);
  const designProjects = PROJECTS.filter(p => p.category === ProjectCategory.DESIGN);
  const deepTechProjects = PROJECTS.filter(p => p.category === ProjectCategory.DEEP_TECH);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      <Hero />
      <AuthorityStrip />
      
      <div id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* --- SECTION 1: ENGINEERING & SAAS --- */}
        <section className="mb-32">
          <div className="mb-16 border-l-4 border-blue-600 pl-6">
            <h2 className="text-sm font-mono text-blue-500 mb-2 uppercase tracking-widest">01. Engenharia & SaaS</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Sistemas Complexos</h3>
            <p className="text-secondary max-w-xl text-lg">
              Arquitetura escalável, segurança RBAC e funcionalidades em tempo real. Onde o código resolve problemas de negócio.
            </p>
          </div>
          
          <div className="space-y-16">
            {saasProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* --- SECTION 2: DEEP TECH (Grid Layout) --- */}
        <section className="mb-32">
           <div className="mb-16 border-l-4 border-purple-600 pl-6">
            <h2 className="text-sm font-mono text-purple-500 mb-2 uppercase tracking-widest">02. Deep Tech & Backend</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">AI & Algoritmos</h3>
            <p className="text-secondary max-w-xl text-lg">
              Soluções "under the hood". Integração de LLMs, criptografia de dados e algoritmos de alta performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deepTechProjects.map((project, index) => {
                // Determine icon and color based on index/id for variety
                let icon = <Layers size={24} />;
                let colorClass = "text-red-400";
                let bgClass = "bg-red-500/20";
                
                if (project.id === 'vect-ai') { 
                    icon = <Cpu size={24} />; 
                    colorClass = "text-purple-400";
                    bgClass = "bg-purple-500/20";
                } else if (project.id === 'psicare-api') {
                    icon = <Database size={24} />;
                    colorClass = "text-green-400";
                    bgClass = "bg-green-500/20";
                }

                return (
                    <div key={project.id} className="p-8 rounded-2xl border border-white/10 bg-surface hover:bg-white/5 transition-all group hover:-translate-y-1 duration-300">
                        <div className={`w-14 h-14 ${bgClass} rounded-xl flex items-center justify-center mb-6 ${colorClass}`}>
                            {icon}
                        </div>
                        <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h4>
                        <p className="text-secondary text-sm leading-relaxed mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className={`text-xs font-mono ${colorClass} opacity-80`}>
                                    {tag} •
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
          </div>
        </section>

        {/* --- SECTION 3: HIGH-END DESIGN --- */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-t border-white/10 pt-24">
            <div>
              <h2 className="text-sm font-mono text-emerald-400 mb-2 uppercase tracking-widest">03. High-Fidelity Frontend</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Interface & UX</h3>
            </div>
            <p className="text-secondary max-w-md text-right md:text-left text-sm">
              Quando a engenharia robusta encontra o design de luxo. Foco total em conversão e fluidez.
            </p>
          </div>

          <div className="space-y-24">
             {designProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

      </div>

      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;