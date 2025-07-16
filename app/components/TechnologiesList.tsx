"use client";

import { CSSProperties } from "react";
import {
  getTextColor,
  useBackgroundAwareColors,
  getBlueLabelColor,
  getBlueBorderColor,
} from "../utils/colorUtils";

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
  useBackgroundAwareColors();

  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className={className} style={style}>
      {showLabel && (
        <p
          className="text-sm font-medium mb-2"
          style={{ color: getBlueLabelColor() }}
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
              color: getTextColor(brightness, 0.8),
              border: `1px solid ${getBlueBorderColor()}`,
            }}
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
