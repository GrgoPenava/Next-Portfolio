"use client";

import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  itemId: string;
  maxLength?: number;
  brightness: number;
  expandedItems: Record<string, boolean>;
  onToggle: (itemId: string) => void;
}

export default function ExpandableText({
  text,
  itemId,
  maxLength = 150,
  brightness,
  expandedItems,
  onToggle,
}: ExpandableTextProps) {
  const isExpanded = expandedItems[itemId];
  const shouldTruncate = text.length > maxLength;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div>
      <p
        className="leading-relaxed transition-colors duration-500"
        style={{
          color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
            80 - brightness * 40
          }, 0.9)`,
        }}
      >
        {isExpanded ? text : truncateText(text, maxLength)}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => onToggle(itemId)}
          className="mt-2 text-sm font-medium transition-colors duration-300 hover:opacity-80"
          style={{
            color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
          }}
        >
          {isExpanded ? "Čitaj manje" : "Čitaj više"}
        </button>
      )}
    </div>
  );
}
