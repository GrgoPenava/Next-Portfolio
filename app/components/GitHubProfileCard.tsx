"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
  bio: string | null;
}

interface GitHubRepo {
  stargazers_count: number;
  language: string | null;
}

interface GitHubStats {
  user: GitHubUser | null;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
  loading: boolean;
  error: string | null;
}

const GITHUB_USERNAME = "GrgoPenava";

export const GitHubProfileCard: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats>({
    user: null,
    totalStars: 0,
    topLanguages: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData: GitHubUser = await userResponse.json();
        const reposData: GitHubRepo[] = await reposResponse.json();

        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Calculate top languages
        const languageCounts: Record<string, number> = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(languageCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([name, count]) => ({ name, count }));

        setStats({
          user: userData,
          totalStars,
          topLanguages,
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : "Unknown error",
        }));
      }
    };

    fetchGitHubData();
  }, []);

  if (stats.loading) {
    return (
      <div className="bento-card col-span-2 md:col-span-2 lg:col-span-3 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (stats.error || !stats.user) {
    return (
      <div className="bento-card col-span-2 md:col-span-2 lg:col-span-3 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 h-full">
        <div className="text-center text-gray-400 flex items-center justify-center h-full">
          <p>Unable to load GitHub data</p>
        </div>
      </div>
    );
  }

  const { user, totalStars, topLanguages } = stats;

  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card col-span-2 md:col-span-2 lg:col-span-3 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 block cursor-pointer h-full"
    >
      {/* Header with Avatar and Username */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={48}
            height={48}
            className="rounded-full ring-2 ring-purple-500/30 group-hover:ring-purple-400/50 transition-all"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center ring-2 ring-black/50">
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={12}
              height={12}
              className="brightness-0 invert"
            />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold group-hover:text-purple-200 transition-colors">
            @{user.login}
          </h3>
          <p className="text-xs text-gray-400">GitHub Profile</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <StatItem value={user.public_repos} label="Repos" />
        <StatItem value={user.followers} label="Followers" />
        <StatItem value={user.following} label="Following" />
        <StatItem value={totalStars} label="Stars" />
      </div>

      {/* Top Languages */}
      {topLanguages.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-gray-400 font-medium">Top Languages</p>
          <div className="flex flex-wrap gap-1.5">
            {topLanguages.map((lang) => (
              <span
                key={lang.name}
                className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* View Profile Link */}
      <div className="mt-4 pt-3 border-t border-purple-500/10">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">
            Member since {new Date(user.created_at).getFullYear()}
          </span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1">
            View Profile
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

const StatItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-lg font-bold text-white">{value}</p>
    <p className="text-[10px] text-gray-400">{label}</p>
  </div>
);
