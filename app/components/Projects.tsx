import ExpandableText from "./ExpandableText";
import ExternalLinkIcon from "./ExternalLinkIcon";
import {
  getSubtitleColor,
  getTextColor,
  useBackgroundAwareColors,
  getBlueColor,
} from "../utils/colorUtils";

interface ProjectsProps {
  brightness: number;
  expandedItems: Record<string, boolean>;
  onToggleExpand: (itemId: string) => void;
}

export default function Projects({
  brightness,
  expandedItems,
  onToggleExpand,
}: ProjectsProps) {
  useBackgroundAwareColors();

  return (
    <section className="mb-16">
      <h2
        className="fade-in text-3xl font-bold mb-8 transition-colors duration-500"
        style={{
          color: getTextColor(brightness),
        }}
      >
        Projects
      </h2>

      <div className="space-y-8">
        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/GrgoPenava/tasky-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              Tasky Web Application
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            Master&apos;s Thesis Project
          </p>
          <ExpandableText
            text="Full-stack web application for team management and task delegation, developed as part of Master's thesis to demonstrate modern web development practices using Vue.js."
            itemId="tasky-project"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "User registration and authentication system using Supabase Auth",
              "Team creation and member management functionality",
              "Task creation, assignment, and delegation within teams",
              "Drag & Drop interface for task status management across different columns",
              "Real-time team communication using WebSocket technology",
              "State management implementation with Pinia store",
              "RESTful Backend API with endpoint security and Prisma ORM integration",
              "Interactive API documentation with Swagger UI",
              "Responsive design using Shadcn UI component library and TailwindCSS",
              "Complete deployment on VPS with custom domain, HTTPS, Nginx, and Linux",
            ]}
            technologies={[
              "Vue.js",
              "TypeScript",
              "JavaScript",
              "Supabase",
              "Pinia",
              "Prisma ORM",
              "Swagger UI",
              "Shadcn UI",
              "TailwindCSS",
              "WebSocket",
              "Nginx",
              "Linux",
            ]}
          />
          <div className="mt-3 flex gap-3 text-sm">
            <a
              href="https://github.com/GrgoPenava/tasky-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-1"
              style={{
                color: getBlueColor(),
              }}
            >
              Frontend
              <ExternalLinkIcon size={12} />
            </a>
            <a
              href="https://github.com/GrgoPenava/tasky-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-1"
              style={{
                color: getBlueColor(),
              }}
            >
              Backend
              <ExternalLinkIcon size={12} />
            </a>
            <a
              href="https://github.com/GrgoPenava/Master-s-thesis"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-1"
              style={{
                color: getBlueColor(),
              }}
            >
              Thesis
              <ExternalLinkIcon size={12} />
            </a>
          </div>
        </div>

        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/GrgoPenava/Next-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              Personal Portfolio Website
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            Personal Project
          </p>
          <ExpandableText
            text="Minimalist portfolio website featuring dynamic time-based theming, 3D interactive elements, and modern animations to showcase professional experience and projects."
            itemId="portfolio-project"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "Dynamic time-based theme system with brightness calculations based on time of day",
              "Interactive 3D Earth model with texture mapping",
              "Modular component architecture with reusable components",
              "Smooth GSAP animations",
              "Expandable content sections",
              "Responsive design",
            ]}
            technologies={[
              "Next.js",
              "React",
              "TypeScript",
              "TailwindCSS",
              "GSAP",
              "Three.js",
            ]}
          />
        </div>

        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/GrgoPenava/VsCodeProfiles-Nuxt"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              VS Code Profiles Platform
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            Personal Project
          </p>
          <ExpandableText
            text="Full-stack web platform for sharing and discovering VS Code configurations, extensions, and themes, enabling developers to share their development environments with the community."
            itemId="vscode-profiles-project"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "User authentication and authorization system with JWT tokens",
              "User profile management with S3-stored avatars using MinIO",
              "Multi-language support for Croatian and English localization",
              "Light and dark theme switching functionality",
              "Complete CRUD operations for VS Code profile management",
              "Rating system with like and dislike functionality",
              "Comment system for community engagement",
              "Advanced search and filtering capabilities for profiles",
              "Admin interface for comprehensive user management",
              "Containerized deployment with Docker and Docker Compose",
            ]}
            technologies={[
              "Nuxt 3",
              "Vue 3",
              "TypeScript",
              "TailwindCSS",
              "Prisma ORM",
              "PostgreSQL",
              "JWT",
              "MinIO S3",
              "Zod",
              "Docker",
              "Docker Compose",
            ]}
          />
        </div>

        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/orgs/TechTitans-AiR/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              FinTech Application
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            Work-based Learning Project
          </p>
          <ExpandableText
            text="Mobile application development project in collaboration with Sedam IT company, creating a android application for merchants using SCRUM methodology and modern backend technologies."
            itemId="trading-app-project"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "Collaborated with Sedam IT company using SCRUM methodology",
              "Utilized project management tools including Jira and Confluence",
              "Developed Java REST API for mobile application backend",
              "Built microservices architecture using Python and Go languages",
              "Implemented automated deployment pipeline for backend services on Google Cloud Platform",
              "Worked as part of a development team following agile practices",
              "Focused on scalable and maintainable backend architecture design",
            ]}
            technologies={[
              "Java",
              "Spring Boot",
              "Google Cloud Platform",
              "Docker",
              "Bash",
              "Maven",
              "MongoDB",
              "Python",
              "Go",
              "Jira",
              "Confluence",
            ]}
          />
        </div>

        <div className="section-item">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://github.com/foivz/pi22-nzagorsca-iercegova-gpenava-dmilanovi.git"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              Parking Management System
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            Work-based Learning Project
          </p>
          <ExpandableText
            text="Web application developed in collaboration with SICK Mobilisis for parking management in Dubrovnik, featuring real-time parking space monitoring and analytics."
            itemId="parking-app-project"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
            bulletPoints={[
              "Collaborated with SICK Mobilisis company on smart city parking solution",
              "Developed comprehensive parking space visualization for Dubrovnik city",
              "Created detailed parking space properties and characteristics display",
              "Built statistical analysis dashboard for parking usage patterns",
              "Calculated occupancy percentage for selected time periods",
              "Integrated Google Maps API for interactive parking space display",
              "Developed data visualization charts using Chart.js library",
            ]}
            technologies={[
              "C#",
              "SQL",
              "HTML",
              "CSS",
              "JavaScript",
              "Google Maps API",
              "Chart.js",
              "Git",
            ]}
          />
          <div className="mt-3 flex gap-3 text-sm">
            <a
              href="https://www.foi.unizg.hr/hr/novosti/predstavljanje-studentskih-wbl-projekata-foi-i-mobilisis"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-1"
              style={{
                color: getBlueColor(),
              }}
            >
              Project Presentation
              <ExternalLinkIcon size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
