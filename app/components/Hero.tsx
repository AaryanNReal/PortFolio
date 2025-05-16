
import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/40 to-gray-900" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-grid"
      />
      
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [-40, 0],
          y: [-40, 0],
          transition: { duration: 15, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40],
          y: [0, -40],
          transition: { duration: 20, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:w-1/2 space-y-8"
          >
            <div className="w-20 h-1 mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aaryan Sharma</span>
            </h1>
            
            <motion.div className="relative" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
                Full Stack Developer
              </h2>
              <div className="absolute -bottom-1 left-0 w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
            </motion.div>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-300 max-w-lg leading-relaxed"
            >
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, human-centered products.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-900/30"
                aria-label="Contact me button"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg"
                aria-label="View resume button"
              >
                View Resume
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
                    src="/me.jpg"
                    alt="Portrait of Aaryan Sharma"
                    
                    className="object-cover"
                    
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>
              </div>
              
              <div className="absolute top-5 -right-3 w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <div className="absolute -bottom-2 right-12 w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-100" />
              <div className="absolute bottom-10 -left-3 w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-200" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;