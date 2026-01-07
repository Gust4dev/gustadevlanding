import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Template } from "../types";

interface TemplateCardProps {
  template: Template;
  index: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
  const navigate = useNavigate();
  const IconComponent = template.icon;

  const minPrice = Math.min(...template.packages.map((p) => p.price));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => navigate(`/template/${template.slug}`)}
      className="group relative cursor-pointer rounded-3xl overflow-hidden bg-surface border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Preview Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {template.previewImage ? (
          <img
            src={template.previewImage}
            alt={template.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            style={{
              objectPosition: template.imageConfig?.position || "center",
              transform: `scale(${template.imageConfig?.zoom || 1})`,
            }}
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `${template.color}15` }}
          >
            <IconComponent
              size={64}
              style={{ color: template.color }}
              className="opacity-30"
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Price Badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold text-white shadow-lg"
          style={{ backgroundColor: template.color }}
        >
          A partir de R$ {minPrice.toLocaleString("pt-BR")}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="p-2.5 rounded-xl"
            style={{ backgroundColor: `${template.color}20` }}
          >
            <IconComponent size={20} style={{ color: template.color }} />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
            {template.title}
          </h3>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {template.description}
        </p>

        {/* Tags */}
        {template.tags && (
          <div className="flex flex-wrap gap-2">
            {template.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-lg bg-white/5 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Hover CTA */}
        <div
          className="mt-4 py-2 text-center rounded-xl font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: template.color }}
        >
          Ver Pacotes →
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
