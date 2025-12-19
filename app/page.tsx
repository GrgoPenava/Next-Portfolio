"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainIntroCard } from "./components/MainIntroCard";
import {
  ExperienceCard,
  LocationCard,
  EducationCard,
  WorkExperienceCard,
} from "./components/BentoCards";
import { GitHubProfileCard } from "./components/GitHubProfileCard";
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
    const ctx = gsap.context(() => {});

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
    <div className="relative min-h-screen p-2 pb-24 sm:p-4 sm:pb-24 md:p-6 md:pb-6 flex items-center justify-center">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {/* Row 1: Main Intro (2) + (Experience + Location stacked) (1) + GitHub (3) = 6 */}
          <MainIntroCard />
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col gap-3">
            <ExperienceCard />
            <LocationCard />
          </div>
          {/* Projects Card - next to Experience/Location on mobile */}
          <div className="col-span-1 md:hidden">
            <ProjectsCard onClick={openProjectsModal} />
          </div>
          <GitHubProfileCard />

          {/* Row 2: Projects (desktop only) + Work Experience (2) + Education (3) = 6 */}
          <div className="hidden md:block md:col-span-1 lg:col-span-1">
            <ProjectsCard onClick={openProjectsModal} />
          </div>
          <WorkExperienceCard />
          <EducationCard />

          {/* Row 3: TechStack full width = 6 */}
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
