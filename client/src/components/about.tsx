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

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Education & Experience</h2>
          <p className="text-lg text-gray-600">
            My academic journey and professional milestones that have shaped my career in Computer Science.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Education 1 */}
          <TimelineItem
            type="education"
            title="Bachelor of Science in Computer Science"
            subtitle="[Your University]"
            date="Expected [Year]"
            description={[
              "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Operating Systems",
              "GPA: [Your GPA] (Optional)",
              "Member of [Club/Organization]"
            ]}
          />

          {/* Experience 1 */}
          <TimelineItem
            type="experience"
            title="[Your Job Title]"
            subtitle="[Company Name]"
            date="[Start Date] - [End Date]"
            description={[
              "Developed and maintained web applications using React and Node.js.",
              "Collaborated with cross-functional teams to define, design, and ship new features.",
              "Improved application performance by optimizing database queries."
            ]}
          />

           {/* Experience 2 */}
           <TimelineItem
            type="experience"
            title="[Previous Job Title]"
            subtitle="[Previous Company Name]"
            date="[Start Date] - [End Date]"
            description={[
              "Assisted in the development of internal tools to streamline operations.",
              "Participated in code reviews and provided constructive feedback.",
              "Wrote unit and integration tests to ensure code quality."
            ]}
          />
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Award className="text-yellow-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">[Achievement Title]</h4>
                <p className="text-sm text-gray-600 mt-1">Short description of what was achieved.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Award className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">[Achievement Title]</h4>
                <p className="text-sm text-gray-600 mt-1">Short description of what was achieved.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all">
              <div className="bg-green-100 p-2 rounded-lg">
                <Award className="text-green-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">[Achievement Title]</h4>
                <p className="text-sm text-gray-600 mt-1">Short description of what was achieved.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
