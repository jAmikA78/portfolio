import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { SectionGlow } from "@/app/components/shared/SectionGlow";
import { profile, site } from "@/data";

import { HeroActions } from "./HeroActions";
import { HeroImage } from "./HeroImage";
import { HeroServices } from "./HeroServices";
import { HeroStats } from "./HeroStats";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <SectionGlow variant="hero" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 lg:items-center lg:gap-12 text-center lg:text-left">
          <div className="flex justify-center mb-8 lg:mb-0 lg:order-2">
            <HeroImage />
          </div>

          <div className="lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {site.hero.badge}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-white/40 font-medium mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 font-display"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium mb-4 text-gradient"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-lg max-w-xl mx-auto lg:mx-0 mb-10"
            >
              {profile.tagline}
            </motion.p>

            <HeroStats />
            <HeroActions />
          </div>
        </div>

        <HeroServices />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs">
        <span>{site.hero.scrollHint}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}

export default HeroSection;
