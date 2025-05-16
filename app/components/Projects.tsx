import { Project } from "../types/types";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, PackageOpen } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Kissan Seva",
    description: "A website with Combination of E-commerce ,  Social Media , AI Harvesting.",
    technologies: ["Next Js", "Typescript", "Firebase", "Stripe API"],
    isGroup: true,
    subProjects: [
      {
        id: 1.1,
        title: "E-commerce Storefront",
        description: "Online shopping platform with product listings and cart functionality",
        technologies: ["Next Js", "Typescript", "Tailwind CSS"],
        
      },
      {
        id: 1.2,
        title: "Social Media ",
        description: "User profiles, posts, and comments",
        technologies: ["Next.js", "Firebase", "Tailwind CSS"],
        liveLink: "https://not-reddit--sepia.vercel.app/",
       
      },
      {
        id: 1.3,
        title: "Harvesting AI",
        description: "AI-powered tool for crop management and harvesting",
        technologies: ["Next.js", "Firebase", "Tailwind CSS", "Llama 3.2 API", "Python"],
     
      }
    ],
    githubLink: "https://github.com/AaryanNReal/kisaan",
    
  },
  {
    id: 2,
    title: "Sehat A Fitness App",
    description: "A fitness application with workout tracking, nutrition plans, and progress monitoring.",
    technologies: ["Flutter", "Firebase", "Dart"],
    
    githubLink: "https://github.com/AaryanNReal/Sehat",

  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">My <span className="text-cyan-400">Projects</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 shadow-xl hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
            >
              {project.isGroup ? (
                <>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-800/50 text-cyan-400 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.subProjects.map((subProject) => (
                        <div key={subProject.id} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                          <h4 className="font-medium text-white mb-2">{subProject.title}</h4>
                          <p className="text-gray-300 text-sm mb-3">{subProject.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {subProject.technologies.map((tech) => (
                              <span key={tech} className="bg-gray-900/50 text-blue-400 text-xs px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex space-x-3 mt-2">
                           
                            {subProject.liveLink && (
                              <a
                                href={subProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-xs"
                              >
                                <ExternalLink className="h-8 w-8 m-1 " /> Demo
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 mt-6">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      )}
                      
                    </div>
                  </div>
                </>
              ) : (
                <>
                
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-800/50 text-cyan-400 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      )}
                      
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;