import { ExperienceItem } from "../types/types";

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "WeCofy",
    duration: "May 2025 - Present",
    description: [
      "Developed and maintained user-friendly web applications using React.js and Next.js.",
      "Collaborated with designers to implement responsive UI/UX designs.",
      "Optimized application performance and ensured cross-browser compatibility.",
      "Participated in code reviews and contributed to team knowledge sharing."
    ]
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Work <span className="text-cyan-400">Experience</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experienceData.map((item) => (
            <div 
              key={item.id} 
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">{item.role}</h3>
                <span className="text-white font-medium">{item.company}</span>
              </div>
              <span className="text-gray-300 block mb-4 bg-gray-800/50 px-3 py-1 rounded-full inline-block">
                {item.duration}
              </span>
              <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-cyan-400">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="relative left-1">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;