import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Jack Rentschler</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleLinkClick("#home")}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick("#about")}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                Education
              </button>
              <button
                onClick={() => handleLinkClick("#skills")}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => handleLinkClick("#projects")}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => handleLinkClick("#contact")}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleLinkClick("#home")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick("#about")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Education
            </button>
            <button
              onClick={() => handleLinkClick("#skills")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => handleLinkClick("#projects")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => handleLinkClick("#contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
