import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ShoppingCart,
  Car,
  Sofa,
  Sparkles,
  Building2,
  Scissors,
} from "lucide-react";
import { Project, ProjectCategory, TechItem, Template } from "./types";

export const HERO_TITLE = "Gustavo Developer";
export const HERO_SUBTITLE = "Software Engineer & Full-Stack Developer";
export const HERO_DESC =
  "Transformo problemas complexos em software escalável. Especialista em construir ecossistemas digitais completos: do Banco de Dados à Interface Interativa.";

// Ordered from low-level/backend to frontend/cloud
export const TECH_STACK: TechItem[] = [
  { name: "Java", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Socket.io", category: "Backend" },
  { name: "Gemini AI", category: "AI" },
  { name: "Next.js", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "AWS", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
];

export const PROJECTS: Project[] = [
  {
    id: "os-saas",
    title: "OS-SaaS (Oficina Inteligente)",
    description:
      "Plataforma ERP Multi-tenant com isolamento de dados rigoroso (RBAC), geração de laudos em PDF em tempo real e sistema financeiro integrado via Stripe.",
    category: ProjectCategory.SAAS,
    tags: [
      "Multi-tenancy",
      "RBAC Security",
      "Real-time PDF",
      "Stripe",
      "Next.js 14",
    ],
    imageUrl: "/images/projects/SaaS OS.webp",
    imageConfig: { zoom: 1.0, position: "center" }, // ADJUST HERE: zoom (e.g. 1.2) and position (e.g. 'top' or '50% 20%')
    githubLink: "https://github.com/Gust4dev/OS-SaaS",
    isFeatured: true,
    isInDevelopment: true,
  },
  {
    id: "frete-express",
    title: "Frete Express",
    description:
      "App de logística estilo Uber. Conecta motoristas e cargas usando geolocalização e comunicação via WebSockets para tracking em tempo real.",
    category: ProjectCategory.SAAS,
    tags: ["Socket.io", "Leaflet Maps", "Real-time", "Node.js"],
    imageUrl: "/images/projects/FreteExpress.webp",
    imageConfig: { zoom: 1.0, position: "center" }, // ADJUST HERE
    demoLink: "https://meufreteexpress.com.br/",
    githubLink: "https://github.com/Gust4dev/freteexpress",
  },

  // --- DEEP TECH (These display differently) ---
  {
    id: "vect-ai",
    title: "VECT AI",
    description:
      "Assistente de arquitetura generativa integrado com Google Gemini. Transforma prompts em visualizações de projetos.",
    category: ProjectCategory.DEEP_TECH,
    tags: ["GenAI", "LLM Integration", "Python"],
    githubLink: "https://github.com/Gust4dev/VECT",
  },
  {
    id: "psicare-api",
    title: "PsiCare API",
    description:
      "Backend médico com rigoroso controle de acesso (RBAC) e criptografia para dados sensíveis de pacientes.",
    category: ProjectCategory.DEEP_TECH,
    tags: ["MongoDB", "Security First", "Node.js"],
    githubLink: "https://github.com/Gust4dev/PsicareAPI-Atualizada",
  },
  {
    id: "robocode",
    title: "Robocode Agent",
    description:
      "Implementação de algoritmos de mira preditiva e movimentação evasiva em Java puro para competição de tanques autônomos.",
    category: ProjectCategory.DEEP_TECH,
    tags: ["Java", "Algorithms", "Physics"],
    githubLink: "https://github.com/Gust4dev/Robocode_gusta",
  },

  // --- HIGH-END DESIGN ---
  {
    id: "filmtech",
    title: "FilmTech Productions",
    description:
      "Plataforma de streaming e portfólio para produtora de vídeo. Integração com API do Vimeo e player customizado.",
    category: ProjectCategory.DESIGN,
    tags: ["Streaming API", "Dark UI", "Interactive"],
    imageUrl: "/images/projects/FilmtechLuxury.webp",
    imageConfig: { zoom: 1.0, position: "center" }, // ADJUST HERE
    /* 
    comparisonImages: {
      before: '/images/projects/filmtech-before.webp',
      after: '/images/projects/filmtech-after.webp',
    },
    */
    demoLink: "https://filmtech.vercel.app",
    githubLink: "https://github.com/Gust4dev/filmtech",
  },
  {
    id: "daniel-imobi",
    title: "Daniel Imobi Luxury",
    description:
      "Portfolio Imobiliário de Luxo com animações Framer Motion e galeria Lightbox customizada.",
    category: ProjectCategory.DESIGN,
    tags: ["UX/UI", "Framer Motion", "Conversion Rate"],
    imageUrl: "/images/projects/DanielImobi.webp",
    imageConfig: { zoom: 1.0, position: "center" }, // ADJUST HERE
    /*
    comparisonImages: {
      before: '/images/projects/daniel-imobi-before.webp',
      after: '/images/projects/daniel-imobi-after.webp',
    },
    */
    demoLink: "https://danielimobi.vercel.app",
    githubLink: "https://github.com/Gust4dev/danielimobi",
  },
];

export const BRAND_CONFIG = {
  logoUrl: "/images/logo.webp",
  name: "Gusta Dev",
  navbarLogo: {
    zoom: 2.0,
    position: "center",
  },
  footerLogo: {
    zoom: 2.0,
    position: "center",
  },
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Gust4dev", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gustadev/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/gustaaa__",
    icon: Instagram,
  },
  { name: "Email", url: "mailto:gustavogomes034@outlook.com", icon: Mail },
];

export const WHATSAPP_NUMBER = "556198031185";

export const PROFILE_CONFIG = {
  imageUrl: "/images/projects/Gustadev.webp",
  zoom: 1.25,
  positionX: "20%", // 0% = esquerda, 50% = centro, 100% = direita
  positionY: "50%", // 0% = topo, 50% = centro, 100% = baixo
};

// Templates Marketplace
export const TEMPLATES: Template[] = [
  {
    id: "delivery",
    slug: "delivery",
    title: "Sistema de Delivery",
    description:
      "Cardápio digital sem taxas do iFood. Pedido realizado pelo site e finalizado pelo WhatsApp.",
    icon: ShoppingCart,
    color: "#FF6B6B",
    previewImage: "/images/templates/delivery/1.webp",
    imageConfig: { zoom: 1.0, position: "center" },
    screenshots: [
      "/images/templates/delivery/1.webp",
      "/images/templates/delivery/2.webp",
      "/images/templates/delivery/3.webp",
      "/images/templates/delivery/4.webp",
      "/images/templates/delivery/5.webp",
      "/images/templates/delivery/6.webp",
      "/images/templates/delivery/7.webp",
    ],
    tags: ["E-commerce", "WhatsApp", "Mobile"],
    packages: [
      {
        id: "delivery-essencial",
        tier: "bronze",
        name: "ESSENCIAL",
        price: 697,
        supportDays: 7,
        features: [
          "Template instalado no domínio do cliente",
          "Cardápio digital responsivo",
          "Integração WhatsApp (link direto)",
          "Até 50 produtos cadastrados",
          "2 categorias",
          "Configuração de horário de funcionamento",
        ],
      },
      {
        id: "delivery-profissional",
        tier: "silver",
        name: "PROFISSIONAL",
        price: 1297,
        highlight: true,
        supportDays: 30,
        features: [
          "Tudo do Essencial +",
          "Produtos ilimitados",
          "Até 10 categorias",
          "Sistema de cupons de desconto",
          "Cálculo de frete por CEP (ou taxa fixa)",
          "Personalização de cores/logo",
          "Google Analytics integrado",
        ],
      },
      {
        id: "delivery-empresarial",
        tier: "gold",
        name: "EMPRESARIAL",
        price: 2497,
        supportDays: 90,
        features: [
          "Tudo do Profissional +",
          "Painel admin para gerenciar pedidos",
          "Notificações push de novos pedidos",
          "Relatório de vendas (PDF/CSV)",
          "Sistema de avaliações de clientes",
          "Múltiplos métodos de pagamento (PIX QR Code)",
          "SEO otimizado (Google Maps/Buscas)",
        ],
      },
    ],
  },
  {
    id: "estetica-automotiva",
    slug: "estetica-automotiva",
    title: "Estética Automotiva",
    description:
      "Landing page profissional com galeria antes/depois e sistema de agendamento online.",
    icon: Car,
    color: "#4ECDC4",
    previewImage: "/images/templates/estetica-automotiva/1.webp",
    imageConfig: { zoom: 1.0, position: "center" },
    screenshots: [
      "/images/templates/estetica-automotiva/1.webp",
      "/images/templates/estetica-automotiva/2.webp",
      "/images/templates/estetica-automotiva/3.webp",
      "/images/templates/estetica-automotiva/4.webp",
      "/images/templates/estetica-automotiva/5.webp",
    ],
    tags: ["Agendamento", "Galeria", "Instagram"],
    packages: [
      {
        id: "auto-basico",
        tier: "bronze",
        name: "BÁSICO",
        price: 897,
        supportDays: 15,
        features: [
          "Landing page institucional",
          'Galeria de fotos "Antes & Depois" (até 10 fotos)',
          "Formulário de contato → WhatsApp",
          "Seção de serviços (até 5)",
          "Responsivo mobile",
          "Domínio e hospedagem grátis por 3 meses",
        ],
      },
      {
        id: "auto-completo",
        tier: "silver",
        name: "COMPLETO",
        price: 1697,
        highlight: true,
        supportDays: 60,
        features: [
          "Tudo do Básico +",
          "Galeria ilimitada de trabalhos",
          "Sistema de agendamento online",
          "Até 15 serviços com descrição detalhada",
          "Integração Instagram (feed automático)",
          "Blog para dicas de cuidados",
          "Chat WhatsApp flutuante",
        ],
      },
      {
        id: "auto-premium",
        tier: "gold",
        name: "PREMIUM",
        price: 3297,
        supportDays: "vitalicio",
        features: [
          "Tudo do Completo +",
          "Área restrita para clientes (histórico de serviços)",
          "Sistema de fidelidade/pontos",
          "Orçamento online com cálculo automático",
          "Integração com Google Agenda",
          "Vídeos dos serviços (player otimizado)",
          "Certificado SSL premium",
          "Treinamento em vídeo (gestão do site)",
        ],
      },
    ],
  },
  {
    id: "moveis-planejados",
    slug: "moveis-planejados",
    title: "Móveis Planejados",
    description:
      "Portfolio elegante com calculadora de orçamento e showroom virtual.",
    icon: Sofa,
    color: "#A78BFA",
    previewImage: "/images/templates/moveis-planejados/1.webp",
    imageConfig: { zoom: 1.0, position: "center" },
    screenshots: [
      "/images/templates/moveis-planejados/1.webp",
      "/images/templates/moveis-planejados/2.webp",
      "/images/templates/moveis-planejados/3.webp",
      "/images/templates/moveis-planejados/4.webp",
      "/images/templates/moveis-planejados/5.webp",
      "/images/templates/moveis-planejados/6.webp",
    ],
    tags: ["Portfolio", "Calculadora", "3D"],
    packages: [
      {
        id: "moveis-inicial",
        tier: "bronze",
        name: "INICIAL",
        price: 797,
        supportDays: 10,
        features: [
          "Portfolio de projetos (até 15 fotos)",
          "4 páginas (Home, Sobre, Projetos, Contato)",
          "Formulário de orçamento",
          "WhatsApp integrado",
          "Design moderno e clean",
          "Otimizado para mobile",
        ],
      },
      {
        id: "moveis-executivo",
        tier: "silver",
        name: "EXECUTIVO",
        price: 1497,
        highlight: true,
        supportDays: 45,
        features: [
          "Tudo do Inicial +",
          "Portfolio ilimitado com filtros (Cozinha, Banheiro, Quarto, etc)",
          "Calculadora de orçamento estimado",
          "Página de ambientes (showroom virtual)",
          "Depoimentos de clientes",
          "Integração com Pinterest",
          "Google Meu Negócio otimizado",
        ],
      },
      {
        id: "moveis-corporativo",
        tier: "gold",
        name: "CORPORATIVO",
        price: 2897,
        supportDays: 120,
        features: [
          "Tudo do Executivo +",
          "Tour virtual 360º de ambientes",
          "Configurador de móveis (cliente monta e visualiza)",
          "Sistema de leads (CRM básico)",
          "Agendamento de visita técnica",
          "Blog de tendências/decoração",
          "Relatório mensal de acessos",
          "Remarketing no Facebook/Instagram (setup)",
        ],
      },
    ],
  },
  {
    id: "higienizacao",
    slug: "higienizacao",
    title: "Higienização de Estofados",
    description:
      "Landing page de conversão com calculadora por m² e agendamento online.",
    icon: Sparkles,
    color: "#34D399",
    previewImage: "/images/templates/higienizacao/1.webp",
    imageConfig: { zoom: 1.0, position: "center" },
    screenshots: [
      "/images/templates/higienizacao/1.webp",
      "/images/templates/higienizacao/2.webp",
      "/images/templates/higienizacao/3.webp",
      "/images/templates/higienizacao/4.webp",
      "/images/templates/higienizacao/5.webp",
      "/images/templates/higienizacao/6.webp",
      "/images/templates/higienizacao/7.webp",
    ],
    tags: ["Calculadora", "Agendamento", "Conversão"],
    packages: [
      {
        id: "higien-starter",
        tier: "bronze",
        name: "STARTER",
        price: 597,
        supportDays: 7,
        features: [
          "Landing page de conversão",
          "Calculadora de orçamento por m²",
          "Fotos de antes/depois",
          "3 serviços principais",
          "Formulário WhatsApp",
          "Botão de chamada rápida",
        ],
      },
      {
        id: "higien-avancado",
        tier: "silver",
        name: "AVANÇADO",
        price: 1097,
        highlight: true,
        supportDays: 30,
        features: [
          "Tudo do Starter +",
          "Agendamento online com calendário",
          "Serviços ilimitados",
          "Galeria completa de trabalhos",
          "Tabela de preços por tipo de móvel",
          "Área de cobertura (mapa interativo)",
          "Cupom de desconto primeira compra",
          "Chat online",
        ],
      },
      {
        id: "higien-premium",
        tier: "gold",
        name: "PREMIUM",
        price: 1997,
        supportDays: 90,
        features: [
          "Tudo do Avançado +",
          "Sistema de avaliações Google integrado",
          "Pacotes/combos de serviços",
          "Programa de indicação (cliente ganha desconto)",
          "Blog de dicas de limpeza",
          "Sistema de lembretes (higienização periódica)",
          "Integração com Google Ads (setup inicial)",
          "Vídeos demonstrativos dos serviços",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Showcase imobiliário com tour 360º, busca avançada e CRM integrado.",
    icon: Building2,
    color: "#60A5FA",
    previewImage: "/images/templates/real-estate/1.webp",
    imageConfig: { zoom: 1.0, position: "center" },
    screenshots: [
      "/images/templates/real-estate/1.webp",
      "/images/templates/real-estate/2.webp",
      "/images/templates/real-estate/3.webp",
      "/images/templates/real-estate/4.webp",
      "/images/templates/real-estate/5.webp",
    ],
    tags: ["Imóveis", "Tour 360º", "CRM"],
    packages: [
      {
        id: "real-corretor",
        tier: "bronze",
        name: "CORRETOR",
        price: 997,
        supportDays: 15,
        features: [
          "Showcase de até 20 imóveis",
          "Filtros (tipo, bairro, valor)",
          "Ficha técnica do imóvel (fotos, m², quartos)",
          "Formulário de interesse",
          "WhatsApp integrado",
          "Design profissional",
        ],
      },
      {
        id: "real-imobiliaria",
        tier: "silver",
        name: "IMOBILIÁRIA",
        price: 2297,
        highlight: true,
        supportDays: 60,
        features: [
          "Tudo do Corretor +",
          "Imóveis ilimitados",
          "Tour virtual 360º por imóvel",
          "Comparador de imóveis",
          "Busca avançada (mapa, raio, features)",
          "Cadastro de clientes interessados",
          "Sistema de favoritos",
          "Blog imobiliário",
        ],
      },
      {
        id: "real-rede",
        tier: "gold",
        name: "REDE",
        price: 4497,
        supportDays: 180,
        features: [
          "Tudo do Imobiliária +",
          "Painel admin completo (CRUD de imóveis)",
          "Multi-corretor (cada corretor tem login)",
          "CRM integrado (gestão de leads)",
          "Financiamento simulador",
          "Integração com portais (OLX, Zap, Viva Real)",
          "Relatórios de performance",
          "Sistema de comissões",
          "App mobile (PWA)",
        ],
      },
    ],
  },
  {
    id: "barbearia",
    slug: "barbearia",
    title: "Barbearia",
    description:
      "Site moderno com agendamento online, programa de fidelidade e gestão.",
    icon: Scissors,
    color: "#FBBF24",
    previewImage: "/images/templates/barbearia/1.webp",
    imageConfig: { zoom: 1.0, position: "center" },
    screenshots: [
      "/images/templates/barbearia/1.webp",
      "/images/templates/barbearia/2.webp",
      "/images/templates/barbearia/3.webp",
      "/images/templates/barbearia/4.webp",
    ],
    tags: ["Agendamento", "Fidelidade", "Gestão"],
    packages: [
      {
        id: "barber-tradicional",
        tier: "bronze",
        name: "TRADICIONAL",
        price: 697,
        supportDays: 10,
        features: [
          "Site institucional moderno",
          "Galeria de cortes (até 15 fotos)",
          "Lista de serviços com preços",
          "Localização (Google Maps)",
          "Horário de funcionamento",
          "WhatsApp direto",
        ],
      },
      {
        id: "barber-moderna",
        tier: "silver",
        name: "MODERNA",
        price: 1397,
        highlight: true,
        supportDays: 45,
        features: [
          "Tudo do Tradicional +",
          "Agendamento online por horário",
          "Galeria ilimitada",
          "Perfil da equipe (barbeiros)",
          "Programa de fidelidade (cartão digital)",
          "Produtos à venda (pomadas, shampoos)",
          "Instagram feed integrado",
          "Notificações de lembrete (dia antes)",
        ],
      },
      {
        id: "barber-premium",
        tier: "gold",
        name: "PREMIUM CLUB",
        price: 2697,
        supportDays: "vitalicio",
        features: [
          "Tudo do Moderna +",
          "Área de membros exclusiva (assinatura mensal)",
          "Sistema de créditos pré-pagos",
          "Histórico de cortes do cliente",
          "Recomendações personalizadas",
          "Cashback em produtos",
          "Gift cards/vouchers",
          "Dashboard de gestão (faturamento, agendas)",
          "Marketing por SMS/Email (automação)",
        ],
      },
    ],
  },
];
