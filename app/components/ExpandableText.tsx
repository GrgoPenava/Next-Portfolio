"use client";

import TechnologiesList from "./TechnologiesList";
import {
  getTextColor,
  getBorderColor,
  useBackgroundAwareColors,
  getBlueColor,
} from "../utils/colorUtils";

interface ExpandableTextProps {
  text: string;
  itemId: string;
  brightness: number;
  expandedItems: Record<string, boolean>;
  onToggle: (itemId: string) => void;
  technologies?: string[];
  bulletPoints?: string[];
}

export default function ExpandableText({
  text,
  itemId,
  brightness,
  expandedItems,
  onToggle,
  technologies,
  bulletPoints,
}: ExpandableTextProps) {
  useBackgroundAwareColors();

  const isExpanded = expandedItems[itemId];

  const hasAdditionalContent =
    (bulletPoints && bulletPoints.length > 0) ||
    (technologies && technologies.length > 0);

  return (
    <div>
      <div
        className="transition-colors duration-500"
        style={{
          color: getTextColor(brightness, 0.9),
        }}
      >
        <p className="leading-relaxed">{text}</p>

        {isExpanded && (
          <div className="space-y-3 mt-3">
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-2 ml-4">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-400 font-bold">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <TechnologiesList
              technologies={technologies || []}
              brightness={brightness}
              showLabel={true}
              className="mt-4 pt-3 border-t border-opacity-20"
              style={{
                borderColor: getBorderColor(),
              }}
            />
          </div>
        )}
      </div>

      {hasAdditionalContent && (
        <button
          onClick={() => onToggle(itemId)}
          className="mt-3 text-sm font-medium transition-colors duration-300 hover:opacity-80"
          style={{
            color: getBlueColor(),
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
