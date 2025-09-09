"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  useEffect(() => {
    // Refresh ScrollTrigger for Earth3D component
    setTimeout(async () => {
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        ScrollTrigger.refresh();
        console.log("ScrollTrigger refreshed on HomePage mount");
      }
    }, 200);

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 1.1,
        }
      );

      gsap.fromTo(
        ".cv-button",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 1.4,
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="hero-title text-6xl font-bold text-white mb-6">
          Dobrodošli!
        </h1>

        <p className="hero-subtitle text-2xl text-gray-300 mb-8">
          Ja sam Grgo Penava
        </p>

        <p className="hero-description text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Dobrodošli na moj portfolio sajt. Ovde možete saznati više o mojoj
          karijeri, projektima i iskustvu kroz moj detaljni CV.
        </p>

        <Link href="/cv">
          <button className="cv-button bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Pogledajte moj CV
          </button>
        </Link>
      </div>
    </div>
  );
}
