import { useEffect, useState } from "react";

import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { cn } from "@/app/lib/cn";
import { site, testimonials } from "@/data";

import { AchievementsStrip } from "./AchievementsStrip";
import { FeaturedTestimonial } from "./FeaturedTestimonial";
import { TestimonialCard } from "./TestimonialCard";

const ROTATION_MS = 5000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setActive((current) => (current + 1) % total), ROTATION_MS);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading label="Testimonials" title={site.testimonials.title} align="center" />
        </div>

        <FeaturedTestimonial testimonial={testimonials[active]} />

        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              index={i}
              active={active === i}
              onSelect={() => setActive(i)}
            />
          ))}
        </div>

        <AchievementsStrip />
      </div>
    </section>
  );
}

export default TestimonialsSection;
