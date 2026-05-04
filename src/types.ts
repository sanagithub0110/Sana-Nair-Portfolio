export interface DevInfo {
  name: string;
  role: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  phone: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
