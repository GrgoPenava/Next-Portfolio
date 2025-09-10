import React from "react";

interface TechTagProps {
  children: React.ReactNode;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export const TechTag: React.FC<TechTagProps> = ({
  children,
  bgColor,
  borderColor,
  textColor,
}) => {
  return (
    <span
      className={`px-2 py-1 ${bgColor} border ${borderColor} rounded-full ${textColor} text-xs font-medium whitespace-nowrap`}
    >
      {children}
    </span>
  );
};
