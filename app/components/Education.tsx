"use client";

import LaserCard from "./LaserCard";

interface EducationProps {
  brightness: number;
}

export default function Education({ brightness }: EducationProps) {
  return (
    <section className="mb-16 space-y-6">
      <h2 className="fade-in text-3xl font-bold mb-8 transition-colors duration-500 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
        Education
      </h2>

      <LaserCard
        className="section-item p-6 rounded-lg bg-black/20 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300"
        backgroundImageUrl="/foi-white.svg"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold transition-colors duration-500 text-white group-hover:text-purple-300">
              Faculty of Organization and Informatics
            </h3>
            <p className="font-medium transition-colors duration-300 text-purple-400">
              University of Zagreb
            </p>
            <div className="flex items-center gap-2 mt-1">
              <svg
                className="w-4 h-4 transition-all duration-300 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <p className="transition-colors duration-500 text-gray-400">
                Master&apos;s degree - Information and programming engineering
              </p>
            </div>
          </div>
          <span className="text-sm transition-colors duration-500 text-gray-400">
            2023–2025
          </span>
        </div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        ></p>
      </LaserCard>

      <LaserCard
        className="section-item p-6 rounded-lg bg-black/20 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300"
        backgroundImageUrl="/foi-white.svg"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold transition-colors duration-500 text-white group-hover:text-purple-300">
              Faculty of Organization and Informatics
            </h3>
            <p className="font-medium transition-colors duration-300 text-purple-400">
              University of Zagreb
            </p>
            <div className="flex items-center gap-2 mt-1">
              <svg
                className="w-4 h-4 transition-all duration-300 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <p className="transition-colors duration-500 text-gray-400">
                Bachelor&apos;s degree - Information systems
              </p>
            </div>
          </div>
          <span className="text-sm transition-colors duration-500 text-gray-400">
            2019–2023
          </span>
        </div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        ></p>
      </LaserCard>
    </section>
  );
}
