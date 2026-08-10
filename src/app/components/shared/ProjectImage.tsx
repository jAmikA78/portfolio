import { ImageOff } from "lucide-react";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export function ProjectImage({
  src,
  alt,
  fallback = "/images/default-image.png",
  className,
}: ProjectImageProps) {
  const [source, setSource] = useState(src);
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-white/5 ${className ?? ""}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    );
  }

  return (
    <img
      src={source}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => {
        if (source !== fallback) {
          setSource(fallback);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
