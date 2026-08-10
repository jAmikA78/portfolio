export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  image: string;
  yearsExp: number;
  studentsCount: number;
  projectsCount: number;
  problemsCount: number;
}

export type Stat = { label: string; value: number; suffix: string };

export interface TimelineItem {
  id: number;
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  id: number;
  icon: string;
  title: string;
  color: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  mainTech: string;
  tech: string[];
  category: string;
  icon: string;
  sourceLink: string;
  liveLink: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export type Social = { label: string; url: string; icon: string };

export interface Contact {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  socials: Social[];
}

export type NavLink = { label: string; href: string };

export type Service = { icon: string; label: string; desc: string };

export type AboutFeature = { icon: string; label: string; desc: string };
