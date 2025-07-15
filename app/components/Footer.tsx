interface FooterProps {
  brightness: number;
}

export default function Footer({ brightness }: FooterProps) {
  return (
    <footer
      className="border-t pt-8 transition-colors duration-500"
      style={{
        borderColor: `rgba(${150 + brightness * 50}, ${
          150 + brightness * 50
        }, ${150 + brightness * 50}, 0.3)`,
      }}
    >
      <p
        className="fade-in mb-4 transition-colors duration-500"
        style={{
          color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
            80 - brightness * 40
          }, 0.9)`,
        }}
      >
        Contact me on:{" "}
        <a
          href="https://www.linkedin.com/in/grgo-penava/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{
            color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
          }}
        >
          LinkedIn-u
        </a>
        ,{" "}
        <a
          href="https://github.com/GrgoPenava"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{
            color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
          }}
        >
          GitHub-u
        </a>
        {" and "}
        <a
          href="mailto:grgopenava00@gmail.com"
          className="transition-colors duration-300"
          style={{
            color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
          }}
        >
          Email.
        </a>
      </p>
    </footer>
  );
}
