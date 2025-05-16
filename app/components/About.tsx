const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">About <span className="text-cyan-400">Me</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-2/3 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-white flex items-center">
              <span className="inline-block w-2 h-2 bg-cyan-400 mr-2 rounded-full"></span>
              Who am I?
            </h3>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              I&apos;m Aaryan Sharma, a passionate Full Stack Developer with a knack for
              creating dynamic and responsive web applications. I have a strong
              foundation in both front-end and back-end technologies, allowing me
              to build complete solutions from scratch. I thrive in collaborative
              environments and enjoy tackling complex challenges with innovative
              solutions.
            </p>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              I have experience with various programming languages and frameworks,
              including JavaScript, React, Next Js, and more. My goal is to
              leverage technology to create impactful user experiences and
              contribute to meaningful projects.
            </p>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              I specialize in building responsive and interactive web applications
              using modern technologies. I believe in continuous learning and
              always strive to improve my skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg border-l-2 border-cyan-400">
                <span className="text-cyan-400 text-sm font-medium">Name:</span>
                <p className="font-medium text-white">Aaryan</p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg border-l-2 border-blue-500">
                <span className="text-blue-400 text-sm font-medium">Email:</span>
                <a href="mailto:aaryansharmawork@gmail.com" className="font-medium text-white hover:text-blue-300 transition-colors break-all">
                  aaryansharmawork@gmail.com
                </a>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg border-l-2 border-purple-500">
                <span className="text-purple-400 text-sm font-medium">Phone:</span>
                <a href="tel:+1234567890" className="font-medium text-white hover:text-purple-300 transition-colors">
                  +91 9137933718
                </a>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg border-l-2 border-green-500">
                <span className="text-green-400 text-sm font-medium">From:</span>
                <p className="font-medium text-white">Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;