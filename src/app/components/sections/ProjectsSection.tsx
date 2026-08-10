import { useState } from "react";

import { Reveal } from "@/app/components/shared/Reveal";
import { SectionGlow } from "@/app/components/shared/SectionGlow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { cn } from "@/app/lib/cn";
import { projects, site } from "@/data";

import { ProjectCard } from "./ProjectCard";

function getCategories() {
  const set = new Set(projects.map((p) => p.category));
  return [site.projects.filterAll, ...Array.from(set)];
}

export function ProjectsSection() {
  const categories = getCategories();
  const [active, setActive] = useState(site.projects.filterAll);

  const filtered =
    active === site.projects.filterAll ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <SectionGlow variant="projects" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <SectionHeading
            label="Projects"
            title={site.projects.title}
            subtitle={site.projects.subtitle}
            align="center"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                active === category
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
