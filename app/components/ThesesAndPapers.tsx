import ExpandableText from "./ExpandableText";
import ExternalLinkIcon from "./ExternalLinkIcon";
import {
  getSubtitleColor,
  getTextColor,
  useBackgroundAwareColors,
  getBlueColor,
} from "../utils/colorUtils";

interface ThesesAndPapersProps {
  brightness: number;
  expandedItems: Record<string, boolean>;
  onToggleExpand: (itemId: string) => void;
}

export default function ThesesAndPapers({
  brightness,
  expandedItems,
  onToggleExpand,
}: ThesesAndPapersProps) {
  useBackgroundAwareColors();

  return (
    <section className="mb-16">
      <h2
        className="fade-in text-3xl font-bold mb-8 transition-colors duration-500"
        style={{
          color: getTextColor(brightness),
        }}
      >
        Theses and papers
      </h2>

      <div className="space-y-6">
        <article className="section-item">
          <h3
            className="text-xl font-semibold mb-2 transition-colors cursor-pointer duration-300"
            style={{
              color: getBlueColor(),
            }}
          >
            <a
              href="https://github.com/GrgoPenava/Masters-thesis"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              Application development based on Vue.js
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            June, 2025
          </p>
          <ExpandableText
            text="This paper explores the development of modern web applications using the Vue.js framework. It focuses on component-based architecture, state management with Pinia, and integration with RESTful APIs. The project demonstrates how Vue.js can be used to build fast, maintainable, and scalable front-end solutions."
            itemId="masters-thesis"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
          />
        </article>

        <article className="section-item">
          <h3
            className="text-xl font-semibold mb-2 transition-colors cursor-pointer duration-300"
            style={{
              color: getBlueColor(),
            }}
          >
            <a
              href="https://github.com/GrgoPenava/Bachelors-thesis"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              Industry 4.0 and lean production
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            September, 2024
          </p>
          <ExpandableText
            text="The work analyzes how Industry 4.0 technologies - such as IoT, automation, and data analytics - can enhance lean manufacturing principles. It provides case studies and highlights the synergy between digital transformation and operational efficiency in modern production environments."
            itemId="bachelors-thesis"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
          />
        </article>

        <article className="section-item">
          <h3
            className="text-xl font-semibold mb-2 transition-colors cursor-pointer duration-300"
            style={{
              color: getBlueColor(),
            }}
          >
            <a
              href="https://github.com/GrgoPenava/face-recognition"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors duration-300 inline-flex items-center gap-2"
              style={{
                color: getBlueColor(),
              }}
            >
              Face recognition in images using deep learning
              <ExternalLinkIcon size={16} />
            </a>
          </h3>
          <p
            className="text-sm mb-2 transition-colors duration-500"
            style={{
              color: getSubtitleColor(brightness),
            }}
          >
            December, 2023
          </p>
          <ExpandableText
            text="This research paper examines the use of convolutional neural networks (CNNs) for face recognition tasks. It includes dataset preparation, model training, and evaluation using common performance metrics. The study demonstrates the potential of deep learning in achieving accurate and robust face detection and identification."
            itemId="face-recognition"
            brightness={brightness}
            expandedItems={expandedItems}
            onToggle={onToggleExpand}
          />
        </article>
      </div>
    </section>
  );
}
