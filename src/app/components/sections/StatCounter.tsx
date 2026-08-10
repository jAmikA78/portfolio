import { useEffect } from "react";

import { useCounter } from "@/app/hooks/useCounter";
import { STAT_DURATION } from "@/app/lib/constants";
import type { Stat } from "@/app/lib/types";

interface StatCounterProps {
  stat: Stat;
  trigger: boolean;
}

export function StatCounter({ stat, trigger }: StatCounterProps) {
  const { count, start } = useCounter(stat.value, STAT_DURATION);

  useEffect(() => {
    if (trigger) start();
  }, [trigger, start]);

  return (
    <div className="text-center py-8">
      <div className="text-5xl font-extrabold mb-2 text-gradient">
        {count}
        {stat.suffix}
      </div>
      <div className="text-white/50 text-sm font-medium">{stat.label}</div>
    </div>
  );
}
