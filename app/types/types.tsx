export type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
  Gpa: string;
};

export type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export type Skill = {
  id: number;
  name: string;
  level: number;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
};