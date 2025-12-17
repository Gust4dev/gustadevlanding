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
  // --- ENGINEERING & SAAS ---
  {
    id: 'os-saas',
    title: 'OS-SaaS (Oficina Inteligente)',
    description: 'Plataforma ERP Multi-tenant com isolamento de dados rigoroso (RBAC), geração de laudos em PDF em tempo real e sistema financeiro integrado via Stripe.',
    category: ProjectCategory.SAAS,
    tags: ['Multi-tenancy', 'RBAC Security', 'Real-time PDF', 'Stripe', 'Next.js 14'],
    imageUrl: 'https://picsum.photos/id/48/800/600',
    demoLink: '#',
    githubLink: '#',
    isFeatured: true,
    isInDevelopment: true,
  },
  {
    id: 'frete-express',
    title: 'Frete Express',
    description: 'App de logística estilo Uber. Conecta motoristas e cargas usando geolocalização e comunicação via WebSockets para tracking em tempo real.',
    category: ProjectCategory.SAAS,
    tags: ['Socket.io', 'Leaflet Maps', 'Real-time', 'Node.js'],
    imageUrl: 'https://picsum.photos/id/111/800/600', 
    githubLink: '#',
  },

  // --- DEEP TECH (These display differently) ---
  {
    id: 'vect-ai',
    title: 'VECT AI',
    description: 'Assistente de arquitetura generativa integrado com Google Gemini. Transforma prompts em visualizações de projetos.',
    category: ProjectCategory.DEEP_TECH,
    tags: ['GenAI', 'LLM Integration', 'Python'],
  },
  {
    id: 'psicare-api',
    title: 'PsiCare API',
    description: 'Backend médico com rigoroso controle de acesso (RBAC) e criptografia para dados sensíveis de pacientes.',
    category: ProjectCategory.DEEP_TECH,
    tags: ['MongoDB', 'Security First', 'Node.js'],
  },
  {
    id: 'robocode',
    title: 'Robocode Agent',
    description: 'Implementação de algoritmos de mira preditiva e movimentação evasiva em Java puro para competição de tanques autônomos.',
    category: ProjectCategory.DEEP_TECH,
    tags: ['Java', 'Algorithms', 'Physics'],
  },

  // --- HIGH-END DESIGN ---
  {
    id: 'filmtech',
    title: 'FilmTech Productions',
    description: 'Plataforma de streaming e portfólio para produtora de vídeo. Integração com API do Vimeo e player customizado.',
    category: ProjectCategory.DESIGN,
    tags: ['Streaming API', 'Dark UI', 'Interactive'],
    imageUrl: 'https://picsum.photos/id/20/800/600',
    comparisonImages: {
      before: 'https://picsum.photos/id/133/800/600',
      after: 'https://picsum.photos/id/98/800/600',
    },
    demoLink: '#',
  },
  {
    id: 'daniel-imobi',
    title: 'Daniel Imobi Luxury',
    description: 'Portfolio Imobiliário de Luxo com animações Framer Motion e galeria Lightbox customizada.',
    category: ProjectCategory.DESIGN,
    tags: ['UX/UI', 'Framer Motion', 'Conversion Rate'],
    imageUrl: 'https://picsum.photos/id/10/800/600',
    comparisonImages: {
      before: 'https://picsum.photos/id/175/800/600',
      after: 'https://picsum.photos/id/164/800/600',
    },
    demoLink: '#',
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'Email', url: 'mailto:contact@gustavo.dev', icon: Mail },
];

export const WHATSAPP_NUMBER = "5511999999999";