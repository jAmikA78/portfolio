interface SectionGlowProps {
  variant: "hero" | "stats" | "projects" | "contact";
}

const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
} as const;

export function SectionGlow({ variant }: SectionGlowProps) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {variant === "hero" && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={GRID_STYLE} />
        </>
      )}
      {variant === "stats" && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10" />
        </>
      )}
      {variant === "projects" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      )}
      {variant === "contact" && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/15 blur-[100px]" />
      )}
    </div>
  );
}
