"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import ThesesAndPapers from "../components/ThesesAndPapers";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CVPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6, // Faster animation (was 0.8)
          stagger: 0.01, // Faster stagger (was 0.1)
          ease: "power3.out",
          delay: 0.0001, // Less delay (was 0.2)
        }
      );

      (gsap.utils.toArray(".section-item") as Element[]).forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 15 }, // Less movement (was 20px)
          {
            opacity: 1,
            y: 0,
            duration: 0.5, // Faster animation (was 0.6)
            ease: "power2.out", // Smoother easing (was power3.out)
            scrollTrigger: {
              trigger: item,
              start: "top 95%", // Changed from 85% to 95% - triggers much earlier
              end: "bottom 5%", // Changed from 15% to 5% - more consistent
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-8 sm:py-12 md:py-16 mt-16 sm:mt-20 md:mt-24 xl:mt-12">
          <Header brightness={1} />

          <WorkExperience
            brightness={1}
            expandedItems={expandedItems}
            onToggleExpand={toggleExpand}
          />

          <Education brightness={1} />

          <Projects
            brightness={1}
            expandedItems={expandedItems}
            onToggleExpand={toggleExpand}
          />

          <ThesesAndPapers
            brightness={1}
            expandedItems={expandedItems}
            onToggleExpand={toggleExpand}
          />
        </div>
      </div>
    </div>
  );
}
