import { GlassCard } from "@/app/components/shared/GlassCard";
import { IconByName } from "@/app/components/shared/IconByName";
import { Reveal } from "@/app/components/shared/Reveal";
import { site } from "@/data";

export function HeroServices() {
  return (
    <div className="mt-16">
      <Reveal delay={0.2}>
        <p className="text-white/40 text-xs font-semibold tracking-widest uppercase text-center mb-4">
          My Services
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-4">
        {site.hero.services.map((service, i) => (
          <Reveal key={service.label} delay={0.1 * i}>
            <GlassCard className="p-5 h-full hover:border-blue-500/30 transition-colors duration-300">
              <div className="text-blue-400 mb-3">
                <IconByName name={service.icon} size={22} />
              </div>
              <div className="font-semibold text-white text-sm mb-1">{service.label}</div>
              <div className="text-white/45 text-xs leading-relaxed">{service.desc}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
