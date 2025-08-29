"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { TfiAlignLeft } from "react-icons/tfi";
import { FaHome, FaTools, FaBriefcase, FaGraduationCap,FaProjectDiagram, } from "react-icons/fa";
import { SiHackster } from "react-icons/si";
import { SiPolywork } from "react-icons/si";
import { IoMdContact } from "react-icons/io";

const navItems = [
  { name: "Home", icon: <FaHome size={16} /> },
  { name: "Skills", icon: <FaTools size={16} /> },
  { name: "Experience", icon: <FaBriefcase size={16} /> },
  {name : "Projects" ,icon:<FaProjectDiagram size={16} /> },
  {name : "Hackathons" ,icon:<SiHackster size={16} /> },
  { name: "Education", icon: <FaGraduationCap size={16} /> },
  { name: "Contact", icon: <IoMdContact size={16} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <SiPolywork className="text-3xl text-indigo-400" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Tarun Singh
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          {navItems.map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              <a
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center gap-2 transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
              {/* Underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-indigo-400 hover:text-white transition-colors"
        >
          {open ? <X size={28} strokeWidth={2.5} /> : <TfiAlignLeft size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-gradient-to-b from-black/95 to-gray-900/95 px-6 overflow-hidden"
          >
            <ul className="flex flex-col space-y-6 py-6 text-lg text-gray-200 font-medium">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center gap-3 hover:text-indigo-400 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
