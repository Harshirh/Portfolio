'use client';

import Image from 'next/image';
import Link from 'next/link';
import DarkVeil from '../../components/DarkVeil';
import Masonry from '../../components/Masonry';
import { motion } from 'framer-motion';
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/images/images.jpg",
      technologies: ["HTML","CSS","JavaScript"],
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
      technologies: ["Next.js", "Express.js", "Superbase","Firebase(authentication)"],
      link: "krishimitra-ai-eight.vercel.app"
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts using a third-party API.",
      image: "/images/weather_image.png",
      technologies: ["React", "OpenWeatherMap API", "CSS"],
      link: "https://github.com/Harshirh/weather-app"
    },
    {
      title: "Pingsta – AI-Powered Citizen Helpline",
      description: "Pingsta is an AI-powered citizen helpline that provides support for legal queries, document assistance, and emergency services through intelligent AI calling agents.",
      image: "/images/Pingsta.png",
      technologies: ["Flask (Python)", "Twilio", "Vapi","Fine Tuned LLMs","Next JS"],
      link: "pingsta.vercel.app"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center mt-12">
            <h1 className="text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c59aff] to-[#00e3fd] text-glow animate-gradient drop-shadow-[0_0_25px_rgba(197,154,255,0.5)]">
              My Projects
            </h1>
            <p className="text-xl text-[#a9abb3] mb-8 float-animation font-medium">
              Explore my latest work and creative endeavors in the void
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 section-light relative">
        <div className="container mx-auto px-4">
          <Masonry 
            items={projects.map((p, i) => ({ id: i.toString(), ...p, height: 500, img: p.image, url: p.link }))}
            animateFrom="bottom"
            stagger={0.1}
            duration={0.8}
            scaleOnHover={false}
            renderItem={(item) => {
              const project = projects[parseInt(item.id)];
              return (
                <div className="card card-hover group h-full w-full flex flex-col">
                  <div className="relative h-48 bg-gradient-secondary overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-[#ecedf6] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#c59aff] group-hover:to-[#00e3fd] transition-all">
                      {project.title}
                    </h3>
                    <p className="text-[#a9abb3] mb-6 flex-1 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[#006875]/20 text-[#00d7f0] rounded-full drop-shadow-[0_0_8px_rgba(0,212,236,0.2)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link !== '#' && (
                      <Link
                        href={project.link}
                        className="text-[#00e3fd] hover:text-[#00d4ec] font-medium inline-flex items-center group w-fit transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(0,227,253,0.5)]"
                      >
                        View Project
                        <svg 
                          className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" 
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
                    )}
                  </div>
                </div>
              );
            }}
          />
        </div>
      </section>
    </div>
  );
}