import { Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { GlassCard } from "@/app/components/shared/GlassCard";
import type { Testimonial } from "@/app/lib/types";

interface FeaturedTestimonialProps {
  testimonial: Testimonial;
}

export function FeaturedTestimonial({ testimonial }: FeaturedTestimonialProps) {
  return (
    <div className="mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <GlassCard className="p-8 md:p-10 text-center max-w-3xl mx-auto border-blue-500/20">
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p
              dir="auto"
              className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-8 whitespace-pre-line"
            >
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: testimonial.color }}
              >
                {testimonial.avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm" dir="auto">
                  {testimonial.name}
                </div>
                <div className="text-white/40 text-xs" dir="auto">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
