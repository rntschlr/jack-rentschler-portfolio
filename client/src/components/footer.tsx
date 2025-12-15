export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-2">
              Jack Rentschler
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jack Rentschler. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Built with <span className="text-indigo-400">React</span>, <span className="text-blue-400">TypeScript</span> & <span className="text-cyan-400">Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
