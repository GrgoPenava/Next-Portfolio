"use client";

import { useRef, useState, useEffect } from "react";

interface LaserCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundImageUrl?: string;
}

export default function LaserCard({
  children,
  className = "",
  backgroundImageUrl,
}: LaserCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (isDesktop) {
      setOpacity(1);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setOpacity(0);
    }
  };

  // Detect if device supports hover (desktop) vs touch (mobile)
  useEffect(() => {
    const checkIsDesktop = () => {
      // Check if device supports hover and has a pointer device
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const hasPointer = window.matchMedia("(pointer: fine)").matches;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      setIsDesktop(hasHover && hasPointer && !isTouchDevice);
    };

    checkIsDesktop();

    // Listen for changes in media queries
    const hoverQuery = window.matchMedia("(hover: hover)");
    const pointerQuery = window.matchMedia("(pointer: fine)");

    hoverQuery.addEventListener("change", checkIsDesktop);
    pointerQuery.addEventListener("change", checkIsDesktop);

    return () => {
      hoverQuery.removeEventListener("change", checkIsDesktop);
      pointerQuery.removeEventListener("change", checkIsDesktop);
    };
  }, []);

  // Add global mouse move listener to handle card expansion
  useEffect(() => {
    if (opacity === 0 || !isDesktop) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;

      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only update if mouse is within the card bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [opacity, isDesktop]);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        cursor: isDesktop ? "none" : "auto",
      }}
    >
      {/* Background image with laser effect */}
      {backgroundImageUrl && isDesktop && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
          }}
        >
          <div
            className="absolute opacity-30"
            style={{
              left: backgroundImageUrl?.includes("sick-mobilisis")
                ? position.x - 125
                : position.x - 50,
              top: position.y - 50,
              width: backgroundImageUrl?.includes("sick-mobilisis")
                ? "250px"
                : "100px",
              height: "100px",
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "grayscale(1) brightness(1.5)",
              maskImage: backgroundImageUrl?.includes("sick-mobilisis")
                ? `radial-gradient(ellipse 150px 60px at 125px 50px, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 50%, transparent 80%)`
                : `radial-gradient(circle at 50px 50px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 70%)`,
              WebkitMaskImage: backgroundImageUrl?.includes("sick-mobilisis")
                ? `radial-gradient(ellipse 150px 60px at 125px 50px, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 50%, transparent 80%)`
                : `radial-gradient(circle at 50px 50px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 70%)`,
            }}
          />
        </div>
      )}

      {/* Laser spotlight effect */}
      {isDesktop && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.08) 40%, transparent 70%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 [&_button]:cursor-pointer [&_a]:cursor-pointer [&_[role=button]]:cursor-pointer">
        {children}
      </div>
    </div>
  );
}
