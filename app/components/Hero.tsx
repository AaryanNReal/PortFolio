import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/40 to-gray-900"></div>
      
      {/* Accent shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Decorative element */}
            <div className="w-20 h-1 mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aaryan Sharma</span>
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                Full Stack Developer
              </h2>
              {/* Underline accent */}
              <div className="absolute -bottom-1 left-0 w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>
            
            <p className="text-lg mb-8 text-gray-300 max-w-lg leading-relaxed">
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, human-centered products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg shadow-blue-900/30"
              >
                Contact Me
              </button>
              
              <button
                onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg"
              >
                View Resume
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-30 blur-sm animate-spin-slow"></div>
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden backdrop-blur-sm bg-gradient-to-b from-blue-900/20 to-gray-900/20 p-1 shadow-2xl">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src="/images/me.jpg" // Replace with your image path
                    alt="Aaryan Sharma"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-5 -right-3 w-3 h-3 rounded-full bg-cyan-400"></div>
              <div className="absolute -bottom-2 right-12 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="absolute bottom-10 -left-3 w-2 h-2 rounded-full bg-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animation for the ring */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;