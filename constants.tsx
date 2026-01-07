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
    title: "Filmtech Luxury",
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
    demoLink: "https://www.filmtechluxury.com.br/",
    githubLink: "https://github.com/Gust4dev/filmtech",
  },
  {
    id: "feitosa-curadoria",
    title: "Feitosa Curadoria",
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
    demoLink: "https://www.feitosacuradoria.com.br/",
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

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Escolha o Template",
    description: "Navegue por nossa galeria e escolha o design ideal.",
    icon: ShoppingCart,
  },
  {
    step: 2,
    title: "Defina o Pacote",
    description: "Selecione o plano que melhor atende suas necessidades.",
    icon: Scissors,
  },
  {
    step: 3,
    title: "Entrega Rápida",
    description: "Site no ar em 7 a 10 dias com sua marca e conteúdo.",
    icon: Car,
  },
  {
    step: 4,
    title: "Suporte Garantido",
    description: "Acompanhamento pós-entrega para garantir seu sucesso.",
    icon: Building2,
  },
];

export const STATS = [
  { label: "Projetos Entregues", value: "20+" },
  { label: "Clientes Satisfeitos", value: "10+" },
  { label: "Tempo de Resposta", value: "-1h" },
  { label: "Avaliação Média", value: "4.9/5" },
];

export const FAQ_ITEMS = [
  {
    question: "Quanto tempo demora?",
    answer:
      "Geralmente entregamos a primeira versão em 3 dias e o projeto finalizado em até 10 dias.",
  },
  {
    question: "Preciso pagar hospedagem à parte?",
    answer:
      "Não nos primeiros 3 meses. Depois, temos planos acessíveis de manutenção ou você pode hospedar onde quiser.",
  },
  {
    question: "O que acontece se eu não gostar?",
    answer:
      "Trabalhamos com revisões ilimitadas até você aprovar o design antes da programação.",
  },
  {
    question: "Vocês fazem customização?",
    answer:
      "Sim! Os templates são a base, mas adaptamos cores, logos e textos para sua marca.",
  },
  {
    question: "Como é o suporte?",
    answer:
      "Suporte via WhatsApp direto com o desenvolvedor, sem robôs, garantindo agilidade e entendimento do seu problema.",
  },
  {
    question: "Posso pagar parcelado?",
    answer:
      "Sim, dividimos o valor do projeto em até 12x no cartão de crédito.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Carlos Silva",
    business: "Rei do Burger",
    text: "Antes eu perdia 25% do faturamento pro iFood. Agora tenho meu próprio sistema e economizo mais de R$ 2.000/mês. Valeu cada centavo.",
    rating: 5,
    delay: 0,
  },
  {
    name: "Ana Oliveira",
    business: "Studio Bella",
    text: "Minha agenda vivia bagunçada no WhatsApp. Com o site, as clientes agendam sozinhas e eu só recebo a notificação. Mudou minha vida!",
    rating: 5,
    delay: 0.1,
  },
  {
    name: "Marcos Santos",
    business: "Barbearia Viking",
    text: "O visual do site ficou incrível, passa muita credibilidade. Meus clientes adoraram o clube de assinaturas.",
    rating: 5,
    delay: 0.2,
  },
];

export const BLOG_POSTS = [
  {
    id: "sistema-delivery-proprio",
    slug: "como-montar-delivery-sem-ifood",
    title: "Como Montar um Delivery Sem Pagar iFood: Guia Completo 2025",
    summary:
      "Descubra como pequenos ajustes no seu cardápio e atendimento podem transformar seu faturamento e economizar milhares de reais em taxas.",
    date: "12 Jan 2025",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1170&auto=format&fit=crop",
    content: `
      ## O Problema Real: Quanto Você Está Perdendo?

      Vamos fazer as contas:

      - **100 pedidos por mês** (média de um delivery pequeno/médio)
      - **Ticket médio de R$ 50** por pedido
      - **Faturamento mensal:** R$ 5.000
      - **Taxa do iFood:** 25% em média
      - **Você perde:** R$ 1.250/mês = **R$ 15.000/ano**

      E isso sem contar:
      - Taxa de entrega que fica pro app
      - Promoções obrigatórias pra aparecer bem ranqueado
      - Tempo perdido gerenciando o app

      **A pergunta é:** vale a pena pagar R$ 15.000/ano pra um intermediário quando você poderia ter seu próprio sistema?

      ## Por Que o iFood É Caro (E Não Vai Ficar Mais Barato)

      O iFood não é vilão — eles prestam um serviço. O problema é que **você fica refém**:

      1. **Dependência total:** Se o app cair, você não vende
      2. **Sem dados dos clientes:** Você não sabe quem compra, não pode fazer remarketing
      3. **Taxas sobem:** Começou em 12%, hoje tá 25-30%
      4. **Guerra de preços:** Você compete com quem dá 50% de desconto

      Não é sustentável a longo prazo.

      ## A Solução: Delivery Próprio (Mais Simples Do Que Você Pensa)

      Você não precisa sair do iFood 100% amanhã. A estratégia é:

      **Fase 1:** Ter seu sistema próprio funcionando  
      **Fase 2:** Incentivar clientes a pedirem direto (desconto, fidelidade)  
      **Fase 3:** Reduzir dependência do app aos poucos

      ### O Que Você Precisa (Checklist)

      ✅ **Site/sistema de pedidos** (cardápio digital responsivo)  
      ✅ **Integração com WhatsApp** (pedido vai direto pro seu ZAP)  
      ✅ **Sistema de pagamento** (PIX é suficiente no começo)  
      ✅ **Delivery próprio OU Loggi/Borzo** (bem mais barato que app)

      ### Passo a Passo Prático

      #### 1. Tenha um Site/Cardápio Digital
      Não precisa ser complexo. Precisa ser:
      - Rápido no celular (90% dos pedidos vêm do mobile)
      - Com fotos boas dos pratos
      - Preços claros
      - Botão direto pro WhatsApp

      **Custo médio:** R$ 500-1.500 (investimento único)  
      **ROI:** Se paga em 2-3 meses com a economia

      #### 2. Configure o Fluxo de Pedidos
      Cliente entra no site → Escolhe os produtos →
      Clica "Finalizar Pedido" → Abre WhatsApp com pedido pronto →
      Você confirma e envia

      Simples assim. Sem complicação.

      #### 3. Divulgue o Link do Seu Site
      - **Instagram:** Link na bio + stories com promoção "10% off pedindo direto"
      - **Google Meu Negócio:** Adiciona o link lá
      - **WhatsApp Status:** Posta o cardápio
      - **Embalagens:** Adesivo com QR Code pro site

      #### 4. Incentive o Cliente a Pedir Direto
      Estratégias que funcionam:
      - "Pedindo pelo nosso site você ganha 10% de desconto"
      - "Programa de fidelidade: A cada 10 pedidos, 1 grátis" (só pra quem pede direto)
      - "Entrega mais rápida pedindo direto" (porque você prioriza)

      ## Calculadora de Economia Real

      Vamos simular seu cenário:

      **Cenário Atual (100% iFood):**
      - 100 pedidos/mês × R$ 50 = R$ 5.000
      - Taxa 25% = você perde R$ 1.250/mês
      - **Lucro líquido:** R$ 3.750

      **Cenário Futuro (70% próprio, 30% iFood):**
      - 70 pedidos diretos × R$ 50 = R$ 3.500 (sem taxa)
      - 30 pedidos iFood × R$ 50 = R$ 1.500 - 25% taxa = R$ 1.125
      - **Lucro líquido:** R$ 4.625

      **Diferença:** Você ganha **R$ 875/mês a mais = R$ 10.500/ano**

      E quanto custa ter seu sistema? R$ 500-1.500 uma vez. **Se paga em menos de 2 meses.**

      ## Erros Comuns (Evite Isso)

      ❌ **"Vou sair do iFood de uma vez"** → Não. Migre aos poucos.  
      ❌ **"Vou fazer um site de R$ 10.000"** → Desnecessário. Começa simples.  
      ❌ **"Meus clientes não vão usar"** → Se você der incentivo, usam sim.  
      ❌ **"É muito complicado"** → Não é. É mais fácil que gerenciar o app do iFood.

      ## Cases Reais (Anápolis/GO)

      **Hamburgueria Local:**
      - Antes: 100% iFood, perdia R$ 2.000/mês em taxa
      - Depois: 60% pedidos próprios, economiza R$ 1.200/mês
      - **Resultado:** Investiu R$ 800 no site, já recuperou 15x o valor

      **Pizzaria Centro:**
      - Implementou site + número exclusivo pra pedidos diretos
      - Oferece "borda grátis pra quem pede pelo site"
      - **Resultado:** 45% dos pedidos migraram em 3 meses

      ## Conclusão: Vale a Pena?

      Se você faz **pelo menos 50 pedidos/mês**, ter seu delivery próprio **é essencial**.

      O iFood é útil? Sim. Mas não pode ser sua única fonte.

      **Próximos Passos:**
      1. Calcule quanto você perde por mês em taxas
      2. Decida: quero continuar pagando isso pra sempre?
      3. Se não, invista em ter seu sistema

      **Precisa de ajuda pra montar seu delivery próprio?**  
      Tenho templates prontos específicos pra delivery, com cardápio digital, integração WhatsApp e tudo que você precisa.

      👉 [Fale comigo no WhatsApp](https://wa.me/556198031185)

      ---

      *Gustavo Rodrigues - Desenvolvedor Full-Stack especializado em sistemas para negócios locais*
    `,
  },
  {
    id: "erros-barbearia-instagram",
    slug: "5-erros-barbearias-instagram",
    title: "5 Erros Que Barbearias Cometem no Instagram (E Como Corrigir)",
    summary:
      "Você posta todo dia e não lota a agenda? Descubra o que está afastando seus clientes.",
    date: "15 Jan 2025",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1589985502143-057e63eef1c9?q=80&w=687&auto=format&fit=crop",
    content: `
      ## Erro #1: Link da Bio "Quebrado" ou Inexistente

      ### O Problema:
      Cliente vê seu corte foda, quer agendar, clica no perfil e... nada. Ou um link que não abre.
      **Você perdeu o cliente em 3 segundos.**

      ### A Solução:
      Link direto pro WhatsApp com mensagem pré-definida.
      
      **Implementação:**
      - Se você não tem site: usa o link do WhatsApp direto
      - Formato: \`https://wa.me/55SEUNUMERO?text=Olá,%20quero%20agendar%20um%20horário\`
      - Ferramentas grátis: Linktree, Beacons (pra colocar múltiplos links)

      **Impacto:** +40% de agendamentos (sem esforço extra)

      ---

      ## Erro #2: Postar SÓ Fotos de Cortes (E Nada Mais)

      ### O Problema:
      Seu feed tá assim:
      - Foto de corte
      - Foto de corte
      - Foto de corte
      - Foto de corte

      Cliente pensa: "Legal, mas o que eu faço com isso?"

      **Você não tá ENGAJANDO, tá só mostrando portfólio.**

      ### A Solução:
      Alternar conteúdos:

      **40% - Trabalhos (cortes, antes/depois)**  
      **30% - Bastidores (stories, humor, dia-a-dia)**  
      **20% - Dicas úteis ("Como cuidar do fade em casa", "Produtos que uso")**  
      **10% - Promoções/CTA ("Vagas pra hoje à tarde", "Programa de fidelidade")**

      **Exemplos de posts que ENGAJAM:**
      - "Qual corte combina com cada tipo de rosto?" (carrossel educativo)
      - "Meu cliente pediu um corte impossível... olha o resultado" (storytelling)
      - "3 erros que você comete ao lavar o cabelo" (dica útil)
      - "Quinta-feira lenta? 10% off pra quem agendar agora" (oferta urgente)

      **Impacto:** Seu alcance aumenta (algoritmo prioriza engajamento, não só visualizações)

      ---

      ## Erro #3: Não Usar Stories Corretamente

      ### O Problema:
      Você posta no feed 1x por dia. Stories? Quase nada.

      **Mas o algoritmo DO INSTAGRAM PRIORIZA STORIES.** Quem vê seu story tem 10x mais chance de te procurar do que quem só vê feed.

      ### A Solução:
      Postar nos stories **3-5x por dia**, com propósito:

      **Manhã (9h):** "Bom dia! Quem tá precisando de corte hoje?" (call to action)  
      **Meio-dia (12h):** "Cliente do dia" mostrando trabalho (social proof)  
      **Tarde (15h):** "Vagas disponíveis pra hoje à tarde, quem quer?" (urgência)  
      **Noite (19h):** Bastidor engraçado, música, algo leve  
      **Antes de dormir:** "Amanhã começa cedo, reserve seu horário" (último lembrete)

      **Ferramentas úteis:**
      - Caixinha de perguntas: "Qual corte você quer fazer?"
      - Enquete: "Fade alto ou baixo?" (engaja mesmo quem não é cliente)
      - Countdown: "Promoção acaba em..." (cria urgência)

      **Impacto:** Stories = topo da mente. Quando o cliente pensar "preciso cortar cabelo", lembra de VOCÊ.

      ---

      ## Erro #4: Não Ter Sistema de Fidelidade Digital

      ### O Problema:
      Cliente corta com você 1x, gosta, mas no mês seguinte... esquece e vai noutra barbearia mais perto.

      **Você não retém cliente. Cada corte é uma "venda fria".**

      ### A Solução:
      Programa de fidelidade digital:

      **Modelo Simples (Gratuito):**
      "A cada 5 cortes, o 6º é grátis. Rastreio pelo WhatsApp."

      **Modelo Profissional (Site/App):**
      Cliente cadastra, acumula pontos automaticamente, recebe notificação "Você tá perto do corte grátis!".

      **Por que funciona?**
      - Cliente volta MAIS VEZES (fidelidade aumenta 35%)
      - Você cria previsibilidade (sabe quantos clientes vão voltar)
      - Cliente não vai pro concorrente (perde os pontos acumulados)

      **Exemplo Real:**
      Barbearia em Anápolis implementou fidelidade digital → taxa de retorno subiu de 40% pra 68% em 3 meses.

      **Impacto:** Mais clientes recorrentes = faturamento estável

      ---

      ## Erro #5: Não Ter Site Próprio (Depender 100% do Instagram)

      ### O Problema:
      Instagram é ALUGADO. Você não é dono:
      - Conta cai? Perde tudo
      - Algoritmo muda? Seu alcance despenca
      - Cliente não tá no Instagram? Não te acha

      **E tem mais:** Instagram não ranqueia no Google. Se alguém buscar "barbearia perto de mim", você não aparece.

      ### A Solução:
      Ter um site simples (não precisa ser complexo) com:

      ✅ **Serviços e preços**  
      ✅ **Galeria de trabalhos**  
      ✅ **Agendamento online**  
      ✅ **Google Maps integrado**

      **Vantagens:**
      1. **Aparece no Google:** "Barbearia Anápolis" → você ranqueia
      2. **Profissionalismo:** Cliente vê site, confia mais
      3. **Independência:** Instagram cai? Seu site continua funcionando
      4. **Conversão maior:** Site converte 3x mais que Instagram (cliente tá no "modo compra")

      **Custo real:** R$ 700-1.500 (investimento único)  
      **Retorno:** Se converte 2-3 clientes a mais por mês, já pagou

      ---

      ## Bônus: Checklist de Correção Rápida

      Use essa lista HOJE pra melhorar seu Instagram:

      **⬜ Link na bio leva pro agendamento direto**  
      **⬜ Último post foi há menos de 24h**  
      **⬜ Postei pelo menos 3 stories hoje**  
      **⬜ Tenho pelo menos 1 post educativo/útil no feed (não só cortes)**  
      **⬜ Tenho algum sistema de fidelidade (mesmo que manual)**  
      **⬜ Respondo DMs em menos de 2 horas**  
      **⬜ Meu número de WhatsApp tá visível no perfil**

      Se você marcou **menos de 5**, tá deixando dinheiro na mesa.

      ---

      ## Conclusão: Instagram É Ferramenta, Não Solução

      Instagram é ESSENCIAL pra barbearia em 2025. Mas não pode ser sua ÚNICA presença digital.

      A combinação matadora é:
      - **Instagram:** Pra engajar, mostrar trabalho, criar autoridade
      - **Site próprio:** Pra converter, ranquear no Google, ter independência
      - **WhatsApp:** Pra fechar agendamento rápido

      **Próximo Passo:**
      Se você quer profissionalizar de vez e ter um sistema completo (site + agendamento + fidelidade), tenho templates prontos específicos pra barbearias.

      👉 [Fale comigo no WhatsApp](https://wa.me/556198031185)

      ---

      *Gustavo Rodrigues - Desenvolvedor Full-Stack | Especialista em Sistemas para Barbearias*
    `,
  },
  {
    id: "estetica-automotiva-site-proprio",
    slug: "estetica-automotiva-precisa-site",
    title: "Por Que Sua Estética Automotiva Precisa de um Site Próprio",
    summary:
      "Depender só do Instagram para serviços de alto valor (High Ticket) é um erro que custa caro. Entenda porquê.",
    date: "18 Jan 2025",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1680005084654-b57c0f6e5b77?q=80&w=1172&auto=format&fit=crop",
    content: `
      ## A Realidade do Mercado Automotivo em 2025

      Seu cliente não é qualquer um. É alguém que:
      - Tem um carro de R$ 80.000-200.000+
      - Valoriza qualidade e detalhes
      - Compara MUITO antes de contratar
      - Busca no Google antes de decidir

      **E aqui tá o problema:**

      Quando ele busca "estética automotiva [sua cidade]" no Google... **você não aparece**. Só aparecem concorrentes com site.

      Instagram não ranqueia no Google. WhatsApp também não.

      **Resultado:** Você perde 60-70% dos clientes em potencial antes mesmo deles te conhecerem.

      ---

      ## 5 Razões Inegáveis Pra Ter um Site

      ### 1. Cliente de Serviço Caro Não Fecha Pelo Instagram

      Pensa comigo:

      **Serviço de R$ 80 (lavagem simples):** Instagram funciona. Cliente decide rápido.

      **Serviço de R$ 2.000 (cristalização + polimento):** Cliente quer:
      - Ver portfólio completo
      - Entender o processo
      - Ler depoimentos
      - Comparar com concorrentes
      - Sentir segurança

      Tudo isso ele faz MELHOR num site do que em stories do Instagram.

      **Exemplo Real:**
      Estética em Brasília implementou site com galeria antes/depois bem detalhada → conversão de orçamentos subiu 45% em 2 meses.

      ---

      ### 2. Ranqueamento no Google = Clientes Te Achando Sozinhos

      Instagram: Você tem que PAGAR pra aparecer (ads) ou depender de seguidores.

      Site otimizado: Cliente busca "vitrificação automotiva [sua cidade]" → você aparece GRÁTIS no Google.

      **Volume de buscas mensais (exemplo Goiânia):**
      - "Estética automotiva goiânia": 1.200 buscas/mês
      - "Polimento automotivo goiânia": 800 buscas/mês
      - "Vitrificação de pintura goiânia": 600 buscas/mês

      Se você não tá ranqueando pra essas palavras, tá deixando **2.000-3.000 clientes em potencial** irem pro concorrente TODO MÊS.

      **Como ranquear:**
      - Site otimizado (títulos, descrições, conteúdo)
      - Google Meu Negócio conectado ao site
      - Blog com artigos úteis ("Diferença entre polimento e cristalização")

      ---

      ### 3. Portfólio Organizado Converte Mais

      Instagram: 
      - Cliente rola feed aleatoriamente
      - Fotos se perdem no meio de memes/stories/propagandas
      - Difícil achar aquele trabalho específico que ele quer ver

      Site com Galeria:
      - Categorias organizadas (Polimento, Higienização Interna, PPF, Vitrificação)
      - Antes/Depois lado a lado
      - Filtros por tipo de serviço ou carro
      - Cliente vê exatamente o que procura

      **Taxa de conversão:**
      - Instagram: 2-5% (de visualizações pra orçamento)
      - Site bem feito: 8-12%

      ---

      ### 4. Agendamento Online Aumenta Conversão em 35%

      **Fluxo atual (sem site):**
      1. Cliente vê seu Instagram
      2. Manda DM
      3. Espera você responder (às vezes demora)
      4. Troca 10 mensagens
      5. Às vezes desiste no meio (cansou de esperar)

      **Fluxo com site:**
      1. Cliente entra no site
      2. Escolhe o serviço
      3. Vê o preço/detalhes
      4. Clica "Solicitar Orçamento" → vai direto pro WhatsApp com mensagem pronta
      5. Você só confirma

      **Tempo pro cliente:** 2 minutos (ao invés de 2 horas ou desistir)

      **Resultado:** +35% de conversão comprovado.

      ---

      ### 5. Profissionalismo = Cobrança Mais Alta

      Cliente compara 3 estéticas:

      **Estética A:** Só Instagram, posts irregulares, sem site  
      → Cliente pensa: "É profissional mesmo? Parece iniciante."  
      → Orçamento: R$ 800

      **Estética B:** Instagram + site profissional com galeria, depoimentos, processo detalhado  
      → Cliente pensa: "Esses caras são sérios. Vale o investimento."  
      → Orçamento: R$ 1.500 (mesmo serviço)

      **Site bem feito te dá AUTORIDADE pra cobrar mais caro.**

      E cliente paga. Porque ele vê valor.

      ---

      ## Objeções Comuns (E Por Que Estão Erradas)

      ### ❌ "Meus clientes vêm tudo por indicação, não preciso de site"

      Hoje sim. Mas:
      - E se você quer CRESCER?
      - E se você quer cliente NOVO que não te conhece?
      - Indicação tem limite. Google não tem.

      ### ❌ "Site é caro, vou gastar R$ 10.000"

      Não precisa. Um site funcional pra estética automotiva custa R$ 900-2.000.

      Se isso converter 2 serviços a mais por mês (exemplo: 2x R$ 1.000 = R$ 2.000), **já pagou o investimento no primeiro mês**.

      ### ❌ "Instagram já mostra meu trabalho"

      Instagram mostra pra quem JÁ te segue.

      Site mostra pra QUALQUER UM que buscar seu serviço no Google (mesmo sem te conhecer).

      ### ❌ "Eu não sei mexer em site, vou ficar dependente de dev"

      Sites modernos têm painel admin super simples. Você atualiza fotos, preços, tudo sozinho.

      É mais fácil que postar no Instagram.

      ---

      ## Case Real: Estética Que Implementou Site

      **Antes (só Instagram + WhatsApp):**
      - 15-20 orçamentos/mês
      - Taxa de conversão: 30%
      - Faturamento: R$ 18.000/mês

      **Depois (Instagram + Site otimizado):**
      - 35-40 orçamentos/mês (dobrou)
      - Taxa de conversão: 45%
      - Faturamento: R$ 32.000/mês

      **ROI do site:** Investiu R$ 1.500, recuperou em menos de 1 mês.

      ---

      ## O Que Seu Site Precisa Ter (Checklist)

      ✅ **Galeria Antes/Depois** bem organizada (por tipo de serviço)  
      ✅ **Descrição de cada serviço** (o que inclui, quanto tempo demora, preço base)  
      ✅ **Depoimentos de clientes** (vídeos são ouro)  
      ✅ **Botão direto pro WhatsApp** em toda página  
      ✅ **Formulário de orçamento** rápido  
      ✅ **Google Maps** integrado (localização)  
      ✅ **Certificados/Produtos utilizados** (3M, Vonixx, etc — gera confiança)  
      ✅ **Blog** com dicas ("Como cuidar da vitrificação", "Quando fazer polimento")

      **Prazo de entrega:** 7-10 dias pra ter tudo funcionando.

      ---

      ## Quanto Custa Ter um Site? (Valor Real)

      **Investimento:**
      - Site profissional com tudo que listei acima: R$ 900-3.000 (depende da complexidade)
      - Domínio (.com.br): R$ 40/ano
      - Hospedagem: R$ 0-20/mês (muitos devs incluem no pacote por 1 ano)

      **Total investimento inicial:** R$ 1.000-3.000

      **Retorno esperado:**
      - Se converter 3 serviços a mais por mês (R$ 1.000/serviço) = +R$ 3.000/mês
      - Em 1 mês já pagou
      - Restante é lucro puro

      **ROI:** 300-500% no primeiro ano.

      ---

      ## Conclusão: Não Espere a Concorrência Te Passar

      Mercado automotivo é competitivo. Cliente tem opção.

      Se você não aparece no Google, não passa profissionalismo, não facilita o orçamento... **cliente vai pro que aparece e facilita**.

      **Próximo Passo:**

      Se você quer ter um site profissional, com galeria de trabalhos, agendamento online e tudo otimizado pra conversão, tenho templates prontos específicos pra estéticas automotivas.

      Implemento em 7-10 dias, você já começa a ranquear no Google e a receber mais orçamentos.

      👉 [Fale comigo no WhatsApp](https://wa.me/556198031185)

      ---

      *Gustavo Rodrigues - Desenvolvedor Full-Stack | Especialista em Sites para Estéticas Automotivas*
    `,
  },
];

export const ROI_DATA = {
  averageTicket: 50,
  marketplaceFee: 0.23, // 23%
};
