import React from 'react';
import { motion } from 'framer-motion';

interface ProjectVisualProps {
  image: string;
  alt: string;
}

const ProjectVisual: React.FC<ProjectVisualProps> = ({ image, alt }) => {
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden group">
      <motion.img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover"
        initial={{ filter: "grayscale(100%)", opacity: 0.8 }}
        whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      />
      
      {/* Overlay opcional para dar profundidade inicial */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
};

export default ProjectVisual;
