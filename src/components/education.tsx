"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Delhi technical campus",
    period: "2025 - 2028",
    location: "India,Greater noida ,knowlege Park",
    description: "Specialized in Web Technologies.",
    grades: "CGPA: 7.0/10",
    courses: ["Data Structures", "Algorithms", "Machine Learning", "Web Development", "Database Systems"],
    achievements: ["Manthan kirti"],
    type: "college"
  },
  {
    degree: "High Secondary Education",
    institution: "D.A.V Public School",
    period: "2011 - 2024",
    location: "Kailash HIlls, New Delhi",
    description: "Focus on Mathematics and Computer Science. Participated in national science fair and coding competitions.",
    grades: "Percentage: 76%",
    courses: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
    achievements: ["NA"],
    type: "school"
  },
  ];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%), #0a0a0a",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-6xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-6xl opacity-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-16 drop-shadow-lg"
        >
          Education Journey
        </motion.h2>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-7 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
          
          {/* Education Items */}
          <div className="space-y-16">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot with icon */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                
                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-800/70 hover:border-blue-400/50 transition-all group h-full">
                    {/* Degree and institution */}
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-300 font-medium mb-3">{edu.institution}</p>
                    
                    {/* Period and location */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    
                    {/* Grades */}
                    <div className="bg-blue-900/20 rounded-lg p-3 mb-4 border border-blue-800/30">
                      <p className="text-blue-200 font-medium">{edu.grades}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    {/* Courses */}
                    <div className="mb-4">
                      <h4 className="text-blue-200 font-semibold mb-2">Relevant Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-200 border border-blue-800/30"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-purple-200 font-semibold mb-2 flex items-center">
                        <FaAward className="mr-2" /> Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, j) => (
                          <li key={j} className="text-sm text-gray-300 flex items-start">
                            <span className="text-purple-400 mr-2">•</span> {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm max-w-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
            <p className="text-blue-200">Currently Learning Datascience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}