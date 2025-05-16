const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Contact <span className="text-cyan-400">Me</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 shadow-xl p-8 max-w-md text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">Let&apos;s Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out if you&apos;re looking for a developer, have a question,
              or just want to connect. I&apos;m always open to new opportunities and discussions!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:aaryansharmawork@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  aaryansharmawork@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919137933718" className="text-gray-300 hover:text-white transition-colors">
                  +91 9137933718
                </a>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Mumbai</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/AaryanNReal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aaryan-sharma-45b0b42a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;