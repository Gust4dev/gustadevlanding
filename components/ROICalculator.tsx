import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [revenue, setRevenue] = useState(30000);
  const [feePercentage, setFeePercentage] = useState(23); // Average marketplace fee

  const monthlySavings = revenue * (feePercentage / 100);
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20">
                <Calculator size={14} />
                Calculadora de Economia
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Pare de deixar dinheiro na mesa.
              </h2>
              <p className="text-xl text-gray-400">
                Veja quanto você pode economizar por ano tendo seu próprio canal
                de vendas e fugindo das taxas abusivas dos marketplaces.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="relative z-20">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-gray-300">
                    Faturamento Mensal (Apps)
                  </span>
                  <span className="text-white">
                    R$ {revenue.toLocaleString("pt-BR")}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 relative z-20"
                />
              </div>

              <div className="relative z-20">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-gray-300">Taxa do Aplicativo</span>
                  <span className="text-white">{feePercentage}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="30"
                  step="1"
                  value={feePercentage}
                  onChange={(e) => setFeePercentage(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400 relative z-20"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-12 rounded-3xl relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp size={120} />
            </div>

            <p className="text-gray-400 font-medium mb-2">
              Você poderia economizar investindo no próprio site:
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-sm text-gray-500 font-bold mb-8 block">
                R$
              </span>
              <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter loading-none">
                {monthlySavings.toLocaleString("pt-BR", {
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="text-xl text-gray-500 font-bold">/mês</span>
            </div>

            <div className="h-px w-full bg-white/10 my-8" />

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-500/20 rounded-xl text-green-500">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  Economia Anual Projetada
                </p>
                <p className="text-2xl font-bold text-green-400">
                  R${" "}
                  {yearlySavings.toLocaleString("pt-BR", {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/556198031185?text=Fiz as contas aqui e vi que estou perdendo dinheiro. Quero meu site próprio!"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Quero Parar de Perder Dinheiro
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
