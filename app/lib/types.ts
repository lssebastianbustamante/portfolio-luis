// types/experience.ts
export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

// types/project.ts
export interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
}
