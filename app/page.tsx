"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainIntroCard } from "./components/MainIntroCard";
import {
  ExperienceCard,
  GitHubStatsCard,
  LocationCard,
  EducationCard,
  WorkExperienceCard,
} from "./components/BentoCards";
import { ProjectsCard } from "./components/ProjectsCard";
import { TechStackCard } from "./components/TechStackCard";
import { ProjectsModal } from "./components/ProjectsModal";
import { projects } from "./data/projects";

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

  const handleProjectSelect = (index: number) => {
    setSelectedProjectIndex(index);
    setSelectedImageIndex(0);
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleImageNavigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSelectedImageIndex((prev) =>
        prev > 0 ? prev - 1 : projects[selectedProjectIndex]?.images.length - 1
      );
    } else {
      setSelectedImageIndex((prev) =>
        prev < projects[selectedProjectIndex]?.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const openProjectsModal = () => {
    setIsProjectsModalOpen(true);
    setSelectedImageIndex(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately - cards are completely hidden
      gsap.set(".bento-card", {
        opacity: 0,
        scale: 0.4,
        rotation: (_i) => gsap.utils.random(-20, 20),
        y: (_i) => gsap.utils.random(50, 100),
        x: (_i) => gsap.utils.random(-30, 30),
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

  return (
    <div className="relative min-h-screen p-6 flex items-center justify-center">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-fr">
          {/* Main Intro Card - Large */}
          <MainIntroCard />

          {/* Experience Card */}
          <ExperienceCard />

          {/* GitHub Stats Card */}
          <GitHubStatsCard />

          {/* Location Card */}
          <LocationCard />

          {/* Education Card */}
          <EducationCard />

          {/* Work Experience Card */}
          <WorkExperienceCard />

          {/* Projects Card */}
          <ProjectsCard onClick={openProjectsModal} />

          {/* Tech Stack Card - Bottom */}
          <TechStackCard />
        </div>
      </div>

      {/* Projects Modal */}
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        isClosing={isModalClosing}
        onClose={closeModal}
        projects={projects}
        selectedProjectIndex={selectedProjectIndex}
        selectedImageIndex={selectedImageIndex}
        onProjectSelect={handleProjectSelect}
        onImageSelect={handleImageSelect}
        onImageNavigate={handleImageNavigate}
      />
    </div>
  );
}
