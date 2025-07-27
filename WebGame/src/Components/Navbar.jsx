function Navbar() {
  return (
    <nav className="bg-white border-b-4 border-yellow-400 shadow-lg relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-yellow-300"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Retro Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-mono text-gray-800 hover:text-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <span className="relative z-10 bg-yellow-100 px-3 py-1 border-2 border-yellow-400">
                &gt; ARCADE_HUB
              </span>
              <div className="absolute inset-0 bg-yellow-300 opacity-0 hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            </h1>
          </div>

          {/* Retro Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-1">
              <li>
                <a
                  href="#home"
                  className="group relative font-mono text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                >
                  <span className="relative z-10 bg-yellow-50 hover:bg-yellow-200 px-2 py-1 border border-yellow-400 transition-colors duration-200">
                    [HOME]
                  </span>
                  <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 transition-all duration-200"></div>
                  <div className="absolute -inset-1 bg-yellow-300 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-200"></div>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="group relative font-mono text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                >
                  <span className="relative z-10 bg-yellow-50 hover:bg-yellow-200 px-2 py-1 border border-yellow-400 transition-colors duration-200">
                    [ABOUT]
                  </span>
                  <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 transition-all duration-200"></div>
                  <div className="absolute -inset-1 bg-yellow-300 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-200"></div>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group relative font-mono text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                >
                  <span className="relative z-10 bg-yellow-50 hover:bg-yellow-200 px-2 py-1 border border-yellow-400 transition-colors duration-200">
                    [CONTACT]
                  </span>
                  <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 transition-all duration-200"></div>
                  <div className="absolute -inset-1 bg-yellow-300 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-200"></div>
                </a>
              </li>
            </ul>
          </div>

          {/* Retro Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-yellow-600 bg-yellow-100 hover:bg-yellow-200 p-2 border-2 border-yellow-400 transition-all duration-200 font-mono text-xl"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>☰
            </button>
          </div>
        </div>
      </div>

      {/* Retro Mobile Menu */}
      <div
        className="md:hidden hidden bg-yellow-50 border-t-2 border-yellow-400"
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="text-gray-700 hover:text-gray-900 hover:bg-yellow-200 block px-3 py-2 font-mono text-base font-bold uppercase tracking-wider transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-400"
          >
            [HOME]
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 hover:bg-yellow-200 block px-3 py-2 font-mono text-base font-bold uppercase tracking-wider transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-400"
          >
            [ABOUT]
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 hover:bg-yellow-200 block px-3 py-2 font-mono text-base font-bold uppercase tracking-wider transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-400"
          >
            [CONTACT]
          </a>
        </div>
      </div>

      {/* Retro scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full opacity-5"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #fbbf24 2px, #fbbf24 4px)",
          }}
        ></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-400"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-400"></div>
    </nav>
  );
}

export default Navbar;
