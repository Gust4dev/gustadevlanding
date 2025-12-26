import React, { Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PROJECTS } from './constants';
import { ProjectCategory } from './types';

const AuthorityStrip = React.lazy(() => import('./components/AuthorityStrip'));
const About = React.lazy(() => import('./components/About'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));
const EngineeringSection = React.lazy(() => import('./components/sections/EngineeringSection'));
const DeepTechSection = React.lazy(() => import('./components/sections/DeepTechSection'));
const DesignSection = React.lazy(() => import('./components/sections/DesignSection'));

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovered ? 2.5 : 1
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
    />
  );
};

function App() {
  const saasProjects = PROJECTS.filter(p => p.category === ProjectCategory.SAAS);
  const designProjects = PROJECTS.filter(p => p.category === ProjectCategory.DESIGN);
  const deepTechProjects = PROJECTS.filter(p => p.category === ProjectCategory.DEEP_TECH);

  return (
    <div className="relative">
      <div className="noise-bg" />
      <CustomCursor />
      
      <main className="flex flex-col">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            
            <Suspense fallback={<div className="h-20" />}>
              <AuthorityStrip />
              
              <div id="projects" className="container mx-auto px-6 py-32 space-y-40">
                <EngineeringSection projects={saasProjects} />
                <DeepTechSection projects={deepTechProjects} />
                <DesignSection projects={designProjects} />
              </div>

              <About />
              <Footer />
              <WhatsAppButton />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;