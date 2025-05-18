import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : null;
};

const FloatingParticles = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/40"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [
              `${Math.random() * 100}%`, 
              `${Math.random() * 100}%`
            ],
            x: [
              `${Math.random() * 100}%`, 
              `${Math.random() * 100}%`
            ]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [isLoaded]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, delay: 0.3 } 
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900" />
      
      {/* Animated grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
      />
      
      {/* Floating particles - Client Only */}
      <div className="absolute inset-0 overflow-hidden">
        <ClientOnly>
          <FloatingParticles />
        </ClientOnly>
      </div>
      
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [-60, 20],
          y: [-60, 20],
          transition: { duration: 15, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [20, -60],
          y: [20, -60],
          transition: { duration: 20, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div 
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="md:w-1/2 space-y-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aaryan Sharma</span>
            </h1>
            
            <motion.div className="relative" variants={slideIn}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 h-8">
                {displayText}<span className="animate-pulse">|</span>
              </h2>
              <div className="absolute -bottom-1 left-0 w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
            </motion.div>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-300 max-w-lg leading-relaxed"
            >
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, human-centered products 
              that solve real-world problems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-4 pb-4"
            >
              {["React", "Next.js", "TypeScript", "Tailwind"].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-3 py-1 bg-gray-800/70 backdrop-blur-sm rounded-full 
                           border border-gray-700 text-sm text-cyan-300 flex items-center gap-1"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animation: "fadeIn 0.5s ease-in-out forwards" 
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  {tech}
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative overflow-hidden group px-6 py-3 rounded-lg font-medium"
                aria-label="Contact me button"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-blue-900/30"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 bg-white rounded-lg opacity-0 group-hover:opacity-10"></span>
                <span className="relative z-10 text-white">Contact Me</span>
              </button>
              
              <button
                onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
                className="relative overflow-hidden group px-6 py-3 rounded-lg font-medium border border-cyan-400/30 bg-gray-900/80 backdrop-blur-sm"
                aria-label="View resume button"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-cyan-400/10 rounded-lg group-hover:translate-x-0"></span>
                <span className="relative z-10 text-cyan-400">View Resume</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-30 blur-sm animate-spin-slow" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden backdrop-blur-sm bg-gradient-to-b from-blue-900/20 to-gray-900/20 p-1 shadow-2xl">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src="/Me.jpg" 
                    alt="Aaryan Sharma"
                    width={800}
                    height={1035}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>
              </div>
              
              <div className="absolute top-5 -right-3 w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <div className="absolute -bottom-2 right-12 w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-100" />
              <div className="absolute bottom-10 -left-3 w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-200" />
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-gray-900/80 px-4 py-1.5 rounded-full border border-cyan-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-300">Available for hire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;