import { ExternalLink, GitBranch } from "lucide-react";

import { GlassCard } from "@/app/components/shared/GlassCard";
import { ProjectImage } from "@/app/components/shared/ProjectImage";
import { cn } from "@/app/lib/cn";
import type { Project } from "@/app/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="flex flex-col overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <ProjectImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur border border-white/10 text-blue-300 text-xs font-medium">
          {project.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-white text-base font-display mb-2">{project.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/6 border border-white/10 text-white/50 text-[11px]"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-white/35 text-[11px]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className={cn("flex gap-2", !project.sourceLink && !project.liveLink && "hidden")}>
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/6 border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
            >
              <GitBranch size={13} /> Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-500/15 border border-blue-500/25 text-blue-300 hover:bg-blue-500/25 transition-all"
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
