import React from "react";
import { Link } from "react-router-dom";
import peterThink from "/peterThink.png";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-16 h-full">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border-r border-yellow-300"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-yellow-300 w-full"></div>
          ))}
        </div>
      </div>

      {/* Floating retro symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl text-yellow-400 opacity-20 animate-pulse font-mono">
          ◆
        </div>
        <div className="absolute top-20 right-20 text-3xl text-yellow-500 opacity-30 animate-bounce font-mono">
          ★
        </div>
        <div className="absolute bottom-32 left-20 text-4xl text-yellow-400 opacity-25 animate-pulse font-mono">
          ◇
        </div>
        <div className="absolute bottom-20 right-32 text-3xl text-yellow-500 opacity-20 animate-bounce font-mono">
          ♦
        </div>
        <div className="absolute top-1/3 left-1/4 text-2xl text-yellow-400 opacity-20 animate-bounce font-mono">
          ▲
        </div>
        <div className="absolute top-2/3 right-1/4 text-3xl text-yellow-500 opacity-30 animate-pulse font-mono">
          ●
        </div>
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full opacity-5"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, #fbbf24 3px, #fbbf24 6px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Terminal Window */}
          <div className="bg-black border-4 border-yellow-400 p-8 mb-8 relative">
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-yellow-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-yellow-400 font-mono text-sm">
                ERROR.EXE - SYSTEM TERMINAL
              </div>
              <div className="w-6"></div>
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yellow-600"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yellow-600"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yellow-600"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-600"></div>

            {/* Terminal content */}
            <div className="font-mono text-left space-y-2">
              <div className="text-yellow-400">
                <span className="text-yellow-600">&gt;</span> SYSTEM SCAN:
                INITIATED...
              </div>
              <div className="text-green-400">
                <span className="text-yellow-600">&gt;</span> CHECKING
                COORDINATES...
              </div>
              <div className="text-red-400">
                <span className="text-yellow-600">&gt;</span> ERROR: PAGE NOT
                FOUND
              </div>
              <div className="text-red-400">
                <span className="text-yellow-600">&gt;</span> ERROR CODE: 404
              </div>
              <div className="text-yellow-400">
                <span className="text-yellow-600">&gt;</span> STATUS: LOST IN
                CYBERSPACE
              </div>
            </div>

            {/* Large 404 display */}
            <div className="my-8 text-center">
              <div className="text-8xl md:text-9xl font-mono font-bold text-yellow-400 mb-4 relative">
                <span className="relative z-10">404</span>
                <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-lg"></div>
              </div>
              <div className="text-2xl md:text-3xl font-mono text-white mb-2">
                PAGE.EXE NOT FOUND
              </div>
              <div className="text-lg font-mono text-yellow-300">
                The file you're looking for has been moved to the digital void.
              </div>
            </div>

            {/* Peter character */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={peterThink}
                  alt="Peter thinking about the missing page"
                  className="w-32 h-32 md:w-48 md:h-48 border-2 border-yellow-400"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 0, 0.3))",
                  }}
                />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-yellow-500"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-yellow-500"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>
              </div>
            </div>

            {/* Peter's message */}
            <div className="bg-yellow-50 border-2 border-yellow-400 p-4 mb-6 relative">
              <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rotate-45"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rotate-45"></div>

              <p className="text-black font-mono text-center">
                <span className="text-yellow-700 font-bold">Peter says:</span>
                <br />
                "Oops! Looks like this page got lost in the system. Don't worry,
                I can help you get back on track!"
              </p>
            </div>

            {/* Navigation options */}
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/" className="group relative">
                <div className="bg-yellow-400 hover:bg-yellow-500 border-4 border-gray-800 px-6 py-3 font-mono font-bold text-gray-800 text-center uppercase tracking-wider transition-all duration-200 hover:scale-105 cursor-pointer relative overflow-hidden">
                  <span className="relative z-10">[ HOME.EXE ]</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </div>
                <div className="absolute top-2 left-2 w-full h-full bg-gray-800 -z-10"></div>
              </Link>

              <Link to="/game" className="group relative">
                <div className="bg-blue-400 hover:bg-blue-500 border-4 border-gray-800 px-6 py-3 font-mono font-bold text-gray-800 text-center uppercase tracking-wider transition-all duration-200 hover:scale-105 cursor-pointer relative overflow-hidden">
                  <span className="relative z-10">[ GAME.EXE ]</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </div>
                <div className="absolute top-2 left-2 w-full h-full bg-gray-800 -z-10"></div>
              </Link>
            </div>

            {/* Additional help links */}
            <div className="mt-6 pt-4 border-t-2 border-yellow-400">
              <div className="font-mono text-yellow-400 text-sm text-center">
                <div className="mb-2">QUICK ACCESS MENU:</div>
                <div className="flex justify-center space-x-4 flex-wrap">
                  <Link
                    to="/about"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    &gt; ABOUT.EXE
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    &gt; CONTACT.EXE
                  </Link>
                  <Link
                    to="/help"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    &gt; HELP.DOC
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Error details */}
          <div className="bg-red-900 border-2 border-red-500 p-4 font-mono text-sm text-red-200">
            <div className="text-red-400 font-bold mb-2">
              SYSTEM ERROR DETAILS:
            </div>
            <div>
              <span className="text-red-500">&gt;</span> URL:{" "}
              {window.location.pathname}
            </div>
            <div>
              <span className="text-red-500">&gt;</span> TIME:{" "}
              {new Date().toLocaleString()}
            </div>
            <div>
              <span className="text-red-500">&gt;</span> SUGGESTION: RETURN TO
              SAFE COORDINATES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
