import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Project, ProjectCategory, TechItem } from './types';

export const HERO_TITLE = "Gustavo Developer";
export const HERO_SUBTITLE = "Software Engineer & Full-Stack Developer";
export const HERO_DESC = "Transformo problemas complexos em software escalável. Especialista em construir ecossistemas digitais completos: do Banco de Dados à Interface Interativa.";

// Ordered from low-level/backend to frontend/cloud
export const TECH_STACK: TechItem[] = [
  { name: 'Java', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'Socket.io', category: 'Backend' },
  { name: 'Gemini AI', category: 'AI' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'Vercel', category: 'DevOps' },
];

export const PROJECTS: Project[] = [
  {
    id: 'os-saas',
    title: 'OS-SaaS (Oficina Inteligente)',
    description: 'Plataforma ERP Multi-tenant com isolamento de dados rigoroso (RBAC), geração de laudos em PDF em tempo real e sistema financeiro integrado via Stripe.',
    category: ProjectCategory.SAAS,
    tags: ['Multi-tenancy', 'RBAC Security', 'Real-time PDF', 'Stripe', 'Next.js 14'],
    imageUrl: '/images/projects/SaaS OS.webp',
    imageConfig: { zoom: 1.0, position: 'center' }, // ADJUST HERE: zoom (e.g. 1.2) and position (e.g. 'top' or '50% 20%')
    githubLink: 'https://github.com/Gust4dev/OS-SaaS',
    isFeatured: true,
    isInDevelopment: true,
  },
  {
    id: 'frete-express',
    title: 'Frete Express',
    description: 'App de logística estilo Uber. Conecta motoristas e cargas usando geolocalização e comunicação via WebSockets para tracking em tempo real.',
    category: ProjectCategory.SAAS,
    tags: ['Socket.io', 'Leaflet Maps', 'Real-time', 'Node.js'],
    imageUrl: '/images/projects/FreteExpress.webp', 
    imageConfig: { zoom: 1.0, position: 'center' }, // ADJUST HERE
    demoLink: 'https://meufreteexpress.com.br/',
    githubLink: 'https://github.com/Gust4dev/freteexpress',
  },

  // --- DEEP TECH (These display differently) ---
  {
    id: 'vect-ai',
    title: 'VECT AI',
    description: 'Assistente de arquitetura generativa integrado com Google Gemini. Transforma prompts em visualizações de projetos.',
    category: ProjectCategory.DEEP_TECH,
    tags: ['GenAI', 'LLM Integration', 'Python'],
    githubLink: 'https://github.com/Gust4dev/VECT',
  },
  {
    id: 'psicare-api',
    title: 'PsiCare API',
    description: 'Backend médico com rigoroso controle de acesso (RBAC) e criptografia para dados sensíveis de pacientes.',
    category: ProjectCategory.DEEP_TECH,
    tags: ['MongoDB', 'Security First', 'Node.js'],
    githubLink: 'https://github.com/Gust4dev/PsicareAPI-Atualizada',
  },
  {
    id: 'robocode',
    title: 'Robocode Agent',
    description: 'Implementação de algoritmos de mira preditiva e movimentação evasiva em Java puro para competição de tanques autônomos.',
    category: ProjectCategory.DEEP_TECH,
    tags: ['Java', 'Algorithms', 'Physics'],
    githubLink: 'https://github.com/Gust4dev/Robocode_gusta',
  },

  // --- HIGH-END DESIGN ---
  {
    id: 'filmtech',
    title: 'FilmTech Productions',
    description: 'Plataforma de streaming e portfólio para produtora de vídeo. Integração com API do Vimeo e player customizado.',
    category: ProjectCategory.DESIGN,
    tags: ['Streaming API', 'Dark UI', 'Interactive'],
    imageUrl: '/images/projects/FilmtechLuxury.webp',
    imageConfig: { zoom: 1.0, position: 'center' }, // ADJUST HERE
    /* 
    comparisonImages: {
      before: '/images/projects/filmtech-before.webp',
      after: '/images/projects/filmtech-after.webp',
    },
    */
    demoLink: 'https://filmtech.vercel.app',
    githubLink: 'https://github.com/Gust4dev/filmtech',
  },
  {
    id: 'daniel-imobi',
    title: 'Daniel Imobi Luxury',
    description: 'Portfolio Imobiliário de Luxo com animações Framer Motion e galeria Lightbox customizada.',
    category: ProjectCategory.DESIGN,
    tags: ['UX/UI', 'Framer Motion', 'Conversion Rate'],
    imageUrl: '/images/projects/DanielImobi.webp',
    imageConfig: { zoom: 1.0, position: 'center' }, // ADJUST HERE
    /*
    comparisonImages: {
      before: '/images/projects/daniel-imobi-before.webp',
      after: '/images/projects/daniel-imobi-after.webp',
    },
    */
    demoLink: 'https://danielimobi.vercel.app',
    githubLink: 'https://github.com/Gust4dev/danielimobi',
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Gust4dev', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gustadev/', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/gustaaa__', icon: Instagram },
  { name: 'Email', url: 'mailto:gustavogomes034@outlook.com', icon: Mail },
];

export const WHATSAPP_NUMBER = "556198031185";

export const PROFILE_CONFIG = {
  imageUrl: '/images/projects/Gustadev.webp',
  zoom: 1.2,
  position: 'center',
};