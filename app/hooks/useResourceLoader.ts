"use client";

import { useEffect, useState } from "react";

interface ResourceLoaderOptions {
  minLoadingTime?: number; // Minimum loading time in ms
  criticalResources?: string[]; // Critical resources to preload
}

export function useResourceLoader(options: ResourceLoaderOptions = {}) {
  const { minLoadingTime = 2000, criticalResources = [] } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    };

    const preloadResource = async (resource: string): Promise<void> => {
      try {
        if (resource.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
          await preloadImage(resource);
        } else {
          // For other resources, we can use fetch
          await fetch(resource, { method: "HEAD" });
        }
      } catch (error) {
        console.warn(`Failed to preload resource: ${resource}`, error);
      }
    };

    const loadResources = async () => {
      if (!isMounted) return;

      try {
        // Set initial loading text
        if (isMounted) {
          setLoadingText("Initializing...");
          setLoadingProgress(10);
        }

        // Load critical resources sequentially for better progress tracking
        for (let i = 0; i < criticalResources.length; i++) {
          const resource = criticalResources[i];
          if (!isMounted) break;

          try {
            await preloadResource(resource);

            if (isMounted) {
              const progress = 10 + ((i + 1) / criticalResources.length) * 70;
              setLoadingProgress(Math.min(progress, 80));

              // Update loading text based on progress
              if (progress < 30) {
                setLoadingText("Loading assets...");
              } else if (progress < 60) {
                setLoadingText("Setting up 3D scene...");
              } else if (progress < 80) {
                setLoadingText("Preparing animations...");
              }

              // Small delay to make progress visible
              await new Promise((resolve) => setTimeout(resolve, 100));
            }
          } catch (error) {
            console.warn(`Failed to load resource: ${resource}`, error);
          }
        }

        if (!isMounted) return;

        // Ensure minimum loading time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        if (remainingTime > 0) {
          setLoadingText("Almost ready...");
          setLoadingProgress(90);
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        if (!isMounted) return;

        // Complete loading
        setLoadingText("Complete!");
        setLoadingProgress(100);

        // Small delay before hiding loader
        setTimeout(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        }, 500);
      } catch (error) {
        console.error("Error loading resources:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadResources();

    return () => {
      isMounted = false;
    };
  }, [minLoadingTime, criticalResources]);

  return { isLoading, loadingProgress, loadingText };
}
