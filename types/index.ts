export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
  }
  
  // Removed the Social interface as we're now using SocialIcon from constants/socials.ts