import TechnologiesList from "./TechnologiesList";

interface ProjectsProps {
  brightness: number;
}

export default function Projects({ brightness }: ProjectsProps) {
  return (
    <section className="mb-16">
      <h2 className="fade-in text-3xl font-bold mb-8">Projects</h2>

      <div className="space-y-6">
        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/yourusername/ecommerce-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{
                color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
              }}
            >
              E-commerce platforma →
            </a>
          </h3>
          <p
            className="mb-3 transition-colors duration-500"
            style={{
              color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
                80 - brightness * 40
              }, 0.9)`,
            }}
          >
            Full-stack e-commerce rješenje s Next.js, Stripe integracijom i
            MongoDB bazom podataka.
          </p>
          <TechnologiesList
            technologies={["Next.js", "Stripe", "MongoDB"]}
            brightness={brightness}
            showLabel={false}
          />
        </div>

        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/yourusername/task-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{
                color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
              }}
            >
              Task Management App →
            </a>
          </h3>
          <p
            className="mb-3 transition-colors duration-500"
            style={{
              color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
                80 - brightness * 40
              }, 0.9)`,
            }}
          >
            React aplikacija za upravljanje zadacima s real-time suradnjom i
            Socket.io integracijom.
          </p>
          <TechnologiesList
            technologies={["React", "Node.js", "Socket.io"]}
            brightness={brightness}
            showLabel={false}
          />
        </div>

        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{
                color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
              }}
            >
              Portfolio website →
            </a>
          </h3>
          <p
            className="mb-3 transition-colors duration-500"
            style={{
              color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
                80 - brightness * 40
              }, 0.9)`,
            }}
          >
            Minimalistička portfolio stranica s GSAP animacijama i interaktivnim
            elementima.
          </p>
          <TechnologiesList
            technologies={["Next.js", "GSAP", "TailwindCSS"]}
            brightness={brightness}
            showLabel={false}
          />
        </div>
      </div>
    </section>
  );
}
