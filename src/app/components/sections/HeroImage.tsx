import { motion } from "motion/react";

import { profile } from "@/data";

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
    >
      <div
        className="absolute inset-0 rounded-full bg-blue-600/30 blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative w-full h-full rounded-full ring-4 ring-blue-500/30 ring-offset-4 ring-offset-background overflow-hidden bg-blue-900/40">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
      </div>
    </motion.div>
  );
}
