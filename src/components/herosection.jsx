"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto px-6 pt-32 pb-20"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I’m <span className="text-indigo-400">Tarun Singh</span>
        </h1>
        <p className="text-gray-300 max-w-xl text-lg">
          I’m a passionate <span className="text-indigo-300">Full-Stack Developer</span> 
          who loves building modern web applications and solving real-world problems with code.
        </p>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-gray-400 max-w-xl text-base leading-relaxed"
        >
          <p>
            I’m currently pursuing a <span className="text-indigo-400">B.Tech in Computer Science</span>.  
            With a strong interest in <span className="text-yellow-400">web development, AI, and open-source projects</span>,  
            I strive to build applications that are not only functional but also impactful.  
          </p>
          <p className="mt-3">
            Beyond coding, I love exploring new technologies, contributing to community projects,  
            and continuously improving myself as a developer. 
          </p>
        </motion.div>

        {/* Buttons (below bio) */}
        <div className="flex justify-center md:justify-start gap-4 pt-6">
          <a
            href="https://www.linkedin.com/in/tarun-singh-80ab4223a/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/Tarunsingh064/Tarunsingh064"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href="https://leetcode.com/u/Tarun_singh006/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-medium transition"
          >
            <SiLeetcode size={18} /> LeetCode
          </a>
        </div>
      </motion.div>

      {/* Right Profile Image with Fancy Background */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0 relative"
      >
        {/* Background figures */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-10 -right-12 w-52 h-52 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-bounce" />
        <div className="absolute top-1/2 -left-16 w-28 h-28 bg-pink-500 rounded-full blur-2xl opacity-25 animate-spin-slow" />

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-44 h-44 md:w-60 md:h-60 rounded-full p-[3px] 
                     bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 
                     shadow-2xl mx-auto md:mx-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse" />
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="relative w-full h-full rounded-full object-cover ring-4 ring-black"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
