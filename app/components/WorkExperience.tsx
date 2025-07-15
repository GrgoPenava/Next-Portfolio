import ExpandableText from "./ExpandableText";

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
  return (
    <section className="mb-16">
      <h2 className="fade-in text-3xl font-bold mb-8">Work experience</h2>

      <div className="space-y-8">
        <div className="section-item">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold">Software Developer</h3>
              <p
                className="font-medium transition-colors duration-300"
                style={{
                  color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                }}
              >
                <a
                  href="https://www.7pay.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  7 Payments
                </a>
              </p>
            </div>
            <span
              className="text-sm transition-colors duration-500"
              style={{
                color: `rgba(${100 - brightness * 30}, ${
                  100 - brightness * 30
                }, ${100 - brightness * 30}, 0.7)`,
              }}
            >
              2024–Now
            </span>
          </div>
          <ExpandableText
            text="Backend system development for a FinTech company: • Designed and developed RESTful APIs using Spring Boot • Upgraded and maintained an existing Java-based system (both backend and frontend) • Integrated multiple backend services for cross-system communication • Deployed services across different environments using Jenkins and Ansible • Performed database schema upgrades and wrote custom SQL scripts • Worked with Apache Kafka for real-time data streaming and service communication Technologies used: Java, Spring Boot, Apache Kafka, Jenkins, Ansible, Docker, Microsoft SQL Server, Maven"
            itemId="7-payments"
            maxLength={100}
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
          />
        </div>

        <div className="section-item">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold">Frontend Developer</h3>
              <p
                className="font-medium transition-colors duration-300"
                style={{
                  color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                }}
              >
                <a
                  href="https://www.mobilisis.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  SICK Mobilisis
                </a>
              </p>
            </div>
            <span
              className="text-sm transition-colors duration-500"
              style={{
                color: `rgba(${100 - brightness * 30}, ${
                  100 - brightness * 30
                }, ${100 - brightness * 30}, 0.7)`,
              }}
            >
              2023-2024
            </span>
          </div>
          <ExpandableText
            text="Web application development: • Developed a UI editor for a Croatian highway infrastructure project • Implemented real-time robot control and map visualization using WebSockets • Collaborated on building user interfaces for managing smart devices Technologies used: Vue.js, TypeScript, Tailwind CSS, Git, REST API, WebSocket"
            itemId="sick-mobilisis"
            maxLength={100}
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
          />
        </div>
      </div>
    </section>
  );
}
