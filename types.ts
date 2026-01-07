export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export type ViewState = 'home' | 'about' | 'services' | 'projects' | 'contact';