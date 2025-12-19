import React from "react";
import { StatCard } from "./StatCard";
import { InfoListCard, InfoListItem } from "./InfoListCard";

export const ExperienceCard: React.FC = () => {
    return (
        <StatCard
            value="2+"
            label="Years Experience"
            iconPath="/icons/badge.svg"
            gradientFrom="from-purple-500"
            gradientTo="to-pink-500"
            hoverColor="text-purple-200"
        />
    );
};

export const GitHubStatsCard: React.FC = () => {
    return (
        <StatCard
            value="15+"
            label="GitHub Repos"
            iconPath="/icons/github.svg"
            gradientFrom="from-gray-600"
            gradientTo="to-gray-800"
            hoverColor="text-gray-200"
        />
    );
};

export const LocationCard: React.FC = () => {
    return (
        <StatCard
            value="Zagreb"
            label="Croatia"
            iconPath="/icons/location.svg"
            gradientFrom="from-pink-500"
            gradientTo="to-rose-500"
            hoverColor="text-pink-200"
        />
    );
};

export const EducationCard: React.FC = () => {
    const educationItems: InfoListItem[] = [
        {
            title: "Master's Degree",
            description: "FOI, University of Zagreb • 2023 - 2025",
            iconPath: "/icons/graduation-cap.svg",
            gradientFrom: "from-green-500",
            gradientTo: "to-emerald-500",
            hoverColor: "text-green-200"
        },
        {
            title: "Bachelor's Degree",
            description: "FOI, University of Zagreb • 2019 - 2023",
            iconPath: "/icons/graduation-cap.svg",
            gradientFrom: "from-blue-500",
            gradientTo: "to-indigo-500",
            hoverColor: "text-blue-200"
        }
    ];

    return <InfoListCard items={educationItems} colSpan="col-span-2 md:col-span-2 lg:col-span-3" />;
};

export const WorkExperienceCard: React.FC = () => {
    const workExperienceItems: InfoListItem[] = [
        {
            title: "7 Payments",
            description: "Software Developer • 2024 - Present",
            iconPath: "/icons/building.svg",
            gradientFrom: "from-orange-500",
            gradientTo: "to-red-500",
            hoverColor: "text-orange-200"
        },
        {
            title: "SICK Mobilisis",
            description: "Frontend Developer • 2023 - 2024",
            iconPath: "/icons/monitor.svg",
            gradientFrom: "from-cyan-500",
            gradientTo: "to-teal-500",
            hoverColor: "text-cyan-200"
        }
    ];

    return <InfoListCard items={workExperienceItems} />;
};
