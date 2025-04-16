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

export interface Recommendation {
  id: string;
  organization: string;
  text: string;
  author: string;
  relationship?: string;
  date: Date;
}

export interface PropsExpirienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  details?: {
      fullDescription: string;
      responsibilities: string[];
      highlightedProject?: {
          name: string;
          details: string[];
          repository?: string;
      };
      stack: string;
      recomendations?: Recommendation[]
  };
}