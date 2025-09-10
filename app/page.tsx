"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CursorIcon } from "./components/CursorIcon";

const LogoLoop: any = dynamic(
  () =>
    import("../components/LogoLoop").then((mod) => ({ default: mod.LogoLoop })),
  {
    ssr: false,
  }
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsProjectsModalOpen(false);
      setIsModalClosing(false);
    }, 300);
  };

  const projects = [
    {
      images: [
        "/TaskyProject.png",
        "/Tasky1.png",
        "/Tasky2.png",
        "/Tasky3.png",
        "/Tasky4.png",
        "/Tasky5.png",
        "/Tasky6.png",
        "/Tasky7.png",
        "/Tasky8.png",
        "/Tasky9.png",
      ],
      title: "Tasky - Task Management",
    },
    {
      images: [
        "/VsCodeProfilesProject.png",
        "/VSCodeProfile1.png",
        "/VSCodeProfile2.png",
        "/VSCodeProfile3.png",
        "/VSCodeProfile4.png",
        "/VSCodeProfile5.png",
        "/VSCodeProfile6.png",
        "/VSCodeProfile7.png",
        "/VSCodeProfile8.png",
        "/VSCodeProfile9.png",
      ],
      title: "VS Code Profiles",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately - cards are completely hidden
      gsap.set(".bento-card", {
        opacity: 0,
        scale: 0.4,
        rotation: (i) => gsap.utils.random(-20, 20),
        y: (i) => gsap.utils.random(50, 100),
        x: (i) => gsap.utils.random(-30, 30),
      });

      // Create main timeline
      const tl = gsap.timeline();

      // Dramatic entrance - cards appear and assemble
      tl.to(".bento-card", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.6,
          from: "random",
        },
      })

        // Quick bounce effect for extra impact
        .to(
          ".bento-card",
          {
            scale: 1.05,
            duration: 0.15,
            ease: "power2.out",
            stagger: {
              amount: 0.1,
              from: "center",
            },
          },
          "-=0.2"
        )

        // Settle back to normal
        .to(".bento-card", {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          stagger: {
            amount: 0.1,
            from: "center",
          },
        })

        // Start continuous floating animation
        .to(
          ".bento-card",
          {
            y: -4,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: {
              amount: 1.5,
              from: "random",
            },
          },
          "+=0.3"
        );
    });

    // Delayed ScrollTrigger refresh to avoid conflicts
    const refreshScrollTrigger = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        ScrollTrigger.refresh();
      }
    };

    refreshScrollTrigger();

    return () => {
      ctx.revert();
    };
  }, []);

  const techLogos = [
    {
      node: (
        <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium whitespace-nowrap">
          React
        </span>
      ),
      title: "React",
    },
    {
      node: (
        <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-xs font-medium whitespace-nowrap">
          Vue.js
        </span>
      ),
      title: "Vue.js",
    },
    {
      node: (
        <span className="px-2 py-1 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-xs font-medium whitespace-nowrap">
          TypeScript
        </span>
      ),
      title: "TypeScript",
    },
    {
      node: (
        <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300 text-xs font-medium whitespace-nowrap">
          Java
        </span>
      ),
      title: "Java",
    },
    {
      node: (
        <span className="px-2 py-1 bg-green-600/10 border border-green-600/20 rounded-full text-green-400 text-xs font-medium whitespace-nowrap">
          Spring Boot
        </span>
      ),
      title: "Spring Boot",
    },
    {
      node: (
        <span className="px-2 py-1 bg-green-700/10 border border-green-700/20 rounded-full text-green-500 text-xs font-medium whitespace-nowrap">
          Node.js
        </span>
      ),
      title: "Node.js",
    },
    {
      node: (
        <span className="px-2 py-1 bg-blue-700/10 border border-blue-700/20 rounded-full text-blue-500 text-xs font-medium whitespace-nowrap">
          Docker
        </span>
      ),
      title: "Docker",
    },
    {
      node: (
        <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-medium whitespace-nowrap">
          PostgreSQL
        </span>
      ),
      title: "PostgreSQL",
    },
    {
      node: (
        <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-300 text-xs font-medium whitespace-nowrap">
          JavaScript
        </span>
      ),
      title: "JavaScript",
    },
    {
      node: (
        <span className="px-2 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full text-gray-300 text-xs font-medium whitespace-nowrap">
          Next.js
        </span>
      ),
      title: "Next.js",
    },
    {
      node: (
        <span className="px-2 py-1 bg-green-400/10 border border-green-400/20 rounded-full text-green-200 text-xs font-medium whitespace-nowrap">
          Nuxt 3
        </span>
      ),
      title: "Nuxt 3",
    },
    {
      node: (
        <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-medium whitespace-nowrap">
          TailwindCSS
        </span>
      ),
      title: "TailwindCSS",
    },
    {
      node: (
        <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium whitespace-nowrap">
          GSAP
        </span>
      ),
      title: "GSAP",
    },
    {
      node: (
        <span className="px-2 py-1 bg-orange-600/10 border border-orange-600/20 rounded-full text-orange-400 text-xs font-medium whitespace-nowrap">
          Three.js
        </span>
      ),
      title: "Three.js",
    },
    {
      node: (
        <span className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-300 text-xs font-medium whitespace-nowrap">
          Apache Kafka
        </span>
      ),
      title: "Apache Kafka",
    },
    {
      node: (
        <span className="px-2 py-1 bg-blue-800/10 border border-blue-800/20 rounded-full text-blue-200 text-xs font-medium whitespace-nowrap">
          Jenkins
        </span>
      ),
      title: "Jenkins",
    },
    {
      node: (
        <span className="px-2 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-xs font-medium whitespace-nowrap">
          Ansible
        </span>
      ),
      title: "Ansible",
    },
    {
      node: (
        <span className="px-2 py-1 bg-gray-600/10 border border-gray-600/20 rounded-full text-gray-400 text-xs font-medium whitespace-nowrap">
          SQL Server
        </span>
      ),
      title: "SQL Server",
    },
    {
      node: (
        <span className="px-2 py-1 bg-yellow-600/10 border border-yellow-600/20 rounded-full text-yellow-400 text-xs font-medium whitespace-nowrap">
          JWT
        </span>
      ),
      title: "JWT",
    },
    {
      node: (
        <span className="px-2 py-1 bg-green-800/10 border border-green-800/20 rounded-full text-green-600 text-xs font-medium whitespace-nowrap">
          Playwright
        </span>
      ),
      title: "Playwright",
    },
    {
      node: (
        <span className="px-2 py-1 bg-gray-700/10 border border-gray-700/20 rounded-full text-gray-500 text-xs font-medium whitespace-nowrap">
          Git
        </span>
      ),
      title: "Git",
    },
    {
      node: (
        <span className="px-2 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-300 text-xs font-medium whitespace-nowrap">
          WebSocket
        </span>
      ),
      title: "WebSocket",
    },
    {
      node: (
        <span className="px-2 py-1 bg-blue-900/10 border border-blue-900/20 rounded-full text-blue-600 text-xs font-medium whitespace-nowrap">
          Supabase
        </span>
      ),
      title: "Supabase",
    },
    {
      node: (
        <span className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-xs font-medium whitespace-nowrap">
          Pinia
        </span>
      ),
      title: "Pinia",
    },
    {
      node: (
        <span className="px-2 py-1 bg-indigo-600/10 border border-indigo-600/20 rounded-full text-indigo-400 text-xs font-medium whitespace-nowrap">
          Prisma ORM
        </span>
      ),
      title: "Prisma ORM",
    },
    {
      node: (
        <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-xs font-medium whitespace-nowrap">
          MongoDB
        </span>
      ),
      title: "MongoDB",
    },
    {
      node: (
        <span className="px-2 py-1 bg-cyan-600/10 border border-cyan-600/20 rounded-full text-cyan-400 text-xs font-medium whitespace-nowrap">
          Go
        </span>
      ),
      title: "Go",
    },
    {
      node: (
        <span className="px-2 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-medium whitespace-nowrap">
          GCP
        </span>
      ),
      title: "Google Cloud Platform",
    },
    {
      node: (
        <span className="px-2 py-1 bg-green-900/10 border border-green-900/20 rounded-full text-green-700 text-xs font-medium whitespace-nowrap">
          Nginx
        </span>
      ),
      title: "Nginx",
    },
    {
      node: (
        <span className="px-2 py-1 bg-gray-800/10 border border-gray-800/20 rounded-full text-gray-600 text-xs font-medium whitespace-nowrap">
          Linux
        </span>
      ),
      title: "Linux",
    },
  ];

  return (
    <div className="relative min-h-screen p-6 flex items-center justify-center">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-fr">
          {/* Main Intro Card - Large */}
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

                <p className="text-lg text-purple-300 mb-1">
                  Software Developer
                </p>
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

          {/* Experience Card */}
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0h4l-4 4m0-4v4"
                  />
                </svg>
              </div>
              <p className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                2+
              </p>
              <p className="text-xs text-gray-400">Years Experience</p>
            </div>
          </div>

          {/* GitHub Stats Card */}
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

          {/* Location Card */}
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

          {/* Education Card */}
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
                    Master's Degree
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
                    Bachelor's Degree
                  </p>
                  <p className="text-xs text-gray-400">
                    FOI, University of Zagreb • 2019 - 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
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

          {/* Projects Card */}
          <div
            className="bento-card bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 cursor-pointer relative overflow-hidden"
            onClick={() => {
              setIsProjectsModalOpen(true);
              setSelectedImageIndex(0);
            }}
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

              {/* Custom Cursor with Pulsing Ring */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:scale-110 transition-all duration-300">
                  {/* Outer pulsing ring */}
                  <div className="absolute inset-0 w-12 h-12 border-2 border-white/30 rounded-full animate-ping"></div>
                  {/* Middle pulsing ring */}
                  <div className="absolute inset-0 w-10 h-10 border-2 border-white/50 rounded-full animate-pulse"></div>
                  {/* Inner ring */}
                  <div className="absolute inset-0 w-8 h-8 border-2 border-white/70 rounded-full"></div>
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

          {/* Tech Stack Card - Bottom */}
          <div className="bento-card md:col-span-4 lg:col-span-6 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl py-2 px-2 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 overflow-hidden h-fit">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={28}
              gap={12}
              pauseOnHover={true}
              fadeOut={false}
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Projects Modal */}
      {isProjectsModalOpen && (
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
              isModalClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
              isModalClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <div
              className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-xl font-bold text-white">
                    {projects[selectedProjectIndex]?.title}
                  </div>
                  <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-200">
                    {selectedImageIndex + 1} /{" "}
                    {projects[selectedProjectIndex]?.images.length}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-red-400"
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
              <div className="relative overflow-hidden">
                {/* Image Navigation Arrows */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev > 0
                        ? prev - 1
                        : projects[selectedProjectIndex]?.images.length - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-purple-200 transition-colors"
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
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev < projects[selectedProjectIndex]?.images.length - 1
                        ? prev + 1
                        : 0
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-purple-200 transition-colors"
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
                <div className="p-8">
                  <div className="max-w-4xl mx-auto">
                    {/* Current Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden mb-6 shadow-2xl border border-gray-700/50 group">
                      <img
                        key={`${selectedProjectIndex}-${selectedImageIndex}`}
                        src={
                          projects[selectedProjectIndex]?.images[
                            selectedImageIndex
                          ]
                        }
                        alt={`${
                          projects[selectedProjectIndex]?.title
                        } - Image ${selectedImageIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Selector Navigation */}
                <div className="p-6 bg-gradient-to-t from-gray-900/50 to-transparent border-t border-purple-500/10">
                  <div className="flex justify-center gap-4 mb-4">
                    {projects.map((project, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedProjectIndex(index);
                          setSelectedImageIndex(0);
                        }}
                        className={`aspect-video w-24 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
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
                  <div className="flex justify-center gap-2 overflow-x-auto max-w-4xl mx-auto">
                    {projects[selectedProjectIndex]?.images.map(
                      (image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`aspect-video w-16 rounded-lg overflow-hidden transition-all duration-300 border flex-shrink-0 ${
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
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
