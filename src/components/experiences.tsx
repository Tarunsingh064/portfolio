"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import Image from "next/image";

const experiences = [
  {
    title: "SDE Intern",
    company: "Scitech Industries",
    companyIcon: "https://scitechindustries.com/favicon.ico",
    period: "Aug 2025 - Present",
    location: "Remote",
    description: "Full Stack Developer working with modern technologies to build scalable web applications using Next.js, NestJS, and modern development practices.",
    skills: ["TypeScript", "NestJS", "Next.js", "Chakra UI", "MongoDB",],
    type: "work"
  },
  {
    title: "Web Development Mentor",
    company: "Coding Bootcamp",
    companyIcon: "/logo.webp", // You can add another icon here
    period: "Jan 2025 - Jul 2025",
    location: "Remote",
    description: "Mentored students in full-stack web development, helping them build real-world projects and develop professional skills.",
    skills: ["React", "Express.js", "PostgreSQL", "Git", "Agile Methodology"],
    type: "work"
  },
];

// Company Logo component with proper error handling
const CompanyLogo = ({ src, alt, company, type }: { src: string; alt: string; company: string; type: string }) => {
  return (
    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-indigo-500/20 group-hover:scale-105 transition-transform">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="object-contain"
          onError={(e) => {
            // Create a fallback element
            const fallback = document.createElement('div');
            fallback.className = 'w-10 h-10 flex items-center justify-center bg-indigo-500/20 rounded-lg';
            fallback.innerHTML = `<span class="text-indigo-400 text-lg font-bold">${company.charAt(0)}</span>`;
            
            // Replace the image with the fallback
            e.currentTarget.replaceWith(fallback);
          }}
          onLoad={(e) => {
            // Optional: Add slight styling for loaded images
            e.currentTarget.classList.add('rounded-lg');
          }}
        />
      ) : (
        <div className="w-10 h-10 flex items-center justify-center bg-indigo-500/20 rounded-lg">
          <FaBuilding className={type === 'work' ? 'text-indigo-400 text-xl' : 'text-pink-400 text-xl'} />
        </div>
      )}
    </div>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%), #0a0a0a",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-indigo-500 rounded-b-full blur-6xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-full h-72 bg-pink-500 rounded-t-full blur-6xl opacity-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-16 drop-shadow-lg"
        >
          Professional Experience
        </motion.h2>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-7 md:left-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-pink-500 transform -translate-x-1/2"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 border-4 border-gray-900 transform -translate-x-1/2 z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-800/70 hover:border-indigo-400/50 transition-all group h-full">
                    <div className="flex items-start justify-between mb-4">
                      {/* Company Icon */}
                      <div className="flex items-center gap-4">
                        <CompanyLogo 
                          src={exp.companyIcon} 
                          alt={`${exp.company} logo`} 
                          company={exp.company}
                          type={exp.type}
                        />
                        
                        {/* Title and Company */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-indigo-300 font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Period and location */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-indigo-400" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-pink-400" />
                        {exp.location}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, j) => (
                        <span 
                          key={j}
                          className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional decorative element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 p-6 rounded-2xl border border-indigo-500/20 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">Continuous Growth</h3>
            <p className="text-indigo-200">Always learning new technologies and methodologies to stay at the forefront of web development.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}