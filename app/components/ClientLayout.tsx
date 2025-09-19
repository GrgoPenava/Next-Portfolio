"use client";

import { useState } from "react";
import Loader from "./Loader";
import { useResourceLoader } from "../hooks/useResourceLoader";

interface ClientLayoutProps {
  children: React.ReactNode;
}

// Critical resources that need to be preloaded
const criticalResources = [
  "/earth.glb",
  "/earthTexture.png",
  "/grgo_v1_nobg.png",
  "/gp-logo.svg",
  "/icons/github.svg",
  "/icons/linkedin.svg",
  "/icons/email.svg",
  "/icons/cv.svg",
  "/icons/home.svg",
  "/icons/location.svg",
  "/icons/building.svg",
  "/icons/graduation-cap.svg",
  "/icons/badge.svg",
  "/icons/monitor.svg",
];

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showLoader, setShowLoader] = useState(true);
  const { isLoading } = useResourceLoader({
    minLoadingTime: 2500, // Minimum 2.5 seconds loading time
    criticalResources,
  });

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  // Show loader while resources are loading
  if (showLoader && isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  // Show main content once loading is complete
  return <>{children}</>;
}
