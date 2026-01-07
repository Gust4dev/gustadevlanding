import { LucideIcon } from 'lucide-react';

export enum ProjectCategory {
  SAAS = 'Engineering & SaaS',
  DEEP_TECH = 'Deep Tech & Backend',
  DESIGN = 'High-End Web Design',
}

export interface TechItem {
  name: string;
  category: 'Languages' | 'Backend' | 'Frontend' | 'DevOps' | 'AI';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl?: string; // Optional now as Deep Tech might use icons
  comparisonImages?: {
    before: string;
    after: string;
  };
  imageConfig?: {
    zoom?: number;
    position?: string; // e.g., 'center', 'top', '50% 50%'
  };
  demoLink?: string;
  githubLink?: string;
  isFeatured?: boolean;
  isInDevelopment?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

// Templates Marketplace Types
export interface TemplatePackage {
  id: string;
  tier: 'bronze' | 'silver' | 'gold';
  name: string;
  price: number;
  highlight?: boolean;
  features: string[];
  supportDays: number | 'vitalicio';
}

export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  previewImage: string;
  imageConfig?: {
    zoom?: number;           // 1.0 = 100%, 1.5 = 150%
    position?: string;       // 'center', 'top', '50% 20%'
  };
  screenshots: string[];
  packages: TemplatePackage[];
  tags?: string[];
  demoUrl?: string;
}