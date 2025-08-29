"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mgvlawzd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%), #0a0a0a",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-6xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-6xl opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-4 drop-shadow-lg">
            📬 Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question, collaboration idea, or just want to say hello?  
            Drop a message and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/70 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-cyan-500/5 opacity-50 rounded-3xl"></div>
          
          <form
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex items-center border-2 border-gray-700/50 rounded-xl px-4 py-3 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:border-yellow-400/50 group-focus-within:border-cyan-400/50">
                <FaUser className="text-gray-400 mr-3 group-hover:text-yellow-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                  disabled={isSubmitting}
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex items-center border-2 border-gray-700/50 rounded-xl px-4 py-3 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:border-yellow-400/50 group-focus-within:border-cyan-400/50">
                <FaEnvelope className="text-gray-400 mr-3 group-hover:text-yellow-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                  disabled={isSubmitting}
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex items-start border-2 border-gray-700/50 rounded-xl px-4 py-3 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:border-yellow-400/50 group-focus-within:border-cyan-400/50">
                <FaCommentDots className="text-gray-400 mr-3 mt-2 group-hover:text-yellow-400 transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none text-lg"
                  disabled={isSubmitting}
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-yellow-400 to-cyan-400 text-black hover:from-yellow-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-black" />
                      Send Message 
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 text-green-300">
                  <FaCheckCircle className="text-xl" />
                  <p className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-red-900/30 border border-red-700/50 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 text-red-300">
                  <FaExclamationTriangle className="text-xl" />
                  <p className="font-medium">Something went wrong. Please try again or contact me directly.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Prefer direct contact?</p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-colors text-cyan-300 hover:text-cyan-200"
          >
            <FaEnvelope />
            tarunworkonly@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}