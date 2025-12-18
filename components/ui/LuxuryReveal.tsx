import React from 'react';
import { motion } from 'framer-motion';

interface LuxuryRevealProps {
  text: string;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

const LuxuryReveal: React.FC<LuxuryRevealProps> = ({ text, delay = 0, className = "", as: Component = 'h1' }) => {
  const words = text.split(" ");

  /* New logic for mobile optimization */
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: isMobile ? 0.05 : 0.12, 
        delayChildren: 0.04 * i + delay 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      
      transition: {
        type: isMobile ? "tween" : "spring", // Use cheaper tween on mobile
        damping: 12,
        stiffness: 100,
        duration: isMobile ? 0.3 : undefined // Faster, linear duration for tween
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      
      transition: {
        type: isMobile ? "tween" : "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    // @ts-ignore - Framer motion dynamic component types can be tricky
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }} // Added flex wrap for responsiveness
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-2 pb-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LuxuryReveal;