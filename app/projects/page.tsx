import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "/projects/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "/projects/taskmanager"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "/projects/portfolio"
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with user authentication, markdown support, and a rich text editor.",
      image: "/projects/blog.jpg",
      technologies: ["Gatsby", "GraphQL", "Contentful"],
      link: "/projects/blog"
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts using a third-party API.",
      image: "/projects/weather.jpg",
      technologies: ["React", "OpenWeatherMap API", "CSS"],
      link: "/projects/weather"
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with user authentication and message history.",
      image: "/projects/chat.jpg",
      technologies: ["Socket.io", "Express", "MongoDB"],
      link: "/projects/chat"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 text-gradient text-glow animate-gradient">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 mb-8 float-animation">
              Explore my latest work and creative endeavors
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 section-light relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card card-hover group">
                <div className="relative h-48 bg-gradient-secondary overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-indigo-500/10 text-indigo-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center group"
                  >
                    View Project
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 