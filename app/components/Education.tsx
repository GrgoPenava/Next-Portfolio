import Image from "next/image";

interface EducationProps {
  brightness: number;
}

export default function Education({ brightness }: EducationProps) {
  return (
    <section className="mb-16">
      <h2 className="fade-in text-3xl font-bold mb-8">Education</h2>

      <div className="section-item">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold">
              Faculty of Organization and Informatics
            </h3>
            <p
              className="font-medium transition-colors duration-300"
              style={{
                color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
              }}
            >
              University of Zagreb
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Image
                src="/graduation-cap.png"
                alt="Graduation cap"
                width={16}
                height={16}
                className="transition-all duration-300"
                style={{
                  opacity: 0.7 + brightness * 0.3,
                  filter: `invert(${1 - brightness})`,
                }}
              />
              <p
                className="transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                Master's degree - Information and programming engineering
              </p>
            </div>
          </div>
          <span
            className="text-sm transition-colors duration-500"
            style={{
              color: `rgba(${100 - brightness * 30}, ${
                100 - brightness * 30
              }, ${100 - brightness * 30}, 0.7)`,
            }}
          >
            2023–2025
          </span>
        </div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        ></p>
      </div>

      <div className="section-item">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold">
              Faculty of Organization and Informatics
            </h3>
            <p
              className="font-medium transition-colors duration-300"
              style={{
                color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
              }}
            >
              University of Zagreb
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Image
                src="/graduation-cap.png"
                alt="Graduation cap"
                width={16}
                height={16}
                className="transition-all duration-300"
                style={{
                  opacity: 0.7 + brightness * 0.3,
                  filter: `invert(${1 - brightness})`,
                }}
              />
              <p
                className="transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                Bachelor's degree - Information systems
              </p>
            </div>
          </div>
          <span
            className="text-sm transition-colors duration-500"
            style={{
              color: `rgba(${100 - brightness * 30}, ${
                100 - brightness * 30
              }, ${100 - brightness * 30}, 0.7)`,
            }}
          >
            2019–2023
          </span>
        </div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        ></p>
      </div>
    </section>
  );
}
