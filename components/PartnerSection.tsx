import React from "react";
import { motion } from "framer-motion";
import { Handshake, ArrowRight, Users, Wallet } from "lucide-react";

export const PartnerSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-900/10 to-transparent border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6 text-blue-400">
            <Handshake size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Seja um Parceiro Gust4Dev
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Você é designer, consultor ou tem networking com negócios locais?
            Indique nossos projetos e receba comissões generosas por cada
            contrato fechado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left bg-white/5 p-8 rounded-3xl border border-white/5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-500/20 text-green-400 rounded-lg shrink-0">
                <Wallet size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Comissão Recorrente
                </h3>
                <p className="text-gray-400 text-sm">
                  Ganhe até 20% do valor do setup inicial e participação na
                  mensalidade de manutenção.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Networking Premium
                </h3>
                <p className="text-gray-400 text-sm">
                  Acesso a nossa rede de contatos e suporte prioritário para
                  seus indicados.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/556198031185?text=Tenho interesse em ser um parceiro Gust4Dev!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-900/20"
          >
            Quero ser Parceiro <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
