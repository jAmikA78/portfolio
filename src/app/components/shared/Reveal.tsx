import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useInView } from "@/app/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, x = 0, y = 30, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
