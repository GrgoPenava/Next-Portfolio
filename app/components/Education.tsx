"use client";

import Image from "next/image";
import {
  getSubtitleColor,
  getTextColor,
  useBackgroundAwareColors,
  getBlueColor,
  getIconFilter,
  getIconOpacity,
} from "../utils/colorUtils";

interface EducationProps {
  brightness: number;
}

export default function Education({ brightness }: EducationProps) {
  useBackgroundAwareColors();

  return (
    <section className="mb-16">
      <h2
        className="fade-in text-3xl font-bold mb-8 transition-colors duration-500"
        style={{
          color: getTextColor(brightness),
        }}
      >
        Education
      </h2>

      <div className="section-item">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3
              className="text-2xl font-semibold transition-colors duration-500"
              style={{
                color: getTextColor(brightness),
              }}
            >
              Faculty of Organization and Informatics
            </h3>
            <p
              className="font-medium transition-colors duration-300"
              style={{
                color: getBlueColor(),
              }}
            >
              University of Zagreb
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Image
                src="/graduation-cap.png"
                alt="Graduation cap"
                width={16}
                height={16}
                className="transition-all duration-300"
                style={{
                  opacity: getIconOpacity(),
                  filter: getIconFilter(),
                }}
              />
              <p
                className="transition-colors duration-500"
                style={{
                  color: getSubtitleColor(brightness),
                }}
              >
                Master&apos;s degree - Information and programming engineering
              </p>
            </div>
          </div>
          <span
            className="text-sm transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            2023–2025
          </span>
        </div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        ></p>
      </div>

      <div className="section-item">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3
              className="text-2xl font-semibold transition-colors duration-500"
              style={{
                color: getTextColor(brightness),
              }}
            >
              Faculty of Organization and Informatics
            </h3>
            <p
              className="font-medium transition-colors duration-300"
              style={{
                color: getBlueColor(),
              }}
            >
              University of Zagreb
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Image
                src="/graduation-cap.png"
                alt="Graduation cap"
                width={16}
                height={16}
                className="transition-all duration-300"
                style={{
                  opacity: getIconOpacity(),
                  filter: getIconFilter(),
                }}
              />
              <p
                className="transition-colors duration-500"
                style={{
                  color: getSubtitleColor(brightness),
                }}
              >
                Bachelor&apos;s degree - Information systems
              </p>
            </div>
          </div>
          <span
            className="text-sm transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            2019–2023
          </span>
        </div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        ></p>
      </div>
    </section>
  );
}
