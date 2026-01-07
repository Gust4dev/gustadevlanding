import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  ShoppingCart,
  MessageCircle,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { TEMPLATES } from "../constants";
import { PricingTable } from "../components/PricingTable";
import { HowItWorks } from "../components/HowItWorks";
import { SocialProof } from "../components/SocialProof";
import { FAQ } from "../components/FAQ";
import Footer from "../components/Footer";
import { WhatsAppWidget } from "../components/WhatsAppWidget";
import ImageViewer from "../components/ImageViewer";

export const TemplatePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const template = TEMPLATES.find((t) => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Template não encontrado</h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/556198031185?text=Olá! Gostaria de saber mais sobre o template ${template.title}.`;

  return (
    <div className="min-h-screen bg-background text-white relative">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 -z-10" />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Header / Hero */}
        <section className="container mx-auto px-4 mb-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-blue-400 text-sm font-bold mb-6 border border-white/10">
                <Star size={14} fill="currentColor" />
                Template Profissional
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {template.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Contratar Agora
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
                >
                  Ver Planos
                </button>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {template.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 group">
                <img
                  src={template.previewImage}
                  alt={template.title}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Gallery / Screenshots if available */}
        {template.screenshots && template.screenshots.length > 0 && (
          <section className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Visualização do Template
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {template.screenshots.map((shot, i) => (
                  <div
                    key={i}
                    className="cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all aspect-video group relative transform hover:scale-[1.02]"
                    onClick={() => setSelectedImageIndex(i)}
                  >
                    <img
                      src={shot}
                      alt={`Screenshot ${i}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <span className="text-white font-medium">
                        Ver em tela cheia
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <HowItWorks />

        {/* Pricing */}
        <section id="pricing" className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Planos Disponíveis
            </h2>
            <p className="text-gray-400">
              Escolha o melhor pacote para o seu momento.
            </p>
          </div>
          <PricingTable packages={template.packages} />
        </section>

        <SocialProof />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppWidget />

      <ImageViewer
        images={template.screenshots || []}
        initialIndex={selectedImageIndex || 0}
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
      />
    </div>
  );
};
