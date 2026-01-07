import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../constants";

export const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black/40 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Processo simplificado para colocar sua ideia no ar sem dor de
            cabeça.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group "
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full hover:bg-white/[0.07]">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-900/50">
                    {step.step}
                  </div>

                  <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Icon size={40} className="stroke-[1.5]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (Desktop only) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
