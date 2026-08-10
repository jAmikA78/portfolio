import { Star } from "lucide-react";
import { motion } from "motion/react";

import { GlassCard } from "@/app/components/shared/GlassCard";
import { cn } from "@/app/lib/cn";
import type { Testimonial } from "@/app/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  active: boolean;
  onSelect: () => void;
}

export function TestimonialCard({ testimonial, index, active, onSelect }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <GlassCard
        className={cn(
          "p-5 cursor-pointer hover:border-white/20 transition-all duration-300",
          active && "border-blue-500/30"
        )}
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, j) => (
            <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p
          dir="auto"
          className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-3 whitespace-pre-line"
        >
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs"
            style={{ backgroundColor: testimonial.color }}
          >
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-medium text-white text-xs" dir="auto">
              {testimonial.name}
            </div>
            <div className="text-white/35 text-xs" dir="auto">
              {testimonial.role}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
