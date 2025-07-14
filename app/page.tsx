"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimePicker from "./components/TimePicker";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("12:00");
  const [brightness, setBrightness] = useState(1);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const ExpandableText = ({
    text,
    itemId,
    maxLength = 150,
  }: {
    text: string;
    itemId: string;
    maxLength?: number;
  }) => {
    const isExpanded = expandedItems[itemId];
    const shouldTruncate = text.length > maxLength;

    return (
      <div>
        <p
          className="leading-relaxed transition-colors duration-500"
          style={{
            color: `rgba(${80 - brightness * 40}, ${80 - brightness * 40}, ${
              80 - brightness * 40
            }, 0.9)`,
          }}
        >
          {isExpanded ? text : truncateText(text, maxLength)}
        </p>
        {shouldTruncate && (
          <button
            onClick={() => toggleExpand(itemId)}
            className="mt-2 text-sm font-medium transition-colors duration-300 hover:opacity-80"
            style={{
              color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
            }}
          >
            {isExpanded ? "Čitaj manje" : "Čitaj više"}
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.utils.toArray(".section-item").forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const handleTimeChange = (time: string, newBrightness: number) => {
    setCurrentTime(time);
    setBrightness(newBrightness);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500 overflow-x-hidden"
      style={{
        backgroundColor: "var(--time-bg-light, #ffffff)",
        color: "var(--time-text-light, #111111)",
      }}
    >
      <TimePicker onTimeChange={handleTimeChange} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="fade-in text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Grgo Penava
          </h1>
          <p
            className="fade-in text-xl md:text-2xl leading-relaxed max-w-3xl transition-colors duration-500"
            style={{
              color: `rgba(${120 - brightness * 50}, ${
                120 - brightness * 50
              }, ${120 - brightness * 50}, 0.8)`,
            }}
          >
            Web developer s fokusom na kreiranje modernih, responzivnih web
            aplikacija za dobre ljude i zanimljive projekte.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="fade-in text-3xl font-bold mb-8">Pisanje</h2>
          <div className="space-y-6">
            <article className="section-item">
              <h3
                className="text-xl font-semibold mb-2 transition-colors cursor-pointer duration-300"
                style={{
                  color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                }}
              >
                <a
                  href="https://github.com/GrgoPenava/Masters-thesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  Application development based on Vue.js
                </a>
              </h3>
              <p
                className="text-sm mb-2 transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                June, 2025
              </p>
              <ExpandableText
                text="This paper explores the development of modern web applications using the Vue.js framework. It focuses on component-based architecture, state management with Pinia, and integration with RESTful APIs. The project demonstrates how Vue.js can be used to build fast, maintainable, and scalable front-end solutions."
                itemId="masters-thesis"
                maxLength={120}
              />
            </article>

            <article className="section-item">
              <h3
                className="text-xl font-semibold mb-2 transition-colors cursor-pointer duration-300"
                style={{
                  color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                }}
              >
                <a
                  href="https://github.com/GrgoPenava/Bachelors-thesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  Industry 4.0 and lean production
                </a>
              </h3>
              <p
                className="text-sm mb-2 transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                September, 2024
              </p>
              <ExpandableText
                text="The work analyzes how Industry 4.0 technologies - such as IoT, automation, and data analytics - can enhance lean manufacturing principles. It provides case studies and highlights the synergy between digital transformation and operational efficiency in modern production environments."
                itemId="bachelors-thesis"
                maxLength={120}
              />
            </article>

            <article className="section-item">
              <h3
                className="text-xl font-semibold mb-2 transition-colors cursor-pointer duration-300"
                style={{
                  color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                }}
              >
                <a
                  href="https://github.com/GrgoPenava/face-recognition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  Face recognition in images using deep learning
                </a>
              </h3>
              <p
                className="text-sm mb-2 transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                December, 2023
              </p>
              <ExpandableText
                text="This research paper examines the use of convolutional neural networks (CNNs) for face recognition tasks. It includes dataset preparation, model training, and evaluation using common performance metrics. The study demonstrates the potential of deep learning in achieving accurate and robust face detection and identification."
                itemId="face-recognition"
                maxLength={120}
              />
            </article>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="fade-in text-3xl font-bold mb-8">Radno iskustvo</h2>

          <div className="space-y-8">
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
                    SICK Mobilisis
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
              />
            </div>

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
                    7 Payments
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
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="fade-in text-3xl font-bold mb-8">Obrazovanje</h2>

          <div className="section-item">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Fakultet organizacije i informatike
                </h3>
                <p
                  className="font-medium transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  Sveučilište u Zagrebu
                </p>
                <p
                  className="transition-colors duration-500"
                  style={{
                    color: `rgba(${100 - brightness * 30}, ${
                      100 - brightness * 30
                    }, ${100 - brightness * 30}, 0.7)`,
                  }}
                >
                  Informacijski sustavi
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
                2020–2024
              </span>
            </div>
            <p
              className="leading-relaxed transition-colors duration-500"
              style={{
                color: `rgba(${80 - brightness * 40}, ${
                  80 - brightness * 40
                }, ${80 - brightness * 40}, 0.9)`,
              }}
            >
              Stekao sam temeljna znanja iz programiranja, baza podataka,
              informacijskih sustava i projektnog menadžmenta. Diplomski rad
              fokusiran na moderne web tehnologije.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="fade-in text-3xl font-bold mb-8">Projekti</h2>

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
                  color: `rgba(${80 - brightness * 40}, ${
                    80 - brightness * 40
                  }, ${80 - brightness * 40}, 0.9)`,
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
                  color: `rgba(${80 - brightness * 40}, ${
                    80 - brightness * 40
                  }, ${80 - brightness * 40}, 0.9)`,
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
                  color: `rgba(${80 - brightness * 40}, ${
                    80 - brightness * 40
                  }, ${80 - brightness * 40}, 0.9)`,
                }}
              >
                Minimalistička portfolio stranica s GSAP animacijama i
                interaktivnim elementima.
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

        <section className="mb-16">
          <h2 className="fade-in text-3xl font-bold mb-8">Akademski radovi</h2>

          <div className="space-y-6">
            <div className="section-item">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  "Razvoj web aplikacije za upravljanje projektima" →
                </a>
              </h3>
              <p
                className="text-sm mb-2 transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                Diplomski rad
              </p>
              <p
                className="transition-colors duration-500"
                style={{
                  color: `rgba(${80 - brightness * 40}, ${
                    80 - brightness * 40
                  }, ${80 - brightness * 40}, 0.9)`,
                }}
              >
                Istraživanje modernih tehnologija za razvoj web aplikacija i
                implementacija sistema za upravljanje projektima s real-time
                funkcionalnostima.
              </p>
            </div>

            <div className="section-item">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: `rgba(59, 130, 246, ${0.8 + brightness * 0.2})`,
                  }}
                >
                  "Analiza korisničkog iskustva u web aplikacijama" →
                </a>
              </h3>
              <p
                className="text-sm mb-2 transition-colors duration-500"
                style={{
                  color: `rgba(${100 - brightness * 30}, ${
                    100 - brightness * 30
                  }, ${100 - brightness * 30}, 0.7)`,
                }}
              >
                Završni rad
              </p>
              <p
                className="transition-colors duration-500"
                style={{
                  color: `rgba(${80 - brightness * 40}, ${
                    80 - brightness * 40
                  }, ${80 - brightness * 40}, 0.9)`,
                }}
              >
                Analiza faktora koji utječu na korisničko iskustvo u modernim
                web aplikacijama i preporuke za poboljšanje.
              </p>
            </div>
          </div>
        </section>

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
            Možete me pratiti na{" "}
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
            {" i "}
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
      </div>
    </div>
  );
}
