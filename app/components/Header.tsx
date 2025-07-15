interface HeaderProps {
  brightness: number;
}

export default function Header({ brightness }: HeaderProps) {
  return (
    <header className="mb-16">
      <h1 className="fade-in text-5xl md:text-6xl font-bold mb-6 tracking-tight">
        Grgo Penava
      </h1>
      <p
        className="fade-in text-xl md:text-2xl leading-relaxed max-w-3xl transition-colors duration-500"
        style={{
          color: `rgba(${120 - brightness * 50}, ${120 - brightness * 50}, ${
            120 - brightness * 50
          }, 0.8)`,
        }}
      >
        Software developer with 2 years of experience in development.
      </p>
    </header>
  );
}
