import React from "react";
import Image from "next/image";
import { CursorIcon } from "./CursorIcon";

interface ProjectsCardProps {
  onClick: () => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onClick }) => {
  return (
    <div
      className="bento-card col-span-1 md:col-span-1 lg:col-span-1 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 cursor-pointer relative overflow-hidden h-full"
      onClick={onClick}
    >
      <div className="relative h-full flex flex-col items-center justify-center min-h-[140px]">
        {/* Stacked Project Images with Cursor overlay */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="relative w-20 h-14">
            {/* Bottom image - VS Code Profiles */}
            <div className="absolute inset-0 transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
              <div className="relative w-20 h-14 rounded-lg shadow-2xl overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                <Image
                  src="/VsCodeProfilesProject.png"
                  alt="VS Code Profiles"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle image - Tasky 2 */}
            <div className="absolute inset-0 transform -rotate-3 group-hover:-rotate-8 transition-transform duration-500 delay-75">
              <div className="relative w-20 h-14 rounded-lg shadow-2xl overflow-hidden opacity-80 group-hover:opacity-95 transition-opacity duration-300">
                <Image
                  src="/Tasky2.png"
                  alt="Tasky Project"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top image - Main Tasky */}
            <div className="absolute inset-0 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 delay-150">
              <div className="relative w-20 h-14 rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/TaskyProject.png"
                  alt="Tasky Main"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Custom Cursor with Pulsing Circle - positioned on images */}
          <div className="absolute top-1/2 left-1/2 transform translate-x-1 translate-y-1 pointer-events-none z-10">
            <div className="relative">
              {/* Pulsing circle */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              {/* Cursor icon */}
              <CursorIcon className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center">
          <p className="font-semibold text-white group-hover:text-orange-200 transition-colors text-sm">
            Projects
          </p>
          <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">
            Click to explore
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};
