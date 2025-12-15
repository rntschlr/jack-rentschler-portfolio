import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

function ProjectCard({ title, description, tags, imageUrl, demoUrl, codeUrl }: ProjectProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600 transition-colors"
            title="View Live Demo"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600 transition-colors"
            title="View Code"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include a clean design, smooth animations, and optimized performance to showcase my professional journey.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://jrentschler.com",
      codeUrl: "https://github.com/rntschlr"
    },
    // Add more projects here as needed
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              A collection of projects that demonstrate my passion for coding and ability to solve real-world problems.
            </p>
          </div>
          <a
            href="https://github.com/rntschlr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            View GitHub Profile
          </a>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <Folder className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No projects added yet</h3>
            <p className="text-gray-500">Check back soon for updates!</p>
          </div>
        )}
      </div>
    </section>
  );
}
