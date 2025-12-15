import React from "react";

interface CursorIconProps {
  className?: string;
}

export const CursorIcon: React.FC<CursorIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={`w-5 h-5 drop-shadow-lg ${className}`}
      viewBox="0 0 24 24"
    >
      {/* White fill with black stroke for visibility on any background */}
      <path 
        d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" 
        fill="white"
        stroke="black"
        strokeWidth="1.5"
      />
      <path 
        d="M13 13l6 6" 
        fill="none"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
};
