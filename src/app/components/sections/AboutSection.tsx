import { GlassCard } from "@/app/components/shared/GlassCard";
import { IconByName } from "@/app/components/shared/IconByName";
import { Reveal } from "@/app/components/shared/Reveal";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { education, experience, profile, site, volunteering } from "@/data";

import { Timeline } from "./Timeline";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="About Me" title={site.about.title} />

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <Reveal x={-30} y={0}>
            <div className="whitespace-pre-line text-white/60 text-lg leading-relaxed">
              {profile.bio}
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {site.about.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/6 border border-white/10 text-white/70 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal x={30} y={0} delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {site.about.features.map((feature) => (
                <GlassCard key={feature.label} className="p-5">
                  <div className="text-blue-400 mb-3">
                    <IconByName name={feature.icon} size={22} />
                  </div>
                  <div className="font-semibold text-white text-sm mb-1">{feature.label}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{feature.desc}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          <Timeline
            title="Education"
            icon="GraduationCap"
            items={education}
            accentColor="#43A047"
          />
          <Timeline title="Experience" icon="Briefcase" items={experience} accentColor="#2563EB" />
          <Timeline title="Volunteering" icon="Heart" items={volunteering} accentColor="#FACC15" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
