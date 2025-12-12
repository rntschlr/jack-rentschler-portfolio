import { useEffect, useRef } from "react";
import { Code, Globe, Wrench } from "lucide-react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

function SkillBar({ skill, percentage, color }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            barRef.current.style.width = `${percentage}%`;
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          ref={barRef}
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const programmingSkills = [
    { skill: "Python", percentage: 90, color: "bg-indigo-600" },
    { skill: "JavaScript", percentage: 85, color: "bg-indigo-600" },
    { skill: "Java", percentage: 80, color: "bg-indigo-600" },
    { skill: "C++", percentage: 75, color: "bg-indigo-600" },
  ];

  const webSkills = [
    { skill: "React", percentage: 88, color: "bg-cyan-500" },
    { skill: "Node.js", percentage: 82, color: "bg-cyan-500" },
    { skill: "HTML/CSS", percentage: 92, color: "bg-cyan-500" },
    { skill: "Express.js", percentage: 78, color: "bg-cyan-500" },
  ];

  const toolsSkills = [
    { skill: "Git", percentage: 87, color: "bg-green-500" },
    { skill: "MongoDB", percentage: 80, color: "bg-green-500" },
    { skill: "PostgreSQL", percentage: 75, color: "bg-green-500" },
    { skill: "Docker", percentage: 70, color: "bg-green-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Code className="text-indigo-600 mr-2" size={20} />
              Programming Languages
            </h3>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Globe className="text-cyan-600 mr-2" size={20} />
              Web Technologies
            </h3>
            <div className="space-y-4">
              {webSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & Databases */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Wrench className="text-green-600 mr-2" size={20} />
              Tools & Databases
            </h3>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
