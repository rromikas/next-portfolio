export interface Project {
  image: string;
  color: string;
  title: string;
  description: string;
  technologies: string[];
  links: { demo: string; code: string; buy?: string };
  apis?: string[];
}

export interface Skill {
  image: string;
  title: string;
}
