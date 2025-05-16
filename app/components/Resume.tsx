

const Resume = () => (
  <section id="resume" className="py-20 relative overflow-hidden">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
    
    {/* Subtle pattern */}
    <div className="absolute inset-0 bg-grid opacity-20"></div>
    
    {/* Accent lines */}
    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
    <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">My <span className="text-cyan-400">Resume</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>
      
      <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 shadow-xl p-6">
        <div className="flex justify-center">
          <img
            src="/resume.jpg" 
            alt="Resume"
            width={800}
            height={1035}
            className="rounded-lg shadow-xl border border-white/10"
          />
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Download Resume
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;