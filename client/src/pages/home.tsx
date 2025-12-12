import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
