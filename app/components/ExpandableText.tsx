"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
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

  const expandableContentRef = useRef<HTMLDivElement>(null);
  const isExpanded = expandedItems[itemId];

  const hasAdditionalContent =
    (bulletPoints && bulletPoints.length > 0) ||
    (technologies && technologies.length > 0);

  useEffect(() => {
    if (!expandableContentRef.current) return;

    // Set initial state
    gsap.set(expandableContentRef.current, {
      height: isExpanded ? "auto" : 0,
      opacity: isExpanded ? 1 : 0,
      y: 0,
    });
  }, []); // Run once on mount

  useEffect(() => {
    if (!expandableContentRef.current) return;

    if (isExpanded) {
      // Animate in (expand)
      gsap.fromTo(
        expandableContentRef.current,
        {
          height: 0,
          opacity: 0,
          y: -20,
        },
        {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      // Animate out (collapse)
      gsap.to(expandableContentRef.current, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isExpanded]);

  return (
    <div>
      <div
        className="transition-colors duration-500"
        style={{
          color: getTextColor(brightness, 0.9),
        }}
      >
        <p className="leading-relaxed">{text}</p>

        <div
          ref={expandableContentRef}
          className="overflow-hidden"
          style={{
            height: 0,
            opacity: 0,
          }}
        >
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
        </div>
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
