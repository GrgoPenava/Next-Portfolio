import React from "react";
import Image from "next/image";

export interface InfoListItem {
    title: string;
    description: string;
    iconPath: string;
    gradientFrom: string;
    gradientTo: string;
    hoverColor: string;
}

export interface InfoListCardProps {
    items: InfoListItem[];
    colSpan?: string;
}

// Reusable InfoListItem component
const InfoListItem: React.FC<{ item: InfoListItem }> = ({ item }) => {
    return (
        <div className="flex items-center gap-3">
            <div
                className={`w-10 h-10 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} rounded-full flex items-center justify-center flex-shrink-0`}
            >
                <Image
                    src={item.iconPath}
                    alt=""
                    width={16}
                    height={16}
                    className="brightness-0 invert transition-all duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                />
            </div>
            <div>
                <p className={`font-semibold text-white group-hover:${item.hoverColor} transition-colors text-sm`}>
                    {item.title}
                </p>
                <p className="text-xs text-gray-400">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

// Reusable InfoListCard component
export const InfoListCard: React.FC<InfoListCardProps> = ({ items, colSpan = "col-span-2 md:col-span-2 lg:col-span-2" }) => {
    return (
        <div className={`bento-card ${colSpan} bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 h-full`}>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <InfoListItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
