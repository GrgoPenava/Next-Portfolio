import ExpandableText from "./ExpandableText";
import LaserCard from "./LaserCard";

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
      <h2 className="fade-in text-3xl font-bold mb-8 transition-colors duration-500 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
        Work experience
      </h2>

      <div className="space-y-8">
        <LaserCard
          className="section-item p-6 rounded-lg bg-black/20 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300"
          backgroundImageUrl="/7pay.svg"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-white text-2xl font-semibold transition-colors duration-500 group-hover:text-purple-300">
                Software Developer
              </h3>
              <p className="font-medium transition-colors duration-300 text-purple-400">
                <a
                  href="https://www.7pay.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  7 Payments
                </a>
              </p>
            </div>
            <span className="text-sm transition-colors duration-500 text-gray-400">
              2024–Now
            </span>
          </div>
          <ExpandableText
            text="Backend system development for a FinTech company."
            itemId="7-payments"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "Designed and developed RESTful APIs using Spring Boot",
              "Upgraded and maintained an existing Java-based system (both backend and frontend)",
              "Worked with Apache Kafka for real-time data streaming and service communication",
              "Optimized Spring Boot service to efficiently handle and fetch large volumes of data.",
              "Deployed services across different environments using Jenkins and Ansible",
              "Integrated multiple backend services for cross-system communication",
            ]}
            technologies={[
              "Spring Boot",
              "Java",
              "JavaScript",
              "Apache Kafka",
              "Jenkins",
              "Ansible",
              "Docker",
              "Microsoft SQL Server",
              "Maven",
            ]}
          />
        </LaserCard>

        <LaserCard
          className="section-item p-6 rounded-lg bg-black/20 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300"
          backgroundImageUrl="/sick-mobilisis.svg"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold transition-colors duration-500 text-white group-hover:text-purple-300">
                Frontend Developer
              </h3>
              <p className="font-medium transition-colors duration-300 text-purple-400">
                <a
                  href="https://www.mobilisis.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  SICK Mobilisis
                </a>
              </p>
            </div>
            <span className="text-sm transition-colors duration-500 text-gray-400">
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
        </LaserCard>
      </div>
    </section>
  );
}
