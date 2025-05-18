
import { useState } from "react";
import { Skill } from "../types/types";

const skillsData = [
  { id: 1, name: "JavaScript", level: 95 },
  { id: 2, name: "TypeScript", level: 90 },
  { id: 3, name: "React.js", level: 95 },
  { id: 4, name: "Next.js", level: 85 },
  { id: 5, name: "HTLM / CSS", level: 80 },
  { id: 6, name: "Python", level: 60 },
  { id: 7, name: "Java", level: 60 },
  { id: 8, name: "Database Management", level: 70 },
  { id: 9, name: "Git / GitHub", level: 80 },
  { id: 10, name: "Tailwind CSS", level: 80 },
  { id: 11, name: "Flutter", level: 70 },
  { id: 12, name: "Dart", level: 70 },
];

// Group skills by category
const frontendSkills = skillsData.filter(skill => 
  ["JavaScript", "TypeScript", "React.js", "Next.js", "HTLM / CSS", "Tailwind CSS"].includes(skill.name)
);
const backendSkills = skillsData.filter(skill => 
  ["Python", "Java", "Database Management"].includes(skill.name)
);
const toolsSkills = skillsData.filter(skill => 
  ["Git / GitHub", "Flutter", "Dart"].includes(skill.name)
);

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-sm md:text-base transition-all duration-300 group-hover:text-cyan-400">
          {skill.name}
        </span>
        <span className={`text-xs font-semibold ${isHovered ? 'text-cyan-400' : 'text-gray-400'} transition-colors duration-300`}>
          {skill.level}%
        </span>
      </div>
      <div className="relative w-full h-2 bg-gray-800/40 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: isHovered ? `${skill.level}%` : '0%',
            opacity: isHovered ? 1 : 0.8
          }}
        />
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/50 to-cyan-400/50 rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl h-full transform transition-all duration-300 hover:translate-y-1 hover:shadow-cyan-500/10">
    <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
      {title}
    </h3>
    <div className="space-y-1">
      {skills.map(skill => (
        <SkillBar key={skill.id} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-4 w-4 rounded-full bg-cyan-500/20 top-1/4 left-1/3 animate-pulse"></div>
        <div className="absolute h-6 w-6 rounded-full bg-blue-500/10 top-2/3 left-1/4 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-cyan-400/20 top-1/2 right-1/3 animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider text-sm">PROFICIENCY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span></h2>
          <p className="text-gray-400 text-center max-w-2xl">Specialized expertise and technical proficiencies I've developed throughout my career</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;