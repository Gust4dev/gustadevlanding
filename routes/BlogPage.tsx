import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BLOG_POSTS } from "../constants";
import { WhatsAppWidget } from "../components/WhatsAppWidget";

export const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
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

  return (
    <div className="min-h-screen bg-background text-white relative">
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 -z-10" />
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-mono uppercase tracking-wider border-b border-white/10 pb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {post.readTime}
              </span>
              <button className="flex items-center gap-2 ml-auto hover:text-blue-400 transition-colors">
                <Share2 size={16} /> Compartilhar
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Content (Simple Markdown-like rendering) */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            {post.content.split("\n").map((paragraph, idx) => {
              const cleanText = paragraph.trim();
              if (!cleanText) return <br key={idx} />;

              // Headers
              if (cleanText.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-bold text-white mt-12 mb-6"
                  >
                    {cleanText.replace("## ", "")}
                  </h2>
                );
              }
              if (cleanText.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-xl font-bold text-blue-400 mt-8 mb-4"
                  >
                    {cleanText.replace("### ", "")}
                  </h3>
                );
              }

              // Horizontal Rule
              if (cleanText === "---") {
                return <hr key={idx} className="my-12 border-white/10" />;
              }

              // Lists
              if (cleanText.startsWith("- ")) {
                return (
                  <li key={idx} className="ml-6 mb-2 text-gray-300 list-disc">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: cleanText
                          .replace("- ", "")
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </li>
                );
              }

              // Checklists (Bonus)
              if (
                cleanText.startsWith("✅") ||
                cleanText.startsWith("❌") ||
                cleanText.startsWith("⬜")
              ) {
                return (
                  <p key={idx} className="mb-4 leading-relaxed font-medium">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: cleanText.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </p>
                );
              }

              // Image for text
              if (cleanText.startsWith("imagem")) {
                return null; // Don't render image command text
              }

              // Standard Paragraph with Bold support
              return (
                <p key={idx} className="mb-6 leading-relaxed text-gray-300">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: cleanText
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(
                          /\[(.*?)\]\((.*?)\)/g,
                          '<a href="$2" class="text-blue-400 hover:underline" target="_blank">$1</a>'
                        ),
                    }}
                  />
                </p>
              );
            })}
          </div>

          {/* CTA Post-Article */}
          <div className="mt-20 p-12 bg-blue-600/10 rounded-3xl border border-blue-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Gostou desse conteúdo?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Aplique essas estratégias hoje mesmo tendo um site profissional
              para o seu negócio.
            </p>
            <a
              href="https://wa.me/556198031185"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};
