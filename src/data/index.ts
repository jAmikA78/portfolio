import type {
  Achievement,
  Contact,
  Profile,
  Project,
  SkillCategory,
  Stat,
  Testimonial,
  TimelineItem,
} from "@/app/lib/types";

import achievementsRaw from "./achievements.json";
import contactRaw from "./contact.json";
import educationRaw from "./education.json";
import experienceRaw from "./experience.json";
import profileRaw from "./profile.json";
import projectsRaw from "./projects.json";
import siteRaw from "./site.json";
import skillsRaw from "./skills.json";
import statsRaw from "./stats.json";
import testimonialsRaw from "./testimonials.json";
import volunteeringRaw from "./volunteering.json";

export const profile = profileRaw as Profile;
export const stats = statsRaw as Stat[];
export const education = educationRaw as TimelineItem[];
export const experience = experienceRaw as TimelineItem[];
export const volunteering = volunteeringRaw as TimelineItem[];
export const skills = skillsRaw as SkillCategory[];
export const projects = projectsRaw as Project[];
export const testimonials = testimonialsRaw as Testimonial[];
export const achievements = achievementsRaw as Achievement[];
export const contact = contactRaw as Contact;
export const site = siteRaw;
