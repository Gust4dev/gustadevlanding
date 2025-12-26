import React from 'react';
import { motion } from 'framer-motion';

const TECH_STACK = [
  "System Architecture", "React Fiber", "Java Spring", "PostgreSQL", 
  "AWS Cloud", "Docker Engine", "Machine Learning", "Microservices",
  "UI/UX Engineering", "Clean Code", "API Design", "Full-Cycle"
];

const AuthorityStrip: React.FC = () => {
  return (
    <div className="relative py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.4em]">
                {tech}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradients para suavizar as bordas do marquee */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
};

export default AuthorityStrip;