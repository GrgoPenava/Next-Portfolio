"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";

import "./Dock.css";

function DockItem({
  children,
  className = "",
  href,
  external,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  router,
  onItemClick,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const handleClick = () => {
    if (href) {
      if (external) {
        // Use window.location.href for better mobile compatibility
        // This opens in the same tab but maintains proper navigation history
        window.location.href = href;
      } else {
        // Use Next.js router for internal navigation
        router.push(href);
      }
    }
    // Reset hover state after click for mobile devices
    onItemClick();
  };

  // Prefetch internal links on hover
  const handleMouseEnter = () => {
    if (href && !external) {
      router.prefetch(href);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => {
        isHovered.set(1);
        handleMouseEnter();
      }}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onTouchStart={(e) => {
        e.stopPropagation();
        isHovered.set(1);
        handleMouseEnter();
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
        // Don't reset immediately on touch end, let the click handler do it
      }}
      onClick={handleClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      if (latest === 1) {
        setIsVisible(true);
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        // Set timeout to hide label after 2 seconds on mobile devices
        // Shorter timeout for mobile devices (1.5s) vs desktop (2s)
        const isMobile =
          typeof window !== "undefined" && window.innerWidth < 768;
        const timeoutDuration = isMobile ? 1500 : 2000;

        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, timeoutDuration);
      } else {
        // Clear timeout if hover ends before timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
      }
    });
    return () => {
      unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // Function to reset hover state after click (for mobile devices)
  const handleItemClick = () => {
    // Small delay to allow the click animation to complete
    setTimeout(() => {
      isHovered.set(0);
      mouseX.set(Infinity);
    }, 100);
  };

  // Handle touch events for mobile devices
  const handleTouchStart = (e) => {
    e.preventDefault();
    isHovered.set(1);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    // Reset hover state after touch ends
    setTimeout(() => {
      isHovered.set(0);
      mouseX.set(Infinity);
    }, 150);
  };

  // Reset hover state when route changes (for mobile devices)
  useEffect(() => {
    // Reset hover state when navigating to a new page
    isHovered.set(0);
    mouseX.set(Infinity);
  }, [pathname, isHovered, mouseX]);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="dock-outer"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            href={item.href}
            external={item.external}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            router={router}
            onItemClick={handleItemClick}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
