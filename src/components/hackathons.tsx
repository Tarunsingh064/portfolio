"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaCalendar, FaUsers, FaLightbulb } from "react-icons/fa";

const hackathons = [
  {
    title: "Foss Hack ",
    placement: "No Rank",
    team: "Binary Brains",
    date: "Feb 2025",
    description: "Developed mental health product called Harmony",
    technologies: ["React", "Django rest framework","Sqlite"],
    achievements: ["NA"],
    icon: <FaTrophy className="text-yellow-400" />
  },
  {
    title: "Hackground 2k25 ",
    placement: "cleared 2 rounds",
    team: "Binary Brains",
    date: "Feb 2025",
    description: "ide of delhi vypar connect",
    technologies: ["React", "Django rest framework","Sqlite"],
    achievements: ["cleared 2 rounds"],
    icon: <FaTrophy className="text-yellow-400" />
  },

];

const achievements = [
  {
    title: "NA",
    issuer: "NA",
    date: "NA",
    description: "NA",
    icon: <FaLightbulb className="text-blue-400" />
  },
];

export default function HackathonsAndAchievements() {
  return (
    <section
      id="hackathons"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%), #0a0a0a",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-6xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-6xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400 mb-4 drop-shadow-lg"
        >
          Hackathons & Achievements
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Showcasing my competitive coding journey and recognition for technical excellence and innovation.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hackathons Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 mr-3 flex items-center justify-center">
                <FaTrophy className="text-yellow-400" />
              </div>
              Hackathon Participation
            </motion.h3>
            
            <div className="space-y-8">
              {hackathons.map((hackathon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Connection line */}
                  {i !== hackathons.length - 1 && (
                    <div className="absolute left-6 top-14 h-16 w-0.5 bg-gradient-to-b from-yellow-500 to-green-500 ml-1 z-0"></div>
                  )}
                  
                  <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 border border-gray-800/70 hover:border-yellow-400/30 transition-all duration-500 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mr-4">
                            {hackathon.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{hackathon.title}</h4>
                            <div className="flex items-center text-sm text-yellow-300 font-medium">
                              {hackathon.placement}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <FaCalendar className="mr-2 text-green-400" />
                        {hackathon.date}
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="mr-2 text-blue-400" />
                        {hackathon.team}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{hackathon.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm text-gray-500 mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.technologies.map((tech, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm text-gray-500 mb-2">Awards</h5>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.achievements.map((achievement, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 text-xs rounded-full bg-green-900/30 text-green-300 border border-green-700/30"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Achievements Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/20 mr-3 flex items-center justify-center">
                <FaAward className="text-green-400" />
              </div>
              Awards & Certifications
            </motion.h3>
            
            <div className="space-y-8">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Connection line */}
                  {i !== achievements.length - 1 && (
                    <div className="absolute left-6 top-14 h-16 w-0.5 bg-gradient-to-b from-green-500 to-yellow-500 ml-1 z-0"></div>
                  )}
                  
                  <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 border border-gray-800/70 hover:border-green-400/30 transition-all duration-500 relative z-10">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                        <div className="flex items-center text-sm text-green-300">
                          {achievement.issuer} • {achievement.date}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300">{achievement.description}</p>
                    
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400/10 to-green-400/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-md rounded-2xl p-6 border border-gray-800/70"
            >
              <h4 className="text-xl font-bold text-white mb-6 text-center">Hackathon Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
                  <div className="text-sm text-gray-400">Hackathons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-sm text-gray-400">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}