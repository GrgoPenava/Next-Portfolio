"use client";

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
        <p className="text-sm font-medium mb-2 text-purple-300">
          Technologies used:
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium rounded-md bg-purple-500/10 text-gray-300 border border-purple-400/30"
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
