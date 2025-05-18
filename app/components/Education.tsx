"use client";

import { EducationItem } from "../types/types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "BSc in Computer Science",
    Gpa: "9.1/10",
    institution: "Guru Nanak Khalsa College",
    year: "2022-2025",
    description: "Completed a Bachelor of Science in Computer Science with a focus on software development, algorithms, and data structures. Participated in various coding competitions and hackathons, enhancing problem-solving skills and teamwork, Full Stack Development, Data Science, and Machine Learning."
  }
];

const certificatesData = [
  {
    id: 1,
    name: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    date: "2023",
    description: "Comprehensive course on Python for data science and machine learning applications, including libraries like Pandas, NumPy, and Scikit-learn."
  },
  {
    id: 2,
    name: "Java and Frameworks",
    issuer: "Udemy",
    date: "2024",
    description: "In-depth course on Java programming and frameworks like Spring and Hibernate, covering object-oriented programming, web development, and database integration, Next JS, React JS"
  },
  {
    id: 3,
    name: "Content Writing",
    issuer: "Udemy",
    date: "2025",
    description: "Course on content writing and digital marketing strategies, covering SEO, social media marketing, and effective writing techniques for online platforms, including blogs and articles."
  }
];

const Education = () => {
  // Client-side rendering state
  const [isClient, setIsClient] = useState(false);
  
  // Set client-side state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950/40 to-gray-900 opacity-95"></div>
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/subtle-dots.svg')] opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-12 md:left-24 top-40 h-32 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30"></div>
      <div className="absolute right-12 md:right-24 bottom-40 h-32 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: isClient ? 0 : 1, y: isClient ? 10 : 0 }}
          animate={isClient ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-widest font-medium mb-2">Academic Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1"></div>
        </motion.div>
        
        {/* Education Timeline Section */}
        <div className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v10" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white">Academic Background</h3>
          </div>
          
          <div className="relative pl-6 border-l border-cyan-500/30">
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: isClient ? 0 : 1, x: isClient ? -10 : 0 }}
                animate={isClient ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-10"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[29px] w-6 h-6 rounded-full border-2 border-cyan-500 bg-gray-900"></div>
                
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 shadow-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-gray-300 bg-gray-800/70 px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                        GPA: {item.Gpa}
                      </span>
                      <span className="text-gray-300 bg-gray-800/70 px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {item.institution}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certificates Section */}
        <div>
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white">Professional Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: isClient ? 0 : 1, y: isClient ? 10 : 0 }}
                animate={isClient ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="relative backdrop-blur-sm bg-white/5 rounded-xl overflow-hidden group"
              >
                {/* Certificate colorful top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
                
                <div className="p-6 border border-t-0 border-white/10 h-full flex flex-col shadow-xl transition-all duration-300 group-hover:border-purple-400/30">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-purple-400 pr-4">{cert.name}</h4>
                    <span className="shrink-0 text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full text-xs font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h5 className="text-sm font-medium text-gray-200 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {cert.issuer}
                  </h5>
                  
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{cert.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700/30">
                    <button className="text-sm text-purple-300 font-medium hover:text-purple-200 transition-colors flex items-center">
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;