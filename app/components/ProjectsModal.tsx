import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { NavigationButton } from "./modal/NavigationButton";
import { ModalHeader } from "./modal/ModalHeader";
import { ProjectThumbnail } from "./modal/ProjectThumbnail";
import { ImageThumbnail } from "./modal/ImageThumbnail";

interface Project {
  images: string[];
  title: string;
}

interface ProjectsModalProps {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  projects: Project[];
  selectedProjectIndex: number;
  selectedImageIndex: number;
  onProjectSelect: (index: number) => void;
  onImageSelect: (index: number) => void;
  onImageNavigate: (direction: "prev" | "next") => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  isClosing,
  onClose,
  projects,
  selectedProjectIndex,
  selectedImageIndex,
  onProjectSelect,
  onImageSelect,
  onImageNavigate,
}) => {
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onImageNavigate("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onImageNavigate("next");
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [isOpen, onImageNavigate, onClose]
  );

  // Add keyboard event listener
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left -> next image
        onImageNavigate("next");
      } else {
        // Swipe right -> previous image
        onImageNavigate("prev");
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Hide dock and earth widget while modal is open */}
      <div className="fixed inset-0 z-40">
        <style jsx global>{`
          html, body {
            overflow: hidden !important;
            position: fixed !important;
            width: 100% !important;
            height: 100% !important;
            touch-action: none !important;
          }
          .dock-container,
          [class*="dock"],
          [class*="z-[60]"],
          .fixed.top-8.left-8,
          .block.xl\\:hidden.w-full,
          .hidden.xl\\:block.fixed {
            opacity: 0 !important;
            pointer-events: none !important;
            visibility: hidden !important;
          }
        `}</style>
      </div>

      {/* Modal Backdrop */}
      <div
        className={`fixed inset-0 bg-black/98 z-50 transition-all duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={onClose}
      />

      {/* Hidden preload container for all images */}
      <div className="hidden">
        {projects.flatMap((project) =>
          project.images.map((src, idx) => (
            <Image
              key={`preload-${src}-${idx}`}
              src={src}
              alt=""
              width={1}
              height={1}
              priority
            />
          ))
        )}
      </div>

      {/* MOBILE LAYOUT */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex flex-col transition-all duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-3 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-white font-semibold text-sm truncate">
              {projects[selectedProjectIndex]?.title}
            </span>
            <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-200 flex-shrink-0">
              {selectedImageIndex + 1} / {projects[selectedProjectIndex]?.images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-full flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Main Image - Full screen with swipe support */}
        <div 
          className="flex-1 relative bg-black touch-pan-x"
          style={{ touchAction: 'pan-x' }}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => onImageNavigate("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center z-10"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => onImageNavigate("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center z-10"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Full Screen Image */}
          <Image
            key={`mobile-${selectedProjectIndex}-${selectedImageIndex}`}
            src={projects[selectedProjectIndex]?.images[selectedImageIndex]}
            alt={`${projects[selectedProjectIndex]?.title} - Image ${selectedImageIndex + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="bg-black/90 backdrop-blur-sm border-t border-purple-500/20 p-3">
          {/* Project Selector */}
          <div className="flex justify-center gap-2 mb-3 overflow-x-auto scrollbar-hide">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => onProjectSelect(index)}
                className={`relative w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  index === selectedProjectIndex
                    ? "border-purple-500 scale-105"
                    : "border-gray-600/50"
                }`}
              >
                <Image src={project.images[0]} alt={project.title} fill sizes="56px" className="object-cover" />
              </button>
            ))}
          </div>

          {/* Image Thumbnails */}
          <div className="flex justify-center gap-1.5 overflow-x-auto scrollbar-hide pb-1">
            {projects[selectedProjectIndex]?.images.map((image, index) => (
              <button
                key={index}
                onClick={() => onImageSelect(index)}
                className={`relative w-10 h-7 rounded overflow-hidden flex-shrink-0 border transition-all ${
                  index === selectedImageIndex
                    ? "border-purple-400 scale-110"
                    : "border-gray-600/50"
                }`}
              >
                <Image src={image} alt="" fill sizes="40px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div
        className={`fixed inset-0 z-50 hidden md:flex flex-col transition-all duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border-b border-purple-500/20">
          <ModalHeader
            title={projects[selectedProjectIndex]?.title}
            currentIndex={selectedImageIndex}
            totalCount={projects[selectedProjectIndex]?.images.length}
            onClose={onClose}
          />
        </div>

        {/* Main Image Area - Takes remaining space */}
        <div className="flex-1 relative flex items-center justify-center p-4 lg:p-6">
          {/* Image Navigation Arrows */}
          <NavigationButton
            direction="prev"
            onClick={() => onImageNavigate("prev")}
          />
          <NavigationButton
            direction="next"
            onClick={() => onImageNavigate("next")}
          />

          {/* Current Project Image - Fills available space */}
          <div className="relative w-full h-full max-w-6xl">
            <Image
              key={`desktop-${selectedProjectIndex}-${selectedImageIndex}`}
              src={projects[selectedProjectIndex]?.images[selectedImageIndex]}
              alt={`${projects[selectedProjectIndex]?.title} - Image ${selectedImageIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 90vw, 1200px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom Navigation - Fixed at bottom */}
        <div className="flex-shrink-0 bg-black/80 backdrop-blur-sm border-t border-purple-500/20 p-4">
          {/* Project Selector */}
          <div className="flex justify-center gap-4 mb-3 overflow-x-auto scrollbar-hide">
            {projects.map((project, index) => (
              <ProjectThumbnail
                key={index}
                imageUrl={project.images[0]}
                title={project.title}
                isSelected={index === selectedProjectIndex}
                onClick={() => onProjectSelect(index)}
              />
            ))}
          </div>

          {/* Image Thumbnails for Current Project */}
          <div className="flex justify-center gap-2 max-w-5xl mx-auto overflow-x-auto scrollbar-hide">
            {projects[selectedProjectIndex]?.images.map((image, index) => (
              <ImageThumbnail
                key={index}
                imageUrl={image}
                alt={`${projects[selectedProjectIndex]?.title} - Thumbnail ${index + 1}`}
                isSelected={index === selectedImageIndex}
                onClick={() => onImageSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
