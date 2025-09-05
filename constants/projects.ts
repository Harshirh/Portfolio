import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Dashboard',
    shortDescription: 'Admin dashboard for e-commerce management',
    description: 'A comprehensive dashboard for e-commerce store owners to manage products, track sales, and analyze business performance.',
    imageUrl: '/images/images.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'e-commerce-website-rosy-nine.vercel.app',
    githubUrl: 'https://github.com/Harshirh/E-Commerce_Wsbsite',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Personal Finance Tracker',
    shortDescription: 'App to track personal finances',
    description: 'A mobile-friendly application that helps users track their expenses, create budgets, and visualize spending patterns.',
    imageUrl: '/images/projects/finance-tracker.jpg',
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components', 'MongoDB'],
    demoUrl: 'https://finance-tracker-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/finance-tracker',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Recipe Finder',
    shortDescription: 'App to find recipes by ingredients',
    description: 'An application that allows users to search for recipes based on ingredients they have at home. Includes filtering options and saving favorites.',
    imageUrl: '/images/projects/recipe-finder.jpg',
    technologies: ['Vue.js', 'Vuex', 'CSS Grid', 'Express.js', 'Recipe API'],
    demoUrl: 'https://recipe-finder-app.netlify.app',
    githubUrl: 'https://github.com/yourusername/recipe-finder'
  },
  {
    id: 'project-4',
    title: 'Weather Dashboard',
    shortDescription: 'Real-time weather information app',
    description: 'A weather application that provides real-time weather information, forecasts, and weather maps for locations worldwide.',
    imageUrl: '/images/projects/weather-dashboard.jpg',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'CSS Modules'],
    demoUrl: 'https://weather-app-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/weather-dashboard'
  },
  {
    id: 'project-5',
    title: 'Markdown Blog',
    shortDescription: 'Markdown-powered blog platform',
    description: 'A lightweight blog platform that converts markdown files to beautiful blog posts with syntax highlighting and responsive design.',
    imageUrl: '/images/projects/markdown-blog.jpg',
    technologies: ['Next.js', 'Markdown', 'Prism.js', 'TypeScript', 'Vercel'],
    demoUrl: 'https://markdown-blog-example.vercel.app',
    githubUrl: 'https://github.com/yourusername/markdown-blog'
  },
  {
    id: 'project-6',
    title: 'Task Management App',
    shortDescription: 'Drag-and-drop task management',
    description: 'A Trello-inspired task management application with drag-and-drop functionality, task assignments, due dates, and categories.',
    imageUrl: '/images/projects/task-management.jpg',
    technologies: ['React', 'Drag-and-Drop API', 'Firebase', 'Material UI'],
    demoUrl: 'https://task-app-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/task-management'
  }
 
];

export const featuredProjects = projects.filter(project => project.featured);