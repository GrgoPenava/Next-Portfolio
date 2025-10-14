import React from "react";

interface ProjectThumbnailProps {
  imageUrl: string;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  imageUrl,
  title,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`aspect-video w-16 sm:w-20 md:w-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 border-2 flex-shrink-0 ${
        isSelected
          ? "border-purple-500 scale-110 shadow-lg shadow-purple-500/25"
          : "border-gray-600/50 hover:border-purple-400/70 hover:scale-105"
      }`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </button>
  );
};
