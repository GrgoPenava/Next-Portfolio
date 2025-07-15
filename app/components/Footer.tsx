import Image from "next/image";

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
      <div className="fade-in">
        <p
          className="mb-4 transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        >
          Contact me on:
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/grgo-penava/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              style={{
                filter: `invert(${1 - brightness})`,
                opacity: 0.7 + brightness * 0.3,
              }}
            />
          </a>

          <a
            href="https://github.com/GrgoPenava"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            title="GitHub"
          >
            <Image
              src="/github-icon.svg"
              alt="GitHub"
              width={24}
              height={24}
              style={{
                filter: `invert(${1 - brightness})`,
                opacity: 0.7 + brightness * 0.3,
              }}
            />
          </a>

          <a
            href="mailto:grgopenava00@gmail.com"
            className="transition-all duration-300 hover:scale-110"
            title="Email"
          >
            <Image
              src="/email-icon.svg"
              alt="Email"
              width={24}
              height={24}
              style={{
                filter: `invert(${1 - brightness})`,
                opacity: 0.7 + brightness * 0.3,
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
