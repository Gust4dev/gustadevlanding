import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/40 border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
            O que dizem nossos parceiros
          </h2>
          <p className="text-gray-400">
            Histórias reais de quem transformou seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 relative group hover:border-white/10 transition-colors"
            >
              <div className="absolute top-8 right-8 text-white/10 group-hover:text-blue-500/20 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-blue-400 uppercase tracking-wider font-medium">
                    {item.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
