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

export const getFooterBorderColor = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    return `rgba(200, 200, 200, 0.6)`;
  } else if (luminance > 0.7) {
    return `rgba(60, 60, 60, 0.6)`;
  } else {
    const grayValue = luminance < 0.5 ? 220 : 40;
    return `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.7)`;
  }
};

const getContrastRatio = (color1Luminance: number, color2Luminance: number) => {
  const lighter = Math.max(color1Luminance, color2Luminance);
  const darker = Math.min(color1Luminance, color2Luminance);
  return (lighter + 0.05) / (darker + 0.05);
};

const getLuminanceFromRGB = (r: number, g: number, b: number) => {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

export const getBlueColor = () => {
  const backgroundLuminance = getBackgroundLuminance();

  const blueColors = [
    { rgb: [7, 39, 105], name: "extra-dark-blue" },
    { rgb: [15, 58, 141], name: "super-dark-blue" },
    { rgb: [21, 67, 156], name: "very-dark-blue" },
    { rgb: [29, 78, 216], name: "dark-blue" },
    { rgb: [37, 99, 235], name: "medium-dark-blue" },
    { rgb: [59, 130, 246], name: "medium-blue" },
    { rgb: [96, 165, 250], name: "light-medium-blue" },
    { rgb: [147, 197, 253], name: "light-blue" },
    { rgb: [191, 219, 254], name: "very-light-blue" },
    { rgb: [219, 234, 254], name: "ultra-light-blue" },
  ];

  let candidateColors: typeof blueColors = [];

  if (backgroundLuminance < 0.25) {
    candidateColors = blueColors.slice(6);
  } else if (backgroundLuminance < 0.35) {
    candidateColors = blueColors.slice(5);
  } else if (backgroundLuminance > 0.65) {
    candidateColors = blueColors.slice(0, 5);
  } else {
    candidateColors = blueColors;
  }

  let bestColor =
    candidateColors[Math.floor(candidateColors.length / 2)] || blueColors[4];
  let bestContrast = 0;

  for (const color of candidateColors) {
    const [r, g, b] = color.rgb;
    const colorLuminance = getLuminanceFromRGB(r, g, b);
    const contrast = getContrastRatio(backgroundLuminance, colorLuminance);

    if (contrast >= 3.0) {
      let adjustedContrast = contrast;

      if (contrast >= 7.0) {
        adjustedContrast += 3;
      } else if (contrast >= 4.5) {
        adjustedContrast += 2;
      } else if (contrast >= 3.0) {
        adjustedContrast += 0.5;
      }

      if (adjustedContrast > bestContrast) {
        bestContrast = adjustedContrast;
        bestColor = color;
      }
    }
  }

  if (bestContrast === 0) {
    for (const color of blueColors) {
      const [r, g, b] = color.rgb;
      const colorLuminance = getLuminanceFromRGB(r, g, b);
      const contrast = getContrastRatio(backgroundLuminance, colorLuminance);

      if (contrast > bestContrast) {
        bestContrast = contrast;
        bestColor = color;
      }
    }
  }

  const [r, g, b] = bestColor.rgb;
  return `rgba(${r}, ${g}, ${b}, 0.9)`;
};

export const getBlueLabelColor = () => {
  const backgroundLuminance = getBackgroundLuminance();

  const blueColors = [
    { rgb: [7, 39, 105], name: "extra-dark-blue" },
    { rgb: [15, 58, 141], name: "super-dark-blue" },
    { rgb: [21, 67, 156], name: "very-dark-blue" },
    { rgb: [29, 78, 216], name: "dark-blue" },
    { rgb: [37, 99, 235], name: "medium-dark-blue" },
    { rgb: [59, 130, 246], name: "medium-blue" },
    { rgb: [96, 165, 250], name: "light-medium-blue" },
    { rgb: [147, 197, 253], name: "light-blue" },
    { rgb: [191, 219, 254], name: "very-light-blue" },
    { rgb: [219, 234, 254], name: "ultra-light-blue" },
  ];

  let candidateColors: typeof blueColors = [];

  if (backgroundLuminance < 0.25) {
    candidateColors = blueColors.slice(6);
  } else if (backgroundLuminance < 0.35) {
    candidateColors = blueColors.slice(5);
  } else if (backgroundLuminance > 0.65) {
    candidateColors = blueColors.slice(0, 5);
  } else {
    candidateColors = blueColors;
  }

  let bestColor =
    candidateColors[Math.floor(candidateColors.length / 2)] || blueColors[4];
  let bestContrast = 0;

  for (const color of candidateColors) {
    const [r, g, b] = color.rgb;
    const colorLuminance = getLuminanceFromRGB(r, g, b);
    const contrast = getContrastRatio(backgroundLuminance, colorLuminance);

    if (contrast >= 3.0) {
      let adjustedContrast = contrast;

      if (contrast >= 7.0) {
        adjustedContrast += 3;
      } else if (contrast >= 4.5) {
        adjustedContrast += 2;
      } else if (contrast >= 3.0) {
        adjustedContrast += 0.5;
      }

      if (adjustedContrast > bestContrast) {
        bestContrast = adjustedContrast;
        bestColor = color;
      }
    }
  }

  if (bestContrast === 0) {
    for (const color of blueColors) {
      const [r, g, b] = color.rgb;
      const colorLuminance = getLuminanceFromRGB(r, g, b);
      const contrast = getContrastRatio(backgroundLuminance, colorLuminance);

      if (contrast > bestContrast) {
        bestContrast = contrast;
        bestColor = color;
      }
    }
  }

  const [r, g, b] = bestColor.rgb;
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
};

export const getBlueBorderColor = () => {
  const backgroundLuminance = getBackgroundLuminance();

  const blueColors = [
    { rgb: [7, 39, 105], name: "extra-dark-blue" },
    { rgb: [15, 58, 141], name: "super-dark-blue" },
    { rgb: [21, 67, 156], name: "very-dark-blue" },
    { rgb: [29, 78, 216], name: "dark-blue" },
    { rgb: [37, 99, 235], name: "medium-dark-blue" },
    { rgb: [59, 130, 246], name: "medium-blue" },
    { rgb: [96, 165, 250], name: "light-medium-blue" },
    { rgb: [147, 197, 253], name: "light-blue" },
    { rgb: [191, 219, 254], name: "very-light-blue" },
    { rgb: [219, 234, 254], name: "ultra-light-blue" },
  ];

  let candidateColors: typeof blueColors = [];

  if (backgroundLuminance < 0.25) {
    candidateColors = blueColors.slice(6);
  } else if (backgroundLuminance < 0.35) {
    candidateColors = blueColors.slice(5);
  } else if (backgroundLuminance > 0.65) {
    candidateColors = blueColors.slice(0, 5);
  } else {
    candidateColors = blueColors;
  }

  let bestColor =
    candidateColors[Math.floor(candidateColors.length / 2)] || blueColors[4];
  let bestContrast = 0;

  for (const color of candidateColors) {
    const [r, g, b] = color.rgb;
    const colorLuminance = getLuminanceFromRGB(r, g, b);
    const contrast = getContrastRatio(backgroundLuminance, colorLuminance);

    if (contrast >= 3.0) {
      let adjustedContrast = contrast;

      if (contrast >= 7.0) {
        adjustedContrast += 3;
      } else if (contrast >= 4.5) {
        adjustedContrast += 2;
      } else if (contrast >= 3.0) {
        adjustedContrast += 0.5;
      }

      if (adjustedContrast > bestContrast) {
        bestContrast = adjustedContrast;
        bestColor = color;
      }
    }
  }

  if (bestContrast === 0) {
    for (const color of blueColors) {
      const [r, g, b] = color.rgb;
      const colorLuminance = getLuminanceFromRGB(r, g, b);
      const contrast = getContrastRatio(backgroundLuminance, colorLuminance);

      if (contrast > bestContrast) {
        bestContrast = contrast;
        bestColor = color;
      }
    }
  }

  const [r, g, b] = bestColor.rgb;
  return `rgba(${r}, ${g}, ${b}, 0.4)`;
};

export const getIconFilter = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    return "invert(1)";
  } else if (luminance > 0.7) {
    return "invert(0)";
  } else {
    return luminance < 0.5 ? "invert(0.8)" : "invert(0.2)";
  }
};

export const getIconOpacity = () => {
  const luminance = getBackgroundLuminance();

  if (luminance < 0.3) {
    return 0.85;
  } else if (luminance > 0.7) {
    return 0.9;
  } else {
    return 0.8;
  }
};
