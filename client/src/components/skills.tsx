import { Code2, Database, Layout, Terminal, Wrench, Cpu } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

function SkillCategory({ title, icon, skills, color }: SkillCategoryProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className={`flex items-center gap-3 mb-6 ${color}`}>
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal size={24} />,
      color: "text-blue-600",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      color: "text-purple-600",
      skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Shadcn UI"]
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      color: "text-emerald-600",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Prisma/Drizzle"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench size={24} />,
      color: "text-orange-600",
      skills: ["Git", "Docker", "Linux", "VS Code", "Postman", "Vercel"]
    },
    {
      title: "Computer Science",
      icon: <Cpu size={24} />,
      color: "text-red-600",
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "System Design", "Agile"]
    },
    {
      title: "Soft Skills",
      icon: <Code2 size={24} />,
      color: "text-indigo-600",
      skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50/50">
      <div className="container-width">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
          <p className="text-lg text-gray-600">
            A comprehensive overview of my technical skills and the technologies I use to build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
