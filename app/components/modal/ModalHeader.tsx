import React from "react";

interface ModalHeaderProps {
  title: string;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  currentIndex,
  totalCount,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between p-3 sm:p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-500/20">
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-2 sm:ml-4 text-sm sm:text-xl font-bold text-white truncate">
          {title}
        </div>
        <div className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-200 flex-shrink-0">
          {currentIndex + 1} / {totalCount}
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
