import { User, ArrowDown, FileText, Mail } from "lucide-react";

export default function Hero() {
  const handleLinkClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center]"></div>
      </div>

      <div className="container-width relative z-10 text-center">
        <div className="flex flex-col items-center space-y-8">

          {/* Profile Image with Ring */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-200 blur"></div>
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/profile-cathedral.jpeg"
                alt="Jack Rentschler"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100 mb-2">
              Available for Hire
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Jack Rentschler</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
              Aspiring Software Engineer & Computer Science Student.
              Building the web with precision and passion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => handleLinkClick("#projects")}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5 mr-2" />
              View My Work
            </button>
            <button
              onClick={() => handleLinkClick("#contact")}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
