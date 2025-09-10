import React from "react";

export interface DockItem {
  iconName: string;
  icon?: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
  className?: string;
}

export const dockItems: DockItem[] = [
  {
    iconName: "home",
    label: "Home",
    href: "/",
    className: "text-white hover:text-purple-400",
  },
  {
    iconName: "cv",
    label: "CV",
    href: "/cv",
    className: "text-white hover:text-purple-400",
  },
  {
    iconName: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/grgo-penava/",
    external: true,
    className: "text-white hover:text-blue-400",
  },
  {
    iconName: "github",
    label: "GitHub",
    href: "https://github.com/GrgoPenava",
    external: true,
    className: "text-white hover:text-gray-400",
  },
  {
    iconName: "email",
    label: "Email",
    href: "mailto:grgopenava00@gmail.com",
    className: "text-white hover:text-red-400",
  },
];
