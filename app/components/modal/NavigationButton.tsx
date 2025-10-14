import React from "react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  const isPrev = direction === "prev";
  const positionClass = isPrev ? "left-2 sm:left-4" : "right-2 sm:right-4";
  const arrowPath = isPrev ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 group`}
    >
      <svg
        className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-purple-200 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={arrowPath}
        />
      </svg>
    </button>
  );
};
