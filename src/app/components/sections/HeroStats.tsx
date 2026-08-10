import { motion } from "motion/react";

import { profile } from "@/data";

const STATS = [
  { value: `${profile.yearsExp}+`, label: "Years Experience" },
  { value: `${profile.projectsCount}+`, label: "Projects" },
  { value: `${profile.studentsCount}+`, label: "Students Mentored" },
];

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
    >
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
