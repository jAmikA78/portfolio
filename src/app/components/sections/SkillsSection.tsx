import { GlassCard } from "@/app/components/shared/GlassCard";
import { IconByName } from "@/app/components/shared/IconByName";
import { Reveal } from "@/app/components/shared/Reveal";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { site, skills } from "@/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading
            label="Skills"
            title={site.skills.title}
            subtitle={site.skills.subtitle}
            align="center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.06}>
              <GlassCard className="p-6 h-full hover:border-blue-500/30 transition-colors duration-300">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${category.color}22`, color: category.color }}
                >
                  <IconByName name={category.icon} size={22} />
                </div>
                <h3 className="font-bold text-white text-base font-display mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-lg border border-white/8 bg-white/4 px-2.5 py-1.5 text-xs text-white/70"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
