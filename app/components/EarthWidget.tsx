"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Earth3D from "./Earth3D";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EarthWidget() {
  const getCurrentTimeInMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  const getCurrentTimeString = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentTimeString, setCurrentTimeString] = useState("00:00");
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const earthRefMobile = useRef<HTMLDivElement>(null);
  const timeUpdateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const sunriseIcon = 420; // 7:00 AM
  const sunsetIcon = 1200; // 8:00 PM
  const isDay = currentMinutes >= sunriseIcon && currentMinutes < sunsetIcon;

  // Calculate rotation for analog clock (12:00 = 0°/top, 3:00 = 90°/right, 6:00 = 180°/bottom, 9:00 = 270°/left)
  // Convert 24h to 12h format for clock display
  const clockMinutes = currentMinutes % 720; // 720 minutes = 12 hours
  const rotation = (clockMinutes / 720) * 360;

  // Add route change animation and refresh ScrollTrigger
  useEffect(() => {
    console.log("EarthWidget useEffect triggered:", {
      prevPathname: prevPathnameRef.current,
      currentPathname: pathname,
      isClient,
      shouldAnimate:
        prevPathnameRef.current !== pathname &&
        isClient &&
        prevPathnameRef.current !== null,
    });

    // Only trigger animation if pathname actually changed and component is client-side
    if (
      prevPathnameRef.current !== pathname &&
      isClient &&
      prevPathnameRef.current !== null
    ) {
      console.log(
        "🌍 Route changed from",
        prevPathnameRef.current,
        "to",
        pathname,
        "- Starting Earth rotation animation"
      );

      // Small delay to ensure DOM is stable after route change
      const timer = setTimeout(() => {
        // Trigger natural rotation effect by sending signal to Earth3D
        // This will use the same rotation mechanism as scroll/continuous rotation
        const rotationEvent = new CustomEvent("earthRouteChange", {
          detail: {
            fromRoute: prevPathnameRef.current,
            toRoute: pathname,
            duration: 2.0,
          },
        });
        window.dispatchEvent(rotationEvent);
        console.log("🌍 Dispatched natural rotation event for route change");
      }, 50); // Small delay to ensure stability

      // Update the previous pathname reference ONLY when animation is triggered
      prevPathnameRef.current = pathname;
      console.log(
        "📍 Updated prevPathname to:",
        pathname,
        "after animation trigger"
      );

      return () => clearTimeout(timer);
    }

    // Refresh ScrollTrigger after route change (but less aggressively)
    if (prevPathnameRef.current !== pathname && isClient) {
      // Single refresh with longer delay to let Earth3D setup first
      setTimeout(() => {
        ScrollTrigger.refresh();
        console.log(
          "🔄 EarthWidget: ScrollTrigger refreshed after route change"
        );
      }, 200);

      // Update pathname reference for ScrollTrigger refresh (but not for animation)
      if (prevPathnameRef.current === null) {
        prevPathnameRef.current = pathname;
        console.log(
          "📍 Updated prevPathname to:",
          pathname,
          "for ScrollTrigger only"
        );
      }
    }
  }, [pathname, isClient]);

  // Initialize client-side values on mount and set up time updates
  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      const newMinutes = getCurrentTimeInMinutes();
      const newTimeString = getCurrentTimeString();

      // Only update if time actually changed to avoid unnecessary re-renders
      setCurrentMinutes((prev) => {
        if (prev !== newMinutes) {
          // No need to animate Earth rotation - only sun/moon moves via CSS rotation
          return newMinutes;
        }
        return prev;
      });

      setCurrentTimeString((prev) =>
        prev !== newTimeString ? newTimeString : prev
      );
    };

    // Initial update
    updateTime();

    // Update every second
    timeUpdateIntervalRef.current = setInterval(updateTime, 1000);

    return () => {
      if (timeUpdateIntervalRef.current) {
        clearInterval(timeUpdateIntervalRef.current);
      }
    };
  }, []);

  // Set initial pathname when component becomes client-side
  useEffect(() => {
    if (isClient && prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      console.log("🎯 Initial pathname set to:", pathname);
    }
  }, [isClient, pathname]);

  // Refresh ScrollTrigger when component becomes client-side (less aggressive)
  useEffect(() => {
    if (isClient) {
      // Single refresh with delay to let Earth3D setup
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
        console.log(
          "🔄 EarthWidget: ScrollTrigger refreshed after client mount"
        );
      }, 150);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isClient]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup all animations and ScrollTriggers
      if (earthRef.current) {
        gsap.killTweensOf(earthRef.current);
      }
      if (earthRefMobile.current) {
        gsap.killTweensOf(earthRefMobile.current);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Show placeholder until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <>
        {/* Mobile placeholder */}
        <div className="block xl:hidden w-full py-6 z-[60] relative">
          <div className="flex flex-col items-center">
            {/* Time placeholder */}
            <div className="mb-2">
              <div className="w-8 h-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="w-28 h-28 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-gray-800 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop placeholder */}
        <div className="hidden xl:block fixed top-8 left-8 z-[60]">
          {/* Time placeholder */}
          <div className="mb-2 text-center">
            <div className="w-6 h-3 bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="w-24 h-24 relative mx-auto">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-gray-800 animate-pulse" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Mobile layout - centered at top */}
      <div className="block xl:hidden w-full py-2 sm:py-4 md:py-6 z-[60] relative">
        <div className="flex flex-col items-center">
          {/* Time display */}
          <div className="mb-1 sm:mb-2 md:mb-4" suppressHydrationWarning>
            <span className="text-sm font-mono text-gray-400 tracking-wider">
              {currentTimeString}
            </span>
          </div>
          <div className="w-28 h-28 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                ref={earthRefMobile}
                className="w-24 h-24 rounded-full overflow-hidden"
              >
                <Earth3D />
              </div>
            </div>

            {/* Sun/moon as clock hand - positioned like analog clock */}
            <div
              className="absolute inset-0"
              style={{ transform: `rotate(${rotation}deg)` }}
              suppressHydrationWarning
            >
              <div
                className="absolute flex items-center justify-center pointer-events-none"
                style={{
                  top: "-20px", // Closer to Earth
                  left: "50%",
                  transform: `translateX(-50%) rotate(-${rotation}deg)`,
                }}
              >
                {isDay ? (
                  <svg
                    className="w-8 h-8 text-yellow-500"
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
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - fixed position top-left */}
      <div className="hidden xl:block fixed top-8 left-8 z-[60]">
        {/* Time display */}
        <div className="mb-3 text-center" suppressHydrationWarning>
          <span className="text-xs font-mono text-gray-400 tracking-wider">
            {currentTimeString}
          </span>
        </div>
        <div className="w-24 h-24 relative mx-auto">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              ref={earthRef}
              className="w-20 h-20 rounded-full overflow-hidden"
            >
              <Earth3D />
            </div>
          </div>

          {/* Static sun/moon - no drag functionality */}
          <div
            className="absolute inset-0"
            style={{ transform: `rotate(${rotation}deg)` }}
            suppressHydrationWarning
          >
            <div
              className="absolute flex items-center justify-center pointer-events-none"
              style={{
                top: "-18px", // Closer to Earth
                left: "50%",
                transform: `translateX(-50%) rotate(-${rotation}deg)`,
              }}
            >
              {isDay ? (
                <svg
                  className="w-6 h-6 text-yellow-500"
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
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
