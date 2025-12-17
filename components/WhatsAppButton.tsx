import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Vamos conversar?
      </span>
      <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-all transform hover:scale-110">
        <MessageCircle size={28} strokeWidth={2.5} />
      </div>
    </a>
  );
};

export default WhatsAppButton;