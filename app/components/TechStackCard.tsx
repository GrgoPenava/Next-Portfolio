import React from "react";
import dynamic from "next/dynamic";
import { techLogos } from "../data/techLogos";

const LogoLoop: any = dynamic(
  () =>
    import("../../components/LogoLoop").then((mod) => ({
      default: mod.LogoLoop,
    })),
  {
    ssr: false,
  }
);

export const TechStackCard: React.FC = () => {
  return (
    <div className="bento-card md:col-span-4 lg:col-span-6 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl py-2 px-2 group hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 overflow-hidden h-fit">
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={28}
        gap={12}
        pauseOnHover={true}
        fadeOut={false}
        className="h-10"
      />
    </div>
  );
};
