import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "../constants";

export const WhatsAppWidget = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPopup(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setHasInteracted(true);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os templates.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white text-gray-900 p-5 rounded-2xl shadow-2xl max-w-xs pointer-events-auto relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight mb-1">
                  Posso ajudar? 👋
                </p>
                <p className="text-sm text-gray-600 leading-snug mb-3">
                  Estou online! Me chame para tirar dúvidas sobre os templates.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setHasInteracted(true)}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-white font-bold py-2 rounded-lg text-sm transition-colors"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 hover:shadow-green-900/50 transition-shadow pointer-events-auto cursor-pointer"
      >
        <MessageCircle size={28} className="text-white fill-current" />
      </motion.a>
    </div>
  );
};
