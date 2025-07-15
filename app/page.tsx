"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimePicker from "./components/TimePicker";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ThesesAndPapers from "./components/ThesesAndPapers";
import Footer from "./components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("12:00");
  const [brightness, setBrightness] = useState(1);
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
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.utils.toArray(".section-item").forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const handleTimeChange = (time: string, newBrightness: number) => {
    setCurrentTime(time);
    setBrightness(newBrightness);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500 overflow-x-hidden"
      style={{
        backgroundColor: "var(--time-bg-light, #ffffff)",
        color: "var(--time-text-light, #111111)",
      }}
    >
      <TimePicker onTimeChange={handleTimeChange} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Header brightness={brightness} />

        <WorkExperience
          brightness={brightness}
          expandedItems={expandedItems}
          onToggleExpand={toggleExpand}
        />

        <Education brightness={brightness} />

        <Projects brightness={brightness} />

        <ThesesAndPapers
          brightness={brightness}
          expandedItems={expandedItems}
          onToggleExpand={toggleExpand}
        />

        <Footer brightness={brightness} />
      </div>
    </div>
  );
}
