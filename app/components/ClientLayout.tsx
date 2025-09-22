"use client";

import { useState, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);
  const { isLoading, loadingProgress, loadingText } = useResourceLoader({
    minLoadingTime: 2500, // Minimum 2.5 seconds loading time
    criticalResources,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loader immediately on client side, or while loading
  if (!isMounted || isLoading) {
    return <Loader progress={loadingProgress} loadingText={loadingText} />;
  }

  // Show main content once loading is complete
  return <>{children}</>;
}
