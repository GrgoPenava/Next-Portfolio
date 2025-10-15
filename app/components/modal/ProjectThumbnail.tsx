import React from "react";
import Image from "next/image";

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
      className={`relative aspect-video w-16 sm:w-20 md:w-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 border-2 flex-shrink-0 ${
        isSelected
          ? "border-purple-500 scale-110 shadow-lg shadow-purple-500/25"
          : "border-gray-600/50 hover:border-purple-400/70 hover:scale-105"
      }`}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
        className="object-cover"
      />
    </button>
  );
};
