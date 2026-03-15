import Image from 'next/image';
import Link from 'next/link';
import DarkVeil from '../../components/DarkVeil';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/images/images.jpg",
      technologies: ["Next.js", "Node.js"],
      link: "https://github.com/Harshirh/E-Commerce_Wsbsite"
    },
    {
      title: "Organisational Dashboard ",
      description: "Built using Next.js and Tailwind CSS with a Node.js–Express backend, the T-Summit website delivers a fast, responsive, and SEO-optimized user experience with modern UI/UX and smooth animations.",
      image: "/images/Project_dashboard.png",
      technologies: ["React", "Firebase", "Nodejs", "Tailwind CSS","Express"],
      link: "https://github.com/Harshirh/domain-dash-project-hub",
      link1: "https://domain-dash-project-hub.vercel.app"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "/images/portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/Harshirh/Portfolio"
    },
    {
      title: "KRISHIMITRA - AI Farming Assistant",
      description: "A blogging platform with user authentication, markdown support, and a rich text editor.",
      // Corrected: Removed 'public' and added leading slash
      image: "/images/icon-512.svg", 
      technologies: ["Gatsby", "GraphQL", "Contentful"],
      link: "/projects/blog"
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts using a third-party API.",
      image: "/images/weather_image.png",
      technologies: ["React", "OpenWeatherMap API", "CSS"],
      link: "https://github.com/Harshirh/weather-app"
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
        {/* Dark Veil background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
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