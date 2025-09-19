import React from "react";

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
          <div className="flex items-center justify-between p-3 sm:p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-500/20">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-2 sm:ml-4 text-sm sm:text-xl font-bold text-white truncate">
                {projects[selectedProjectIndex]?.title}
              </div>
              <div className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-200 flex-shrink-0">
                {selectedImageIndex + 1} /{" "}
                {projects[selectedProjectIndex]?.images.length}
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

          {/* Main Content */}
          <div className="relative overflow-y-auto flex-1 scrollbar-hide">
            {/* Image Navigation Arrows */}
            <button
              onClick={() => onImageNavigate("prev")}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 group"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => onImageNavigate("next")}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 group"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

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
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Project Selector Navigation */}
            <div className="p-3 sm:p-6 bg-gradient-to-t from-gray-900/50 to-transparent border-t border-purple-500/10">
              <div className="flex justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 overflow-x-auto scrollbar-hide">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => onProjectSelect(index)}
                    className={`aspect-video w-16 sm:w-20 md:w-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 border-2 flex-shrink-0 ${
                      index === selectedProjectIndex
                        ? "border-purple-500 scale-110 shadow-lg shadow-purple-500/25"
                        : "border-gray-600/50 hover:border-purple-400/70 hover:scale-105"
                    }`}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Image Thumbnails for Current Project */}
              <div className="flex justify-center gap-1 sm:gap-2 max-w-4xl mx-auto overflow-x-auto scrollbar-hide">
                {projects[selectedProjectIndex]?.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => onImageSelect(index)}
                    className={`aspect-video w-12 sm:w-14 md:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 border flex-shrink-0 ${
                      index === selectedImageIndex
                        ? "border-purple-400 scale-110"
                        : "border-gray-600/50 hover:border-purple-400/70 hover:scale-105"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${
                        projects[selectedProjectIndex]?.title
                      } - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
