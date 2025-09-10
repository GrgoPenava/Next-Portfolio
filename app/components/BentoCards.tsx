import React from "react";

export const ExperienceCard: React.FC = () => {
  return (
    <div className="bento-card bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5">
      <div className="text-center">
        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4"
            />
          </svg>
        </div>
        <p className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
          2+
        </p>
        <p className="text-xs text-gray-400">Years Experience</p>
      </div>
    </div>
  );
};

export const GitHubStatsCard: React.FC = () => {
  return (
    <div className="bento-card bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5">
      <div className="text-center">
        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
        <p className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
          15+
        </p>
        <p className="text-xs text-gray-400">GitHub Repos</p>
      </div>
    </div>
  );
};

export const LocationCard: React.FC = () => {
  return (
    <div className="bento-card bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5">
      <div className="text-center">
        <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="font-semibold text-white group-hover:text-pink-200 transition-colors text-sm">
          Zagreb
        </p>
        <p className="text-xs text-gray-400">Croatia</p>
      </div>
    </div>
  );
};

export const EducationCard: React.FC = () => {
  return (
    <div className="bento-card md:col-span-2 lg:col-span-3 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white group-hover:text-green-200 transition-colors text-sm">
              Master&apos;s Degree
            </p>
            <p className="text-xs text-gray-400">
              FOI, University of Zagreb • 2023 - 2025
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white group-hover:text-blue-200 transition-colors text-sm">
              Bachelor&apos;s Degree
            </p>
            <p className="text-xs text-gray-400">
              FOI, University of Zagreb • 2019 - 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkExperienceCard: React.FC = () => {
  return (
    <div className="bento-card md:col-span-2 lg:col-span-3 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white group-hover:text-orange-200 transition-colors text-sm">
              7 Payments
            </p>
            <p className="text-xs text-gray-400">
              Software Developer • 2024 - Present
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white group-hover:text-cyan-200 transition-colors text-sm">
              SICK Mobilisis
            </p>
            <p className="text-xs text-gray-400">
              Frontend Developer • 2023 - 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
