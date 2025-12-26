import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface ComparisonSlideProps {
  beforeImage: string;
  afterImage: string;
}

const ComparisonSlide: React.FC<ComparisonSlideProps> = ({ beforeImage, afterImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(50);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    mouseX.set(x);
  };

  return (
    <div 
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-none group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Camada Base (Arte Final) */}
      <img 
        src={afterImage} 
        alt="Final Art" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
      />

      {/* Camada Revelada (Before/Wireframe) */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-10"
        style={{ 
          clipPath: `inset(0 ${100 - (smoothX.get() || 50)}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - (smoothX.get() || 50)}% 0 0)`
        }}
      >
        <img 
          src={beforeImage} 
          alt="Technical Base" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3] sepia-[0.5] hue-rotate-[200deg] grayscale transition-transform duration-[2s] group-hover:scale-105"
        />
      </motion.div>

      {/* Divisor Estilizado (A "Lâmina" de Luz) */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        style={{ left: `${smoothX.get()}%` }}
      />

      {/* Overlay de HUD */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
        <div className="px-3 py-1 glass rounded text-[8px] font-mono text-white tracking-[0.3em] uppercase">
          Render: Final_01
        </div>
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      </div>

      <div className="absolute bottom-6 right-6 z-30">
        <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] transition-opacity duration-500 group-hover:opacity-0">
          Deslize para ver a arquitetura
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlide;