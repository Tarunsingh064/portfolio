"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiGithub,
  SiGit,
  SiPostman,
  SiJupyter,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineDataset } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    title: "Web Development",
    color: "from-blue-500 to-indigo-600",
    iconColor: "text-blue-400",
    skills: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    title: "Frameworks",
    color: "from-cyan-400 to-blue-500",
    iconColor: "text-cyan-400",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Django", icon: <SiDjango /> },
    ],
  },
  {
    title: "Data Analytics",
    color: "from-teal-400 to-green-500",
    iconColor: "text-teal-400",
    skills: [
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Seaborn", icon: <MdOutlineDataset /> },
      { name: "Matplotlib", icon: <MdOutlineDataset /> },
    ],
  },
  {
    title: "Database",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400",
    skills: [
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Postgres", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    color: "from-yellow-400 to-orange-500",
    iconColor: "text-yellow-400",
    skills: [
      { name: "VSCode", icon: <VscVscode /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Jupyter", icon: <SiJupyter /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%), #0a0a0a",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements that match your theme */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full blur-6xl opacity-10 animate-pulse" />
      
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500 rounded-full blur-4xl opacity-5 animate-spin-slow" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16 drop-shadow-lg"
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-800/70 hover:border-yellow-400/50 transition-all relative overflow-hidden group"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${category.color}`}
              ></div>
              
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>

              {/* Content container */}
              <div className="relative">
                {/* Category Title */}
                <h3 className={`text-2xl font-bold mb-6 flex items-center ${category.iconColor}`}>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      className="flex flex-col items-center justify-center bg-gray-800/30 rounded-xl p-4 shadow-md hover:shadow-lg transition-all group-hover:bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`text-3xl mb-2 transition-all duration-300 group-hover:scale-110 ${category.iconColor}`}>
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}