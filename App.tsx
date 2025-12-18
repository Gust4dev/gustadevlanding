import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PROJECTS } from './constants';
import { ProjectCategory } from './types';

// Lazy load below-the-fold components
const AuthorityStrip = React.lazy(() => import('./components/AuthorityStrip'));
const About = React.lazy(() => import('./components/About'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));
const EngineeringSection = React.lazy(() => import('./components/sections/EngineeringSection'));
const DeepTechSection = React.lazy(() => import('./components/sections/DeepTechSection'));
const DesignSection = React.lazy(() => import('./components/sections/DesignSection'));

function App() {
  const saasProjects = PROJECTS.filter(p => p.category === ProjectCategory.SAAS);
  const designProjects = PROJECTS.filter(p => p.category === ProjectCategory.DESIGN);
  const deepTechProjects = PROJECTS.filter(p => p.category === ProjectCategory.DEEP_TECH);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans cursor-default">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <AuthorityStrip />
        
        <div id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <EngineeringSection projects={saasProjects} />
          <DeepTechSection projects={deepTechProjects} />
          <DesignSection projects={designProjects} />
        </div>

        <About />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </main>
  );
}

export default App;