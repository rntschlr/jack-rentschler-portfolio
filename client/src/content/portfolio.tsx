import { Code2, Cpu, Layout, Terminal, Wrench, Database } from "lucide-react";

export type PortfolioVariant = "it" | "dev";

export const portfolioContent = {
  it: {
    navigation: {
      brand: "Jack Rentschler",
      links: [
        { name: "Home", href: "#home" },
        { name: "Background", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Work Samples", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
      ctaLabel: "Let's Talk",
    },
    hero: {
      badge: "Open to IT Support / Junior Sysadmin",
      name: "Jack Rentschler",
      role: "Entry-level IT support focused on troubleshooting and reliability.",
      summary:
        "I build practical fixes, write clear documentation, and automate small tasks to keep users productive.",
      primaryCta: { label: "View Support Work", href: "#projects" },
      secondaryCta: { label: "Contact Me", href: "#contact" },
    },
    about: {
      title: "Background & Focus",
      intro:
        "Hands-on practice, clear documentation, and steady improvement in core IT support skills.",
      timeline: [
        {
          type: "education",
          title: "Self-Directed IT Training",
          subtitle: "Foundations and daily practice",
          date: "Ongoing",
          description: [
            "OS fundamentals (macOS and Linux), user accounts, file systems",
            "Networking basics: DNS, DHCP, TCP/IP troubleshooting",
            "Scripting for repeatable tasks (bash, Python)",
          ],
        },
        {
          type: "experience",
          title: "Support Documentation Practice",
          subtitle: "User-first troubleshooting",
          date: "Ongoing",
          description: [
            "Step-by-step guides with clear escalation paths",
            "Ticket-style notes that capture symptoms and resolutions",
            "Focus on clarity, empathy, and speed",
          ],
        },
        {
          type: "experience",
          title: "Automation & Tooling",
          subtitle: "Small tools that save time",
          date: "Recent",
          description: [
            "macOS backup workflow for user data and exports",
            "Simple scripts for file hygiene and organization",
            "Comfortable working from the command line",
          ],
        },
      ],
      highlightsTitle: "Work Samples You Can Review",
      highlights: [
        {
          title: "Backup Automation Script",
          description:
            "A macOS backup script that creates organized archives and exports key user data.",
          accent: "yellow",
        },
        {
          title: "Troubleshooting Guides",
          description:
            "In-progress playbooks for common issues with clear triage steps and handoff notes.",
          accent: "blue",
        },
        {
          title: "Portfolio Build",
          description:
            "This site itself: built with React and Tailwind for clarity and performance.",
          accent: "green",
        },
      ],
      relocation: {
        title: "Relocation & Work Authorization",
        description:
          "Relocating to Hungary via family reunification visa (in progress). Open to remote work until relocation.",
      },
    },
    skills: {
      title: "IT Support Skill Set",
      intro:
        "Practical skills focused on troubleshooting, automation, and reliable support.",
      categories: [
        {
          title: "Systems & OS",
          icon: <Terminal size={24} />,
          color: "text-blue-600",
          skills: [
            "macOS",
            "Linux",
            "User accounts",
            "File systems",
            "Command line",
          ],
        },
        {
          title: "Networking Fundamentals",
          icon: <Cpu size={24} />,
          color: "text-red-600",
          skills: [
            "TCP/IP",
            "DNS",
            "DHCP",
            "Wi-Fi troubleshooting",
            "IP addressing basics",
          ],
        },
        {
          title: "Scripting & Automation",
          icon: <Code2 size={24} />,
          color: "text-indigo-600",
          skills: [
            "Bash",
            "Python",
            "Task automation",
            "Log review",
            "Scripting fundamentals",
          ],
        },
        {
          title: "Tools & Workflow",
          icon: <Wrench size={24} />,
          color: "text-orange-600",
          skills: [
            "Git",
            "SSH",
            "Documentation",
            "Issue reproduction",
            "Clear communication",
          ],
        },
      ],
    },
    projects: {
      title: "Work Samples",
      intro:
        "Projects and artifacts that show how I approach support, documentation, and automation.",
      cta: { label: "View GitHub Profile", href: "https://github.com/rntschlr" },
      items: [
        {
          title: "macOS Backup Automation Script",
          description:
            "Command-line script that builds a time-stamped backup, copies key folders, and exports user data.",
          tags: ["Bash", "macOS", "Automation"],
          imageUrl:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&h=300&q=80",
          status: "Work sample",
        },
        {
          title: "IT Support Playbook (In progress)",
          description:
            "A growing set of troubleshooting guides for common issues with clear triage steps and escalation notes.",
          tags: ["Documentation", "Troubleshooting", "Support"],
          imageUrl:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=300&q=80",
          status: "In progress",
        },
        {
          title: "Portfolio Site",
          description:
            "Personal site built to present work samples and clarify my focus for employers.",
          tags: ["React", "TypeScript", "Tailwind CSS"],
          imageUrl:
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&h=300&q=80",
          demoUrl: "https://jrentschler.com",
          codeUrl: "https://github.com/rntschlr",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      lead:
        "Open to entry-level IT support and junior systems roles, with remote options until relocation.",
      email: "johnkrentschler@icloud.com",
      location: "United States (relocating to Hungary)",
      phone: "Available upon request",
      availabilityTitle: "Availability & Fit",
      availabilityItems: [
        "Relocating to Hungary via family reunification visa (in progress)",
        "Open to remote support until relocation",
        "Interested in user support, troubleshooting, and documentation",
      ],
      ctaLinks: [
        { label: "Email Me", href: "mailto:johnkrentschler@icloud.com" },
        { label: "GitHub", href: "https://github.com/rntschlr" },
      ],
      note: "Resume available on request.",
    },
  },
  dev: {
    navigation: {
      brand: "Jack Rentschler",
      links: [
        { name: "Home", href: "#home" },
        { name: "Background", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
      ctaLabel: "Let's Talk",
    },
    hero: {
      badge: "Open to Front-End / Web Developer Roles",
      name: "Jack Rentschler",
      role: "Web developer who turns ideas into clean, responsive interfaces.",
      summary:
        "I build fast prototypes and iterate on UX with React, TypeScript, and Tailwind.",
      primaryCta: { label: "View Projects", href: "#projects" },
      secondaryCta: { label: "Contact Me", href: "#contact" },
    },
    about: {
      title: "Background & Approach",
      intro:
        "I learn by building. Rapid prototypes help me test ideas and improve UI clarity.",
      timeline: [
        {
          type: "experience",
          title: "Rapid Prototyping & UI Sprints",
          subtitle: "Idea to interface, fast",
          date: "Ongoing",
          description: [
            "Quick UI prototypes to validate layouts and interactions",
            "Short feedback loops to refine clarity and flow",
            "Focus on responsiveness and accessibility basics",
          ],
        },
        {
          type: "experience",
          title: "Portfolio Build & Iteration",
          subtitle: "Real site, real constraints",
          date: "Recent",
          description: [
            "Built and iterated this portfolio with React and Tailwind",
            "Structured content for clarity, scanability, and SEO basics",
            "Optimized for mobile and desktop",
          ],
        },
        {
          type: "education",
          title: "Self-Directed CS Foundations",
          subtitle: "Solidifying the fundamentals",
          date: "Ongoing",
          description: [
            "Data structures, algorithms, and software fundamentals",
            "Practice projects to reinforce core concepts",
            "Comfortable reading docs and learning new tools quickly",
          ],
        },
      ],
      highlightsTitle: "Work Samples You Can Review",
      highlights: [
        {
          title: "UI Prototype Sprints",
          description:
            "Short cycles that explore layout, typography, and interaction patterns.",
          accent: "yellow",
        },
        {
          title: "Component-First UI",
          description:
            "Reusable components with consistent spacing, type, and states.",
          accent: "blue",
        },
        {
          title: "Portfolio Build",
          description:
            "This site itself: built with React and Tailwind for clarity and performance.",
          accent: "green",
        },
      ],
      relocation: {
        title: "Relocation & Work Authorization",
        description:
          "Relocating to Hungary via family reunification visa (in progress). Open to remote work until relocation.",
      },
    },
    skills: {
      title: "Web Development Skill Set",
      intro:
        "Frontend-focused skills with a practical, build-first approach.",
      categories: [
        {
          title: "Languages",
          icon: <Terminal size={24} />,
          color: "text-blue-600",
          skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
        },
        {
          title: "Frontend",
          icon: <Layout size={24} />,
          color: "text-purple-600",
          skills: ["React", "Vite", "Tailwind CSS", "Wouter", "UI state"],
        },
        {
          title: "Backend & APIs",
          icon: <Database size={24} />,
          color: "text-emerald-600",
          skills: ["Node.js", "Express", "REST APIs", "JSON", "Forms"],
        },
        {
          title: "UX & Product",
          icon: <Code2 size={24} />,
          color: "text-indigo-600",
          skills: [
            "Responsive design",
            "Accessibility basics",
            "Component libraries",
            "Visual hierarchy",
            "Iteration",
          ],
        },
        {
          title: "Tooling",
          icon: <Wrench size={24} />,
          color: "text-orange-600",
          skills: ["Git", "npm", "VS Code", "Postman", "Vercel"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      intro:
        "Selected work that shows how I prototype, build, and refine web experiences.",
      cta: { label: "View GitHub Profile", href: "https://github.com/rntschlr" },
      items: [
        {
          title: "Portfolio Site",
          description:
            "Personal site built to present work samples and a clear professional focus.",
          tags: ["React", "TypeScript", "Tailwind CSS"],
          imageUrl:
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&h=300&q=80",
          demoUrl: "https://jrentschler.com",
          codeUrl: "https://github.com/rntschlr",
        },
        {
          title: "UI Prototype Sprints (In progress)",
          description:
            "Rapid prototypes that explore layout, typography, and interaction patterns before full builds.",
          tags: ["HTML", "CSS", "Vite", "UX"],
          imageUrl:
            "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&h=300&q=80",
          status: "In progress",
        },
        {
          title: "macOS Backup Automation Script",
          description:
            "Command-line script that builds a time-stamped backup and exports key user data.",
          tags: ["Bash", "Automation", "Quality of life"],
          imageUrl:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&h=300&q=80",
          status: "Work sample",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      lead:
        "Open to junior web developer roles and front-end work with fast feedback cycles.",
      email: "johnkrentschler@icloud.com",
      location: "United States (relocating to Hungary)",
      phone: "Available upon request",
      availabilityTitle: "Availability & Fit",
      availabilityItems: [
        "Open to junior front-end or web developer roles",
        "Enjoy rapid prototyping and iterative UI work",
        "Relocating to Hungary via family reunification visa (in progress)",
      ],
      ctaLinks: [
        { label: "Email Me", href: "mailto:johnkrentschler@icloud.com" },
        { label: "GitHub", href: "https://github.com/rntschlr" },
      ],
      note: "Resume available on request.",
    },
  },
} as const;
