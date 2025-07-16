interface ExternalLinkIconProps {
  size?: number;
  className?: string;
}

export default function ExternalLinkIcon({
  size = 16,
  className = "",
}: ExternalLinkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
