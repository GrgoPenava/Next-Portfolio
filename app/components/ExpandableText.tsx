"use client";

import TechnologiesList from "./TechnologiesList";

interface ExpandableTextProps {
  text: string;
  itemId: string;
  maxLength?: number;
  brightness: number;
  expandedItems: Record<string, boolean>;
  onToggle: (itemId: string) => void;
  technologies?: string[];
  bulletPoints?: string[];
}

export default function ExpandableText({
  text,
  itemId,
  maxLength = 150,
  brightness,
  expandedItems,
  onToggle,
  technologies,
  bulletPoints,
}: ExpandableTextProps) {
  const isExpanded = expandedItems[itemId];

  const hasAdditionalContent =
    (bulletPoints && bulletPoints.length > 0) ||
    (technologies && technologies.length > 0);

  return (
    <div>
      <div
        className="transition-colors duration-500"
        style={{
          color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
            80 - brightness * 40
          }, 0.9)`,
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
                borderColor: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.3)`,
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
            color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
