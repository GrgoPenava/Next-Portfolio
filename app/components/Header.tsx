import BlurText from "../../components/BlurText";

interface HeaderProps {
  brightness: number;
}

export default function Header({ brightness }: HeaderProps) {
  return (
    <header className="mb-16">
      <h1 className="fade-in text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
        Grgo Penava
      </h1>

      <div className="fade-in flex items-center gap-2 mb-6">
        <div className="relative">
          <svg
            className="w-5 h-5 text-purple-400 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <div className="absolute -inset-1 bg-purple-400/20 rounded-full animate-ping"></div>
        </div>
        <span className="text-lg font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Zagreb, Croatia
        </span>
      </div>

      <BlurText
        text="Software developer with 2 years of experience in development."
        className="text-xl md:text-2xl leading-relaxed max-w-3xl text-gray-300 mb-8"
        delay={100}
        animateBy="words"
        direction="top"
        stepDuration={0.4}
        animationFrom={undefined}
        animationTo={undefined}
        onAnimationComplete={undefined}
      />

      <div className="fade-in">
        <a
          href="/Grgo-Penava-2025.pdf"
          download="Grgo-Penava-2025.pdf"
          className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-500 hover:to-pink-500"
        >
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="relative">
            Download CV
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-20"></div>
        </a>
      </div>
    </header>
  );
}
