import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const portfolioData = {
  navigation: {
    brand: "Jack Rentschler",
    links: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
    ],
    ctaLabel: "Contact Me",
  },
  hero: {
    badge: "Open to Work",
    name: "Jack Rentschler",
    role: "Full Stack Developer",
    summary: "Building robust web applications with modern technologies.",
    primaryCta: { label: "View Resume", href: "#resume" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
  },
  about: {
    title: "About Me",
    intro: "I am a passionate developer with a strong foundation in computer science principles.",
    timeline: [
      {
        title: "Computer Science Degree",
        subtitle: "University Name",
        date: "2020 - 2024",
        description: "Bachelor of Science in Computer Science",
        type: "education" as const,
      },
      {
        title: "Software Engineer Intern",
        subtitle: "Tech Company Inc.",
        date: "Summer 2023",
        description: ["Developed features for the main product dashboard.", "Collaborated with the design team."],
        type: "experience" as const,
      },
    ],
    highlightsTitle: "Key Achievements",
    highlights: [
      {
        title: "Dean's List",
        description: "Maintained a 4.0 GPA for 4 consecutive semesters.",
        accent: "yellow" as const,
      },
      {
        title: "Hackathon Winner",
        description: "First place in the 2023 Regional Hackathon.",
        accent: "blue" as const,
      },
    ],
    relocation: {
      title: "Relocation",
      description: "Open to relocating for the right opportunity.",
    },
  },
};

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("shadow-md");
        } else {
          navbar.classList.remove("shadow-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation {...portfolioData.navigation} />
      <Hero {...portfolioData.hero} />
      <About {...portfolioData.about} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
