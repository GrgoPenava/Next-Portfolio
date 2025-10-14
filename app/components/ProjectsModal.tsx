import React from "react";
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
  if (!isOpen) return null;

  return (
    <>
      {/* Hide dock and earth while modal is open */}
      <div className="fixed inset-0 z-40">
        <style jsx global>{`
          body {
            overflow: hidden;
          }
          .dock-container,
          .earth-widget,
          [class*="dock"],
          [class*="earth"] {
            opacity: 0 !important;
            pointer-events: none !important;
            visibility: hidden !important;
            z-index: -1 !important;
          }
        `}</style>
      </div>

      {/* Modal Backdrop */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 transition-all duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div
          className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl sm:rounded-3xl w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <ModalHeader
            title={projects[selectedProjectIndex]?.title}
            currentIndex={selectedImageIndex}
            totalCount={projects[selectedProjectIndex]?.images.length}
            onClose={onClose}
          />

          {/* Main Content */}
          <div className="relative overflow-y-auto flex-1 scrollbar-hide">
            {/* Image Navigation Arrows */}
            <NavigationButton
              direction="prev"
              onClick={() => onImageNavigate("prev")}
            />
            <NavigationButton
              direction="next"
              onClick={() => onImageNavigate("next")}
            />

            {/* Project Image Display */}
            <div className="p-4 sm:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Current Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-2xl border border-gray-700/50 group">
                  <img
                    key={`${selectedProjectIndex}-${selectedImageIndex}`}
                    src={
                      projects[selectedProjectIndex]?.images[selectedImageIndex]
                    }
                    alt={`${projects[selectedProjectIndex]?.title} - Image ${
                      selectedImageIndex + 1
                    }`}
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Project Selector Navigation */}
            <div className="p-3 sm:p-6 bg-gradient-to-t from-gray-900/50 to-transparent border-t border-purple-500/10">
              <div className="flex justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 overflow-x-auto scrollbar-hide py-2">
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
              <div className="flex justify-center gap-1 sm:gap-2 max-w-4xl mx-auto overflow-x-auto scrollbar-hide py-2">
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
        </div>
      </div>
    </>
  );
};
