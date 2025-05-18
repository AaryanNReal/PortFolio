import { ExperienceItem } from "../types/types";
import { motion } from "framer-motion";

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
  // You can add more experience items here
];

const Experience = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800 lg:pl-12"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800 shadow" />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                    <h4 className="text-lg text-indigo-600 dark:text-indigo-400">{item.company}</h4>
                  </div>
                  <span className="mt-2 md:mt-0 text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 py-1 px-3 rounded-full">
                    {item.duration}
                  </span>
                </div>
                
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;