import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, subtitle, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleParts = title.split("\n");

  return (
    <Reveal className={isCenter ? "text-center" : ""}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
        {titleParts.map((part, i) => (
          <span key={i}>
            {part}
            {i < titleParts.length - 1 && <br className="hidden md:block" />}
          </span>
        ))}
      </h2>
      {subtitle && <p className="text-white/50 mt-4 max-w-md mx-auto text-lg">{subtitle}</p>}
    </Reveal>
  );
}
