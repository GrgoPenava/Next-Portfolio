import React from "react";
import { CursorIcon } from "./CursorIcon";

interface ProjectsCardProps {
  onClick: () => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onClick }) => {
  return (
    <div
      className="bento-card bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Stacked Project Images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Bottom image - VS Code Profiles */}
            <div className="absolute inset-0 transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
              <div className="w-20 h-14 rounded-lg shadow-2xl overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                <img
                  src="/VsCodeProfilesProject.png"
                  alt="VS Code Profiles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle image - Tasky 2 */}
            <div className="absolute inset-0 transform -rotate-3 group-hover:-rotate-8 transition-transform duration-500 delay-75">
              <div className="w-20 h-14 rounded-lg shadow-2xl overflow-hidden opacity-80 group-hover:opacity-95 transition-opacity duration-300">
                <img
                  src="/Tasky2.png"
                  alt="Tasky Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top image - Main Tasky */}
            <div className="relative transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 delay-150">
              <div className="w-20 h-14 rounded-lg shadow-2xl overflow-hidden">
                <img
                  src="/TaskyProject.png"
                  alt="Tasky Main"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom Cursor with Pulsing Circle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform translate-x-2 translate-y-2 opacity-100 group-hover:scale-110 transition-all duration-300">
            {/* Pulsing circle */}
            <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            {/* Cursor icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <CursorIcon className="group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center mt-24">
          <p className="font-semibold text-white group-hover:text-orange-200 transition-colors text-sm">
            Projects
          </p>
          <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
            Click to explore
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-500"></div>
      </div>
    </div>
  );
};
