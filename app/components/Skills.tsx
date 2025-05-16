import { Skill } from "../types/types";

const skillsData: Skill[] = [
  { id: 1, name: "JavaScript", level: 95 },
  { id: 2, name: "TypeScript", level: 90 },
  { id: 3, name: "React.js", level: 95 },
  { id: 4, name: "Next.js", level: 85 },
  { id: 5, name: "HTLM / CSS", level: 80 },
  {id: 6, name: "Python", level: 60},
  { id: 7, name: "Java", level: 60 },
  {id: 8, name: "Database Managnment", level: 70 },
  {id: 9, name: "Git / GitHub", level: 80 },
  { id: 10, name: "Tailwind CSS", level: 80 },
  {id: 11, name: "Flutter", level: 70 },
  {id: 12, name: "Dart", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">My <span className="text-cyan-400">Skills</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill) => (
              <div key={skill.id} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;