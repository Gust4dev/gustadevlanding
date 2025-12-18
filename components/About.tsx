import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_CONFIG } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-[#080808]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-12 items-center"
        >
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-50"></div>
                <img 
                    src={PROFILE_CONFIG.imageUrl} 
                    alt="Gustavo" 
                    className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10 transition-transform duration-500 hover:scale-110"
                    style={{
                        objectPosition: PROFILE_CONFIG.position,
                        transform: `scale(${PROFILE_CONFIG.zoom})`
                    }}
                />
            </div>

            <div className="text-center md:text-left">
                <h2 className="text-2xl font-display font-bold text-white mb-4">Sobre o Engenheiro</h2>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                    "Não sou apenas um desenvolvedor, sou um <span className="text-white font-medium">Full-Cycle Engineer</span>. 
                    Minha expertise vai além do código: entendo como um banco de dados mal estruturado afeta a conversão no frontend."
                </p>
                <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="space-y-1">
                        <h4 className="text-white font-bold text-sm">Backend & Logic</h4>
                        <p className="text-secondary text-xs">Java, Node.js, Arquitetura de Microsserviços.</p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-white font-bold text-sm">Visual & Product</h4>
                        <p className="text-secondary text-xs">Interfaces High-End, UX/UI, Animações.</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;