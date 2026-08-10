import { SectionGlow } from "@/app/components/shared/SectionGlow";
import { useInView } from "@/app/hooks/useInView";
import { stats } from "@/data";

import { StatCounter } from "./StatCounter";

export function StatsSection() {
  const { ref, inView } = useInView<HTMLElement>(0.3);

  return (
    <section className="py-16 px-6 relative overflow-hidden" ref={ref}>
      <SectionGlow variant="stats" />
      <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
        {stats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} trigger={inView} />
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
