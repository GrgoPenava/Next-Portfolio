import React from "react";

interface CursorIconProps {
  className?: string;
}

export const CursorIcon: React.FC<CursorIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={`w-5 h-5 text-black drop-shadow-lg ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  );
};
