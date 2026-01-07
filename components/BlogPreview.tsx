import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

export const BlogPreview = () => {
  return (
    <section id="blog" className="py-24 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
              Conteúdo para Empreendedores
            </h2>
            <p className="text-lg text-gray-400">
              Dicas práticas para escalar seu negócio e dominar o digital.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-bold mt-6 md:mt-0"
          >
            Ver todos os artigos <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col hover:border-white/10 transition-colors"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                    Ler artigo <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-bold"
          >
            Ver todos os artigos <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
