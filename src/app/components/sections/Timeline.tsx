import { GlassCard } from "@/app/components/shared/GlassCard";
import { IconByName } from "@/app/components/shared/IconByName";
import { Reveal } from "@/app/components/shared/Reveal";
import type { TimelineItem } from "@/app/lib/types";

interface TimelineProps {
  title: string;
  icon: string;
  items: TimelineItem[];
  accentColor: string;
}

export function Timeline({ title, icon, items, accentColor }: TimelineProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
          style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
        >
          <IconByName name={icon} size={18} />
        </div>
        <h3 className="text-xl font-bold text-white font-display">{title}</h3>
      </div>

      <div className="relative pl-6">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: `linear-gradient(to bottom, ${accentColor}80, ${accentColor}20)` }}
        />

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <Reveal key={item.id} x={-20} y={0} delay={i * 0.08}>
              <div className="relative">
                <span
                  className="absolute -left-6 top-6 w-[15px] h-[15px] rounded-full ring-4"
                  style={{ backgroundColor: accentColor, boxShadow: `0 0 0 4px ${accentColor}20` }}
                />
                <GlassCard className="p-5 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.role}</h4>
                      <div className="text-blue-400 text-sm font-medium">{item.org}</div>
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/50 text-xs font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
