import { useState, useEffect } from "react";

const getBackgroundLuminance = () => {
  if (typeof window === "undefined") return 0.5;

  const bgColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--time-bg-light")
    .trim();
  if (!bgColor) return 0.5;

  const rgbMatch = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!rgbMatch) return 0.5;

  const [, r, g, b] = rgbMatch.map(Number);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance;
};

export const getTextColor = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  brightness: number = 0.5,
  opacity: number = 0.9
) => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    return `rgba(255, 255, 255, ${Math.min(opacity, 0.9)})`;
  } else if (luminance > 0.7) {
    return `rgba(20, 20, 20, ${Math.min(opacity, 0.9)})`;
  } else {
    const textValue = luminance < 0.5 ? 240 : 20;
    return `rgba(${textValue}, ${textValue}, ${textValue}, ${opacity})`;
  }
};

export const getSubtitleColor = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  brightness: number = 0.5
) => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    return `rgba(200, 200, 200, 0.8)`;
  } else if (luminance > 0.7) {
    return `rgba(80, 80, 80, 0.8)`;
  } else {
    const grayValue = luminance < 0.5 ? 180 : 60;
    return `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.8)`;
  }
};

export const getMainTextColor = () => {
  if (typeof window === "undefined") return "rgb(17, 17, 17)";

  const textColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--time-text-light")
    .trim();
  return textColor || "rgb(17, 17, 17)";
};

export const useBackgroundAwareColors = () => {
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          setForceUpdate((prev) => prev + 1);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return forceUpdate;
};

export const getBorderColor = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    return `rgba(100, 100, 100, 0.3)`;
  } else if (luminance > 0.7) {
    return `rgba(200, 200, 200, 0.3)`;
  } else {
    const grayValue = luminance < 0.5 ? 120 : 180;
    return `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.3)`;
  }
};

// For footer border that needs high visibility like icons
export const getFooterBorderColor = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    // Dark background - use light border with higher opacity
    return `rgba(200, 200, 200, 0.6)`;
  } else if (luminance > 0.7) {
    // Light background - use dark border with higher opacity
    return `rgba(60, 60, 60, 0.6)`;
  } else {
    // Medium background - ensure strong contrast
    const grayValue = luminance < 0.5 ? 220 : 40;
    return `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.7)`;
  }
};

// Blue color that remains readable on all backgrounds
export const getBlueColor = () => {
  return `rgba(0, 98, 178, 0.9)`;
  /* if (luminance < 0.3) {
    // Dark background - use lighter blue (similar to blue-400)
    return `rgba(96, 165, 250, 0.9)`;
  } else if (luminance > 0.7) {
    // Light background - use much darker blue (blue-700/800)
    return `rgba(29, 78, 216, 0.95)`;
  } else {
    // Medium background - use medium blue (blue-500/600)
    return `rgba(37, 99, 235, 0.9)`;
  } */
};

// For "Technologies used:" labels - lighter version
export const getBlueLabelColor = () => {
  return `rgba(0, 98, 178, 0.9)`;

  /* if (luminance < 0.3) {
    return `rgba(96, 165, 250, 0.8)`;
  } else if (luminance > 0.7) {
    return `rgba(29, 78, 216, 0.8)`;
  } else {
    return `rgba(37, 99, 235, 0.8)`;
  } */
};

// For borders with blue color
export const getBlueBorderColor = () => {
  return `rgba(0, 98, 178, 0.9)`;

  /* if (luminance < 0.3) {
    return `rgba(96, 165, 250, 0.4)`;
  } else if (luminance > 0.7) {
    return `rgba(29, 78, 216, 0.4)`;
  } else {
    return `rgba(37, 99, 235, 0.4)`;
  } */
};

// For icon filters to ensure they're always visible
export const getIconFilter = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    // Dark background - invert to white
    return "invert(1)";
  } else if (luminance > 0.7) {
    // Light background - keep original (dark)
    return "invert(0)";
  } else {
    // Medium background - choose based on which provides better contrast
    return luminance < 0.5 ? "invert(0.8)" : "invert(0.2)";
  }
};

// For icon opacity to ensure they're always visible
export const getIconOpacity = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    // Dark background - slightly transparent white
    return 0.85;
  } else if (luminance > 0.7) {
    // Light background - solid dark
    return 0.9;
  } else {
    // Medium background - ensure good visibility
    return 0.8;
  }
};
