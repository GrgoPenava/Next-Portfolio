import React from "react";
import Link from "next/link";

export const MainIntroCard: React.FC = () => {
  return (
    <div className="bento-card md:col-span-2 lg:col-span-3 row-span-2 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="h-full flex flex-col justify-center relative">
        {/* Profile Image - positioned in top right corner */}
        <div className="absolute top-0 right-0 w-24 h-24 transition-all duration-300">
          <img
            src="/grgo_v1_nobg.png"
            alt="Grgo Penava"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-300">Available</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
            Grgo Penava
          </h1>

          <p className="text-lg text-purple-300 mb-1">Software Developer</p>
          <p className="text-sm text-gray-400 mb-3">
            25 years old • Zagreb, Croatia
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            Building modern web apps where performance meets great user
            experience.
          </p>
        </div>

        <div className="flex gap-3">
          <Link href="/cv">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:scale-105 transition-transform">
              View CV
            </button>
          </Link>
          <a
            href="mailto:grgo.penava@gmail.com"
            className="px-4 py-2 border border-purple-500/30 text-purple-300 text-sm font-medium rounded-lg hover:bg-purple-500/10 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
