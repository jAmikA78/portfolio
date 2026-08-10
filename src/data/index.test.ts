import { describe, expect, it } from "vitest";

import {
  achievements,
  contact,
  education,
  experience,
  profile,
  projects,
  site,
  skills,
  stats,
  testimonials,
  volunteering,
} from "./index";

describe("data integrity", () => {
  it("profile exposes all display fields", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.title).toBeTruthy();
    expect(profile.tagline).toBeTruthy();
    expect(profile.bio).toBeTruthy();
    expect(profile.image).toMatch(/^(https?:\/\/|\/images\/)/);
  });

  it("stats mirror profile headline numbers", () => {
    const values = stats.map((s) => s.value);
    expect(values).toContain(profile.yearsExp);
    expect(values).toContain(profile.projectsCount);
    expect(values).toContain(profile.studentsCount);
    expect(values).toContain(profile.problemsCount);
  });

  it("timelines have unique ids and required fields", () => {
    for (const timeline of [education, experience, volunteering]) {
      expect(timeline.length).toBeGreaterThan(0);
      const ids = timeline.map((t) => t.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const item of timeline) {
        expect(item.role).toBeTruthy();
        expect(item.org).toBeTruthy();
        expect(item.period).toBeTruthy();
        expect(item.color).toMatch(/^#/);
      }
    }
  });

  it("skills categories are non-empty and internally consistent", () => {
    expect(skills.length).toBeGreaterThan(0);
    for (const category of skills) {
      expect(category.title).toBeTruthy();
      expect(category.color).toMatch(/^#/);
      expect(category.skills.length).toBeGreaterThan(0);
      for (const skill of category.skills) {
        expect(skill.name).toBeTruthy();
        expect(skill.proficiency).toBeGreaterThan(0);
        expect(skill.proficiency).toBeLessThanOrEqual(1);
      }
    }
  });

  it("projects have unique ids, valid categories, and tech stacks", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.tech.length).toBeGreaterThan(0);
    }
  });

  it("testimonials have ids, ratings, and colors", () => {
    expect(testimonials.length).toBeGreaterThan(0);
    expect(testimonials.every((t) => t.id > 0 && t.name)).toBe(true);
    expect(testimonials.every((t) => t.rating > 0 && t.color.startsWith("#"))).toBe(true);
  });

  it("achievements contain titles and descriptions", () => {
    expect(achievements.length).toBeGreaterThan(0);
    for (const achievement of achievements) {
      expect(achievement.title).toBeTruthy();
      expect(achievement.description).toBeTruthy();
    }
  });

  it("contact exposes email and social links", () => {
    expect(contact.email).toMatch(/@/);
    expect(contact.phone).toBeTruthy();
    expect(contact.socials.length).toBeGreaterThan(0);
    expect(contact.socials.every((s) => s.label && s.url && s.icon)).toBe(true);
  });

  it("nav links target known section anchors", () => {
    const anchors = new Set([
      "#hero",
      "#about",
      "#skills",
      "#projects",
      "#testimonials",
      "#contact",
    ]);
    for (const link of site.navLinks) {
      expect(anchors.has(link.href)).toBe(true);
    }
  });
});
