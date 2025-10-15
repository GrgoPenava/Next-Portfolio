import React from "react";
import Image from "next/image";

interface ImageThumbnailProps {
  imageUrl: string;
  alt: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  imageUrl,
  alt,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative aspect-video w-12 sm:w-14 md:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 border flex-shrink-0 ${
        isSelected
          ? "border-purple-400 scale-110"
          : "border-gray-600/50 hover:border-purple-400/70 hover:scale-105"
      }`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
        className="object-cover"
      />
    </button>
  );
};
