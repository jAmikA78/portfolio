import { GlassCard } from "@/app/components/shared/GlassCard";
import { IconByName } from "@/app/components/shared/IconByName";
import { Reveal } from "@/app/components/shared/Reveal";
import { achievements, site } from "@/data";

export function AchievementsStrip() {
  return (
    <div className="mt-14">
      <Reveal>
        <h3 className="text-center text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
          {site.achievements.title}
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {achievements.map((achievement, i) => (
          <Reveal key={achievement.title} delay={i * 0.08}>
            <GlassCard className="p-5 text-center hover:border-blue-500/30 transition-colors duration-300">
              <div className="text-yellow-400 mb-2 flex justify-center">
                <IconByName name={achievement.icon} size={20} />
              </div>
              <div className="font-semibold text-white text-sm mb-1">{achievement.title}</div>
              <div className="text-white/40 text-xs">{achievement.description}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
