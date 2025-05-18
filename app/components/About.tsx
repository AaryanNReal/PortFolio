"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  // Client-side rendering state
  const [isClient, setIsClient] = useState(false);
  
  // Use intersection observer for subtle entry animation
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Set client-side state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 opacity-95"></div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-10"></div>
      
      {/* Subtle accent elements */}
      <div className="absolute left-0 top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: isClient ? 0 : 1, y: isClient ? 10 : 0 }}
          animate={isClient && inView ? { opacity: 1, y: 0 } : { opacity: isClient ? 0 : 1, y: isClient ? 10 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-3">About <span className="text-cyan-400">Me</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <motion.div 
            initial={{ opacity: isClient ? 0 : 1 }}
            animate={isClient && inView ? { opacity: 1 } : { opacity: isClient ? 0 : 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/3 backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="inline-block w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 mr-3 rounded-full"></span>
              Professional Summary
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-200 leading-relaxed">
                I&apos;m Aaryan Sharma, a meticulous Full Stack Developer with expertise in 
                creating scalable and responsive web applications. With a strong 
                foundation in both front-end and back-end technologies, I deliver 
                comprehensive solutions across the development lifecycle.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                My technical repertoire includes JavaScript, React, Next.js, and various 
                modern frameworks. I focus on writing clean, maintainable code that 
                translates into exceptional user experiences and business outcomes.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                I excel in collaborative environments where I can apply my problem-solving 
                abilities and attention to detail. Continuously expanding my knowledge base,
                I stay current with industry best practices and emerging technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="col-span-1 sm:col-span-2">
                <div className="h-px w-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-transparent mb-8"></div>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border-l-2 border-cyan-400 hover:bg-gray-800/40 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col">
                  <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-2">Name</span>
                  <p className="font-medium text-white">Aaryan Sharma</p>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border-l-2 border-blue-500 hover:bg-gray-800/40 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col">
                  <span className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2">Email</span>
                  <a href="mailto:aaryansharmawork@gmail.com" className="font-medium text-white hover:text-blue-300 transition-colors break-all">
                    aaryansharmawork@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border-l-2 border-purple-500 hover:bg-gray-800/40 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col">
                  <span className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-2">Phone</span>
                  <a href="tel:+919137933718" className="font-medium text-white hover:text-purple-300 transition-colors">
                    +91 9137933718
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-5 rounded-lg border-l-2 border-green-500 hover:bg-gray-800/40 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col">
                  <span className="text-green-400 text-sm font-medium uppercase tracking-wider mb-2">Location</span>
                  <p className="font-medium text-white">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            {/* Professional highlight */}
            <div className="mt-10 p-4 border border-cyan-900/30 rounded-lg bg-cyan-900/10">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-cyan-400/20 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cyan-300 mb-1">Current Focus</h4>
                  <p className="text-gray-300 text-sm">
                    I'm currently focused on building accessible web applications with modern architecture patterns and performance optimization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;