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
        // Load critical resources
        const resourcePromises = criticalResources.map((resource, index) => {
          return preloadResource(resource).then(() => {
            if (isMounted) {
              const progress = ((index + 1) / criticalResources.length) * 80;
              setLoadingProgress(Math.min(progress, 80));
            }
          });
        });

        // Wait for all critical resources to load
        await Promise.allSettled(resourcePromises);

        if (!isMounted) return;

        // Ensure minimum loading time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        if (!isMounted) return;

        // Complete loading
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

  return { isLoading, loadingProgress };
}
