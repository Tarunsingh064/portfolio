"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaClock, FaChevronLeft, FaChevronRight, FaImage } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPython, SiDjango, SiReact } from "react-icons/si";
import Image from "next/image";

// Define types for our project data
interface TechStackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  techStack: TechStackItem[];
  timeline: string;
  completionDate: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Campusconnects",
    description: "A social platform that connects students to share posts, collaborate, and engage in campus life.",
    image: "/campusconnects.jpg", // Changed to more specific name
    githubLink: "https://github.com/Tarunsingh064/cmpusconnect", // Replace with actual
    liveLink: "https://campusconnects.in/",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "Python", icon: <SiPython />, color: "text-yellow-600" },
      { name: "Django", icon: <SiDjango />, color: "text-green-600" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" }
    ],
    timeline: "2 months - present",
    completionDate: "July 2024",
    category: "Full Stack"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations and dark/light mode toggle.",
    image: "/portfolio.png", // Changed to more specific name
    githubLink: "https://github.com/yourusername/portfolio", // Replace with actual
    liveLink: "https://yourportfolio.vercel.app", // Replace with actual
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "Framer Motion", icon: <SiReact />, color: "text-purple-500" }
    ],
    timeline: "2 Days",
    completionDate: "August 2024",
    category: "Frontend"
  }
];

// Image component with fallback
const ProjectImage = ({ src, alt, title }: { src: string; alt: string; title: string }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex flex-col items-center justify-center text-white/60">
        <FaImage className="text-4xl mb-2" />
        <p className="text-sm">No image available</p>
        <p className="text-xs mt-1">{title}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setImageError(true)}
    />
  );
};

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = (): void => {
    setDirection(1);
    setCurrentIndex((prevIndex: number) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setDirection(-1);
    setCurrentIndex((prevIndex: number) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number): void => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Define variants with proper TypeScript types
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section
      id="projects"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%), #0a0a0a",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-6xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-6xl opacity-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 drop-shadow-lg"
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          A collection of my recent work showcasing my skills in web development, design, and problem-solving.
        </motion.p>

        {/* Slider Container */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-3xl">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500 transition-all border border-gray-700/50 shadow-lg"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center hover:bg-purple-500 transition-all border border-gray-700/50 shadow-lg"
            aria-label="Next project"
          >
            <FaChevronRight className="text-white" />
          </button>

          {/* Slides */}
          <div ref={sliderRef} className="relative w-full h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-gray-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800/70 h-full flex flex-col md:flex-row">
                  {/* Project Image */}
                  <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 z-10"></div>
                    
                    {/* Image Container */}
                    <div className="w-full h-full relative">
                      <ProjectImage 
                        src={projects[currentIndex].image} 
                        alt={projects[currentIndex].title}
                        title={projects[currentIndex].title}
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    
                    {/* Project Category Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        projects[currentIndex].category === "Full Stack" ? "bg-cyan-900/30 text-cyan-300 border border-cyan-700/30" :
                        projects[currentIndex].category === "Frontend" ? "bg-purple-900/30 text-purple-300 border border-purple-700/30" :
                        "bg-pink-900/30 text-pink-300 border border-pink-700/30"
                      }`}>
                        {projects[currentIndex].category}
                      </span>
                    </div>
                    
                    {/* Project Links */}
                    <div className="absolute top-6 right-6 flex gap-2 z-20">
                      {projects[currentIndex].githubLink && !projects[currentIndex].githubLink.includes("yourusername") && (
                        <a 
                          href={projects[currentIndex].githubLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500 transition-colors border border-gray-700/50 shadow-lg"
                        >
                          <FaGithub className="text-white" />
                        </a>
                      )}
                      {projects[currentIndex].liveLink && !projects[currentIndex].liveLink.includes("yourportfolio") && (
                        <a 
                          href={projects[currentIndex].liveLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center hover:bg-purple-500 transition-colors border border-gray-700/50 shadow-lg"
                        >
                          <FaExternalLinkAlt className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-4">{projects[currentIndex].title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{projects[currentIndex].description}</p>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[currentIndex].techStack.map((tech: TechStackItem, j: number) => (
                          <div key={j} className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-700/50">
                            <span className={tech.color}>{tech.icon}</span>
                            <span className="text-sm text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Timeline */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaCalendar className="text-cyan-400 text-lg" />
                        <span>{projects[currentIndex].completionDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaClock className="text-purple-400 text-lg" />
                        <span>{projects[currentIndex].timeline}</span>
                      </div>
                    </div>
                    
                    {/* Project Index */}
                    <div className="text-center text-gray-500 mt-6">
                      {currentIndex + 1} / {projects.length}
                    </div>

                    {/* Link buttons for mobile */}
                    <div className="flex gap-4 mt-6 md:hidden">
                      {projects[currentIndex].githubLink && !projects[currentIndex].githubLink.includes("yourusername") && (
                        <a 
                          href={projects[currentIndex].githubLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-700/30 hover:bg-cyan-600/40 transition-colors text-sm"
                        >
                          <FaGithub className="text-white" />
                          Code
                        </a>
                      )}
                      {projects[currentIndex].liveLink && !projects[currentIndex].liveLink.includes("yourportfolio") && (
                        <a 
                          href={projects[currentIndex].liveLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-700/30 hover:bg-purple-600/40 transition-colors text-sm"
                        >
                          <FaExternalLinkAlt className="text-white" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 w-8" 
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            <FaGithub className="text-white" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}