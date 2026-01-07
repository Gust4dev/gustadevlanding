import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { TemplatePackage } from "../types";

interface PricingTableProps {
  packages: TemplatePackage[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ packages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {packages.map((pkg, index) => {
        const isHighlight = pkg.highlight;
        return (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl p-8 border ${
              isHighlight
                ? "bg-white/[0.08] border-blue-500/50 shadow-2xl shadow-blue-900/20"
                : "bg-white/[0.02] border-white/5"
            } flex flex-col`}
          >
            {isHighlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                Mais Popular
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-gray-400 font-medium tracking-widest text-sm mb-2 uppercase">
                {pkg.name}
              </h3>
              <div className="text-4xl font-bold text-white mb-2">
                <span className="text-lg text-gray-400 font-normal">R$</span>
                {pkg.price}
              </div>
              <p className="text-xs text-gray-500">pagamento único</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="text-green-500 shrink-0" size={16} />
                <span>
                  Suporte por{" "}
                  <strong className="text-white">
                    {pkg.supportDays === "vitalicio"
                      ? "Vitalício"
                      : `${pkg.supportDays} dias`}
                  </strong>
                </span>
              </li>
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <Check className="text-blue-500 shrink-0" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/556198031185?text=Olá! Tenho interesse no plano ${pkg.name}.`}
              target="_blank"
              rel="noreferrer"
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all text-center ${
                isHighlight
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Escolher {pkg.name}
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};
