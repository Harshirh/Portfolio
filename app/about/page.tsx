import React from 'react';
import Image from 'next/image';
import DarkVeil from '../../components/DarkVeil';

export default function About() {
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
            <h1 className="text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#c59aff] to-[#00e3fd] text-glow animate-gradient drop-shadow-[0_0_25px_rgba(197,154,255,0.5)]">
              About Me
            </h1>
            <p className="text-xl text-[#a9abb3] mb-8 float-animation font-medium">
              Get to know more about my journey and expertise in the digital realm
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 section-light relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="card p-6">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/myphoto.jpg"
                    alt="Harshith's Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c59aff] to-[#00e3fd]">
                My Journey
              </h2>
              <p className="text-[#a9abb3] text-lg leading-relaxed">
                I'm a passionate web developer with a keen eye for creating beautiful and functional digital experiences. 
                My journey in web development started with a curiosity for how things work on the internet, 
                which led me to dive deep into the world of programming and design.
              </p>
              <p className="text-[#a9abb3] text-lg leading-relaxed">
                With expertise in modern web technologies and frameworks, I focus on building responsive, 
                user-friendly applications that not only look great but also perform exceptionally well.
              </p>
              <div className="flex gap-4 mt-8">
                {/* Updated with download attribute */}
                <a 
                  href="/VELICHALAMALA HARSHITH REDDY_Resume.pdf" 
                  download="Harshith_Resume.pdf" 
                  className="btn-primary group inline-flex items-center"
                >
                  Download Resume
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 section-purple relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#c59aff] to-[#00e3fd]">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "React", level: "90%" },
              { name: "JavaScript", level: "85%" },
              { name: "Node.js", level: "80%" },
              { name: "TypeScript", level: "75%" },
              { name: "Next.js", level: "85%" },
              { name: "Tailwind CSS", level: "90%" },
              { name: "MongoDB", level: "75%" },
              { name: "MySQL", level: "70%" }
            ].map((skill, index) => (
              <div key={index} className="card card-hover group p-6">
                <h3 className="text-xl font-bold mb-4 text-[#ecedf6] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#c59aff] group-hover:to-[#00e3fd] transition-all">
                  {skill.name}
                </h3>
                <div className="w-full bg-[#10131a] rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#7631fd] to-[#00d4ec] h-2.5 rounded-full transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,212,236,0.6)]"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}