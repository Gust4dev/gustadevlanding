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