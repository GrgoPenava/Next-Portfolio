"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Earth3D from "./Earth3D";

interface TimePickerProps {
  onTimeChange?: (brightness: number) => void;
}

export default function TimePicker({ onTimeChange }: TimePickerProps) {
  const getCurrentTimeInMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  const [currentMinutes, setCurrentMinutes] = useState(
    getCurrentTimeInMinutes()
  );
  const ringRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const isDragging = useRef(false);

  const minToTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateBrightness = (minutes: number) => {
    const sunrise = 420;
    const sunset = 1140;
    const noon = 720;

    if (minutes >= sunrise && minutes <= sunset) {
      if (minutes <= noon) {
        const progress = (minutes - sunrise) / (noon - sunrise);
        return 0.1 + progress * 0.9;
      } else {
        const progress = (minutes - noon) / (sunset - noon);
        return 1.0 - progress * 0.9;
      }
    } else {
      const midnight = 1440;

      if (minutes > sunset) {
        const progress = (minutes - sunset) / (midnight - sunset);
        return 0.1 - progress * 0.1;
      } else {
        const progress = minutes / sunrise;
        return progress * 0.1;
      }
    }
  };

  const updateTheme = (minutes: number) => {
    const brightness = calculateBrightness(minutes);

    const bgLight = Math.floor(10 + 245 * brightness);
    const bgDark = Math.floor(5 + 25 * brightness);
    const textLight = Math.floor(255 * (1 - brightness) + 50 * brightness);
    const textDark = Math.floor(150 + 105 * brightness);

    document.documentElement.style.setProperty(
      "--time-bg-light",
      `rgb(${bgLight}, ${bgLight}, ${bgLight})`
    );
    document.documentElement.style.setProperty(
      "--time-bg-dark",
      `rgb(${bgDark}, ${bgDark}, ${bgDark})`
    );
    document.documentElement.style.setProperty(
      "--time-text-light",
      `rgb(${textLight}, ${textLight}, ${textLight})`
    );
    document.documentElement.style.setProperty(
      "--time-text-dark",
      `rgb(${textDark}, ${textDark}, ${textDark})`
    );

    const accentOpacity = 0.3 + brightness * 0.7;
    document.documentElement.style.setProperty(
      "--time-accent-opacity",
      accentOpacity.toString()
    );

    onTimeChange?.(brightness);
  };

  const updateTime = (rotation: number) => {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const minutes = Math.floor((normalizedRotation / 360) * 1440);
    setCurrentMinutes(minutes);
    updateTheme(minutes);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !ringRef.current) return;

    const rect = ringRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const rotation = ((angle * 180) / Math.PI + 90 + 360) % 360;

    gsap.set(ringRef.current, { rotation });
    gsap.set(handleRef.current, { rotation: -rotation });

    updateTime(rotation);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    const actualCurrentMinutes = getCurrentTimeInMinutes();
    setCurrentMinutes(actualCurrentMinutes);
    updateTheme(actualCurrentMinutes);

    if (ringRef.current && handleRef.current) {
      const initialRotation = (actualCurrentMinutes / 1440) * 360;
      gsap.set(ringRef.current, { rotation: initialRotation });
      gsap.set(handleRef.current, { rotation: -initialRotation });
    }
  }, [updateTheme]);

  const currentTime = minToTime(currentMinutes);

  const sunriseIcon = 420;
  const sunsetIcon = 1200;
  const isDay = currentMinutes >= sunriseIcon && currentMinutes < sunsetIcon;

  return (
    <div className="fixed top-8 left-8 z-50">
      <div className="mb-2 flex justify-center">
        <div className="text-xs font-mono px-2 py-1 rounded backdrop-blur-sm text-center">
          <div>Current time: {currentTime}</div>
          <div>
            Brightness: {Math.round(calculateBrightness(currentMinutes) * 100)}%
          </div>
        </div>
      </div>

      <div className="w-24 h-24 relative mx-auto">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300/50 dark:border-gray-600/50"></div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-19 h-19 rounded-full overflow-hidden">
            <Earth3D />
          </div>
        </div>

        <div
          ref={ringRef}
          className="absolute inset-0 cursor-pointer"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <button
            ref={handleRef}
            className="absolute w-6 h-6 bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-500 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
            style={{
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {isDay ? (
              <svg
                className="w-3 h-3 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-3 h-3 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
