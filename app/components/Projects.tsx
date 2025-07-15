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
          <div className="flex flex-wrap gap-2">
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              Next.js
            </span>
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              Stripe
            </span>
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              MongoDB
            </span>
          </div>
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
          <div className="flex flex-wrap gap-2">
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              React
            </span>
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              Node.js
            </span>
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              Socket.io
            </span>
          </div>
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
          <div className="flex flex-wrap gap-2">
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              Next.js
            </span>
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              GSAP
            </span>
            <span
              className="px-2 py-1 rounded text-sm transition-colors duration-500"
              style={{
                backgroundColor: `rgba(${200 + brightness * 55}, ${
                  200 + brightness * 55
                }, ${200 + brightness * 55}, 0.3)`,
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
