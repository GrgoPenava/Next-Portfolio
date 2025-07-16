"use client";

import Image from "next/image";
import {
  getTextColor,
  useBackgroundAwareColors,
  getIconFilter,
  getIconOpacity,
  getFooterBorderColor,
} from "../utils/colorUtils";

interface FooterProps {
  brightness: number;
}

export default function Footer({ brightness }: FooterProps) {
  useBackgroundAwareColors();

  return (
    <footer
      className="border-t pt-8 transition-colors duration-500"
      style={{
        borderColor: getFooterBorderColor(),
      }}
    >
      <div className="fade-in">
        <p
          className="mb-4 transition-colors duration-500"
          style={{
            color: getTextColor(brightness, 0.9),
          }}
        >
          Contact me on:
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/grgo-penava/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="transition-all duration-300"
              style={{
                opacity: getIconOpacity(),
                filter: getIconFilter(),
              }}
            />
          </a>

          <a
            href="https://github.com/GrgoPenava"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            title="GitHub"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={24}
              height={24}
              className="transition-all duration-300"
              style={{
                filter: getIconFilter(),
                opacity: getIconOpacity(),
              }}
            />
          </a>

          <a
            href="mailto:grgopenava00@gmail.com"
            className="transition-all duration-300 hover:scale-110"
            title="Email"
          >
            <Image
              src="/email.png"
              alt="Email"
              width={24}
              height={24}
              className="transition-all duration-300"
              style={{
                filter: getIconFilter(),
                opacity: getIconOpacity(),
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
