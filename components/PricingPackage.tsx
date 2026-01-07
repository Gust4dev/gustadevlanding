import React from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { TemplatePackage } from "../types";
import { WHATSAPP_NUMBER } from "../constants";

interface PricingPackageProps {
  pkg: TemplatePackage;
  templateTitle: string;
  templateColor: string;
}

const tierConfig = {
  bronze: {
    emoji: "🥉",
    gradient: "from-amber-700/20 to-amber-900/20",
    border: "border-amber-700/30",
  },
  silver: {
    emoji: "🥈",
    gradient: "from-gray-300/20 to-gray-500/20",
    border: "border-gray-400/30",
  },
  gold: {
    emoji: "🥇",
    gradient: "from-yellow-400/20 to-amber-500/20",
    border: "border-yellow-500/30",
  },
};

const PricingPackage: React.FC<PricingPackageProps> = ({
  pkg,
  templateTitle,
  templateColor,
}) => {
  const config = tierConfig[pkg.tier];

  const handleWhatsApp = () => {
    const message = `Olá! Quero o pacote ${pkg.name} do template ${templateTitle}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const formatSupport = (days: number | "vitalicio") => {
    if (days === "vitalicio") return "Suporte Vitalício";
    return `Suporte por ${days} dias`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative flex flex-col p-6 rounded-2xl bg-gradient-to-br ${config.gradient} border ${config.border} backdrop-blur-sm`}
    >
      {/* Badge "Mais Vendido" */}
      {pkg.highlight && (
        <div
          className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg text-white"
          style={{ backgroundColor: templateColor }}
        >
          ⭐ Mais Vendido
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <span className="text-2xl">{config.emoji}</span>
        <h4 className="text-xl font-bold text-white mt-2">{pkg.name}</h4>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white">
            R$ {pkg.price.toLocaleString("pt-BR")}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-6">
        {pkg.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-gray-300"
          >
            <Check
              size={16}
              className="mt-0.5 flex-shrink-0"
              style={{ color: templateColor }}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Support Badge */}
      <div className="text-xs text-gray-400 mb-4 text-center">
        {formatSupport(pkg.supportDays)}
      </div>

      {/* CTA Button */}
      <button
        onClick={handleWhatsApp}
        className="w-full py-3 px-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg"
        style={{ backgroundColor: templateColor }}
      >
        <MessageCircle size={18} />
        Quero Este Pacote
      </button>
    </motion.div>
  );
};

export default PricingPackage;
