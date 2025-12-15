import React from "react";
import Image from "next/image";

export interface StatCardProps {
    value: string;
    label: string;
    iconPath: string;
    gradientFrom: string;
    gradientTo: string;
    hoverColor: string;
}

// Reusable StatCard component for single stat cards
export const StatCard: React.FC<StatCardProps> = ({ value, label, iconPath, gradientFrom, gradientTo, hoverColor }) => {
    return (
        <div className="bento-card col-span-1 md:col-span-1 lg:col-span-1 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 h-full flex items-center justify-center">
            <div className="text-center">
                <div className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center`}>
                    <Image
                        src={iconPath}
                        alt=""
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </div>
                <p className={`text-xl font-bold text-white group-hover:${hoverColor} transition-colors`}>
                    {value}
                </p>
                <p className="text-xs text-gray-400">{label}</p>
            </div>
        </div>
    );
};
