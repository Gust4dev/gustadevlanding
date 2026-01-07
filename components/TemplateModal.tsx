import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Template } from "../types";
import PricingPackage from "./PricingPackage";

interface TemplateModalProps {
  template: Template;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({
  template,
  isOpen,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const IconComponent = template.icon;
  const containerRef = useRef<HTMLDivElement>(null);

  // Usa apenas screenshots (sem duplicar previewImage)
  const allImages =
    template.screenshots.length > 0
      ? template.screenshots
      : [template.previewImage].filter(Boolean);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  }, [allImages.length]);

  // Navegação por teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage, onClose]);

  // Reset ao fechar
  useEffect(() => {
    if (!isOpen) setCurrentImageIndex(0);
  }, [isOpen]);

  // Swipe handler (mobile)
  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevImage();
    } else if (info.offset.x < -threshold) {
      nextImage();
    }
  };

  // Click areas (desktop)
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width / 3) {
      prevImage();
    } else if (clickX > (width * 2) / 3) {
      nextImage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="p-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div
                className="p-4 rounded-2xl"
                style={{ backgroundColor: `${template.color}20` }}
              >
                <IconComponent size={32} style={{ color: template.color }} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {template.title}
                </h2>
                <p className="text-gray-400 mt-1">{template.description}</p>
              </div>
            </div>

            {/* Tags */}
            {template.tags && (
              <div className="flex gap-2 mt-4">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: `${template.color}20`,
                      color: template.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Demo Link */}
            {template.demoUrl && (
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm hover:underline"
                style={{ color: template.color }}
              >
                <ExternalLink size={16} />
                Ver Demo ao Vivo
              </a>
            )}
          </div>

          {/* Gallery - Instagram Style */}
          {allImages.length > 0 && (
            <div className="relative p-8">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 cursor-pointer select-none"
                onClick={handleImageClick}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={allImages[currentImageIndex]}
                    alt={`${template.title} screenshot ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.2 }}
                    loading="lazy"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                  />
                </AnimatePresence>

                {allImages.length > 1 && (
                  <>
                    {/* Desktop navigation buttons - hidden on mobile */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors hidden md:block"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors hidden md:block"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Progress dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-white w-4"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Image counter */}
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-mono">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Swipe hint on mobile */}
              <p className="text-center text-gray-500 text-xs mt-2 md:hidden">
                Arraste para ver mais imagens
              </p>
            </div>
          )}

          {/* Pricing Packages */}
          <div className="p-8 pt-0">
            <h3 className="text-xl font-bold text-white mb-6">
              Escolha seu Pacote
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {template.packages.map((pkg) => (
                <PricingPackage
                  key={pkg.id}
                  pkg={pkg}
                  templateTitle={template.title}
                  templateColor={template.color}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TemplateModal;
