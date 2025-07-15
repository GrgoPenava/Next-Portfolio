import { CSSProperties } from "react";

interface TechnologiesListProps {
  technologies: string[];
  brightness: number;
  showLabel?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function TechnologiesList({
  technologies,
  brightness,
  showLabel = false,
  className = "",
  style,
}: TechnologiesListProps) {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className={className} style={style}>
      {showLabel && (
        <p
          className="text-sm font-medium mb-2"
          style={{ color: `rgba(59, 130, 246, ${0.7 + brightness * 0.2})` }}
        >
          Technologies used:
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium rounded-md bg-opacity-20"
            style={{
              backgroundColor: `rgba(59, 130, 246, 0.1)`,
              color: `rgba(${60 - brightness * 20}, ${60 - brightness * 20}, ${
                60 - brightness * 20
              }, 0.8)`,
              border: `1px solid rgba(59, 130, 246, ${0.3 + brightness * 0.2})`,
            }}
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
