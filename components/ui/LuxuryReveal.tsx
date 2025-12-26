import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LuxuryRevealProps {
  text: string;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

const LuxuryReveal: React.FC<LuxuryRevealProps> = ({ text, delay = 0, className = "", as: Component = 'h1' }) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: delay 
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Cubic-bezier luxo
      } as any, // Cast necessário para satisfazer o union type de Transition
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <Component className={className} style={{ display: 'block' }}>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {words.map((word, index) => (
          <span key={index} style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.25em' }}>
            <motion.span variants={child} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </Component>
  );
};

export default LuxuryReveal;