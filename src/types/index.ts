// Shared TypeScript interfaces for Arteria

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}
