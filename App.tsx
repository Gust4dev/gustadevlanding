import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthorityStrip from './components/AuthorityStrip';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EngineeringSection from './components/sections/EngineeringSection';
import DeepTechSection from './components/sections/DeepTechSection';
import DesignSection from './components/sections/DesignSection';
import { PROJECTS } from './constants';
import { ProjectCategory } from './types';

function App() {
  const saasProjects = PROJECTS.filter(p => p.category === ProjectCategory.SAAS);
  const designProjects = PROJECTS.filter(p => p.category === ProjectCategory.DESIGN);
  const deepTechProjects = PROJECTS.filter(p => p.category === ProjectCategory.DEEP_TECH);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans cursor-default">
      <Navbar />
      <Hero />
      <AuthorityStrip />
      
      <div id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <EngineeringSection projects={saasProjects} />
        <DeepTechSection projects={deepTechProjects} />
        <DesignSection projects={designProjects} />
      </div>

      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;