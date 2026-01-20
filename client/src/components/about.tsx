import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  type: "education" | "experience";
}

function TimelineItem({ title, subtitle, date, description, type }: TimelineItemProps) {
  const isList = Array.isArray(description);

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline line - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

      {/* Icon - absolute positioned */}
      <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full border-4 border-white bg-indigo-100 flex items-center justify-center transform md:-translate-x-1/2 z-10">
        {type === "education" ? (
          <GraduationCap size={14} className="text-indigo-600" />
        ) : (
          <Briefcase size={14} className="text-indigo-600" />
        )}
      </div>

      <div className={`md:flex items-start justify-between ${type === "experience" ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-[45%] mb-8 md:mb-0">
          <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${type === "experience" ? "md:text-left" : "md:text-right"}`}>
            <span className={`inline-flex items-center text-sm text-indigo-600 font-medium mb-2 bg-indigo-50 px-3 py-1 rounded-full ${type === "experience" ? "" : "md:ml-auto"}`}>
              <Calendar size={14} className="mr-1.5" />
              {date}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
            <p className="text-lg text-gray-700 font-medium mb-3">{subtitle}</p>

            {isList ? (
              <ul className={`space-y-1.5 text-gray-600 text-sm ${type === "experience" ? "list-disc pl-4" : "list-none"}`}>
                {(description as string[]).map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            )}
          </div>
        </div>
        <div className="hidden md:block md:w-[45%]"></div>
      </div>
    </div>
  );
}

interface HighlightCard {
  title: string;
  description: string;
  accent: "yellow" | "blue" | "green";
}

interface AboutProps {
  title: string;
  intro: string;
  timeline: TimelineItemProps[];
  highlightsTitle: string;
  highlights: HighlightCard[];
  relocation: {
    title: string;
    description: string;
  };
}

const accentStyles = {
  yellow: "bg-yellow-100 text-yellow-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
};

export default function About({
  title,
  intro,
  timeline,
  highlightsTitle,
  highlights,
  relocation,
}: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600">
            {intro}
          </p>
        </div>

        <div className="relative space-y-12">
          {timeline.map((item, index) => (
            <TimelineItem key={`${item.title}-${index}`} {...item} />
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{highlightsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={`${highlight.title}-${index}`}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all"
              >
                <div className={`p-2 rounded-lg ${accentStyles[highlight.accent]}`}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{highlight.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{relocation.title}</h3>
            <p className="text-gray-700">{relocation.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
