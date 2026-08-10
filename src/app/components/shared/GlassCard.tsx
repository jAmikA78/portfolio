import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/app/lib/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("rounded-2xl border border-white/8 bg-white/4 backdrop-blur-md", className)}
      {...props}
    >
      {children}
    </div>
  );
}
