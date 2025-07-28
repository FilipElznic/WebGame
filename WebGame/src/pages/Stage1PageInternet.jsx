import React, { useState, useEffect } from "react";
import peterThink from "/peterThink.png";

function Stage1PageInternet() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isPeterVisible, setIsPeterVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fullText =
    "Well it looks like we are out of internet. But you look like you can find the solution!";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 50; // milliseconds per character

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setIsTypingComplete(true);
        setTimeout(() => setShowButton(true), 500); // Show button after 500ms delay
      }
    };

    // Start typing after 1 second
    const startDelay = setTimeout(typeText, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  const handleHidePeter = () => {
    setIsPeterVisible(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {isPeterVisible && (
        <div className="z-50">
          <img
            src={peterThink}
            alt="Peter's Idea"
            className="absolute max-w-2xl bottom-0 right-0 z-40"
          />

          {/* Speech bubble */}
          <div className="absolute bottom-80 right-96 z-40 max-w-md">
            <div className="bg-white border-4 border-yellow-400 rounded-lg p-4 relative shadow-xl">
              {/* Speech bubble tail */}
              <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              <div className="absolute -bottom-4 left-7 w-0 h-0 border-l-6 border-r-6 border-t-10 border-l-transparent border-r-transparent border-t-yellow-400"></div>

              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

              {/* Dialogue text */}
              <div className="text-black font-mono">
                <p className="text-lg font-bold text-yellow-700 mb-2">Peter:</p>
                <p className="text-sm leading-relaxed">
                  "{displayText}
                  {!isTypingComplete && (
                    <span className="inline-block w-2 h-4 bg-yellow-600 ml-1 animate-pulse">
                      |
                    </span>
                  )}
                  "
                </p>

                {/* Typing indicator - only show while typing */}
                {!isTypingComplete && (
                  <div className="flex items-center mt-3 text-yellow-600">
                    <span className="text-xs">💭</span>
                    <div className="ml-2 flex space-x-1">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Continue Button - show after typing is complete */}
                {showButton && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={handleHidePeter}
                      className="bg-yellow-400 hover:bg-yellow-500 border-2 border-yellow-600 text-black font-bold py-2 px-6 font-mono text-sm transition-all duration-200 transform hover:scale-105 relative group"
                    >
                      {/* Button corner decorations */}
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-yellow-700"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-yellow-700"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-yellow-700"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-yellow-700"></div>
                      [HIDE PETER] ▶
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Challenge Section - Inline (no popup) */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div
          className={`${
            isDarkMode ? "bg-gray-900" : "bg-white"
          } backdrop-blur-sm p-8 border-4 border-yellow-400 shadow-2xl h-[90vh] relative overflow-hidden flex flex-col items-center justify-center`}
        >
          <div
            className={`w-full h-full text-balance ${
              isDarkMode ? "text-white" : "text-black"
            } flex items-center flex-col`}
          >
            <div>
              <img src="/dino.png" alt="Dino" className="mb-4 w-20 h-20 " />
              <h1 className="text-xl font-mono font-bold  mb-4">
                Oouuppsss it looks like you <br /> are out of internet
                connection!
              </h1>
              <p
                className={`text-sm font-mono ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Try to explore the page to maybe find something
              </p>
            </div>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`absolute bottom-4 left-4 ${
              isDarkMode
                ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            } border-2 border-yellow-400 font-bold py-2 px-3 font-mono text-sm transition-all duration-200 transform hover:scale-105 relative group`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yellow-500"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yellow-500"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yellow-500"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-500"></div>
        </div>
      </div>

      {/* Retro grid background like main menu */}

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
      </div>
    </div>
  );
}

export default Stage1PageInternet;
