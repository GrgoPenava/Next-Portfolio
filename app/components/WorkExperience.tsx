import ExpandableText from "./ExpandableText";
import {
  getSubtitleColor,
  getTextColor,
  useBackgroundAwareColors,
  getBlueColor,
} from "../utils/colorUtils";

interface WorkExperienceProps {
  brightness: number;
  expandedItems: Record<string, boolean>;
  onToggleExpand: (itemId: string) => void;
}

export default function WorkExperience({
  brightness,
  expandedItems,
  onToggleExpand,
}: WorkExperienceProps) {
  useBackgroundAwareColors();

  return (
    <section className="mb-16">
      <h2
        className="fade-in text-3xl font-bold mb-8 transition-colors duration-500"
        style={{
          color: getTextColor(brightness),
        }}
      >
        Work experience
      </h2>

      <div className="space-y-8">
        <div className="section-item">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3
                className="text-2xl font-semibold transition-colors duration-500"
                style={{
                  color: getTextColor(brightness),
                }}
              >
                Software Developer
              </h3>
              <p
                className="font-medium transition-colors duration-300"
                style={{
                  color: getBlueColor(),
                }}
              >
                <a
                  href="https://www.7pay.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: getBlueColor(),
                  }}
                >
                  7 Payments
                </a>
              </p>
            </div>
            <span
              className="text-sm transition-colors duration-500"
              style={{
                color: getSubtitleColor(brightness),
              }}
            >
              2024–Now
            </span>
          </div>
          <ExpandableText
            text="Backend system development for a FinTech company focused on creating scalable and reliable financial services."
            itemId="7-payments"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "Designed and developed RESTful APIs using Spring Boot",
              "Upgraded and maintained an existing Java-based system (both backend and frontend)",
              "Integrated multiple backend services for cross-system communication",
              "Deployed services across different environments using Jenkins and Ansible",
              "Performed database schema upgrades and wrote custom SQL scripts",
              "Worked with Apache Kafka for real-time data streaming and service communication",
            ]}
            technologies={[
              "Java",
              "JavaScript",
              "Spring Boot",
              "Apache Kafka",
              "Jenkins",
              "Ansible",
              "Docker",
              "Microsoft SQL Server",
              "Maven",
            ]}
          />
        </div>

        <div className="section-item">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3
                className="text-2xl font-semibold transition-colors duration-500"
                style={{
                  color: getTextColor(brightness),
                }}
              >
                Frontend Developer
              </h3>
              <p
                className="font-medium transition-colors duration-300"
                style={{
                  color: getBlueColor(),
                }}
              >
                <a
                  href="https://www.mobilisis.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: getBlueColor(),
                  }}
                >
                  SICK Mobilisis
                </a>
              </p>
            </div>
            <span
              className="text-sm transition-colors duration-500"
              style={{
                color: getSubtitleColor(brightness),
              }}
            >
              2023-2024
            </span>
          </div>
          <ExpandableText
            text="Web application development for infrastructure monitoring and smart device management systems."
            itemId="sick-mobilisis"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "Developed a UI editor for a Croatian highway infrastructure project",
              "Implemented real-time robot control and map visualization using WebSockets",
              "Collaborated on building user interfaces for managing smart devices",
            ]}
            technologies={[
              "Vue.js",
              "TypeScript",
              "Tailwind CSS",
              "JWT",
              "Postman",
              "Playwright",
              "Git",
              "REST API",
              "WebSocket",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
