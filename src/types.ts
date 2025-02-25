export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'design' | 'tools';
}