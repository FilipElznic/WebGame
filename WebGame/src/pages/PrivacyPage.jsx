import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import peterIdea from "/peterIdea.png";
import { Link } from "react-router-dom";
import RetroPc from "../Components/RetroPc";

function PrivacyPage() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showDialogue, setShowDialogue] = useState(true);

  // New states for the bike challenge
  const [showChallenge, setShowChallenge] = useState(false);

  const fullText =
    "Welcome to the Help Page! You can find most of your questions answered here. But if you need more help, you can always contact me through the social media links.";

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

  const handleStartTask = () => {
    // Hide the image and text div
    setShowDialogue(false);
    // Start the challenge
    setShowChallenge(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {showDialogue && (
        <div className="">
          <img
            src={peterIdea}
            alt="Peter's Idea"
            className="absolute max-w-2xl bottom-0 z-40"
          />

          {/* Speech bubble */}
          <div className="absolute bottom-80 left-96 z-40 max-w-md">
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

                {showButton && (
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={handleStartTask}
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

      <Link to="/main-menu" className="z-50 relative">
        <span className="bg-yellow-500 hover:bg-yellow-500 border-2 border-yellow-600 text-black font-bold py-2 px-6 font-mono text-sm transition-all duration-200 transform hover:scale-105 relative group">
          HOME ▶
        </span>
      </Link>

      <div className="container mx-auto px-4 py-8 relative w-full h-full z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-yellow-400 shadow-2xl relative overflow-hidden flex h-[90vh] flex-col items-center justify-center">
          {/* Retro border decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yellow-500"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yellow-500"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yellow-500"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-500"></div>

          <div className="max-w-2xl w-full text-center z-10">
            <h1 className="text-4xl font-mono font-bold text-yellow-700 mb-6">
              [Privacy Policy]
            </h1>
            <p className="text-lg text-gray-800 mb-4 font-mono">
              Welcome to the Privacy Policy page! Here you can find information
              about how we handle your data.
            </p>
            <ul className="text-left text-md text-gray-700 font-mono mb-6 space-y-2">
              <li>
                <span className="font-bold text-yellow-600">• Navigation:</span>
                Use the HOME button to return to the main menu at any time.
              </li>
              <li>
                <span className="font-bold text-yellow-600">• Stages:</span>
                Complete each stage by solving challenges and following the
                instructions.
              </li>
              <li>
                <span className="font-bold text-yellow-600">• XP System:</span>{" "}
                Earn XP by completing tasks and challenges. Some actions may
                award bonus XP!
              </li>
              <li>
                <span className="font-bold text-yellow-600">• Retro PC:</span>{" "}
                Interact with the retro computer for special mini-games and
                puzzles.
              </li>
              <li>
                <span className="font-bold text-yellow-600">• Need Help?</span>{" "}
                Look for hints in dialogue bubbles or challenge sections.
              </li>
            </ul>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded p-4 text-yellow-800 font-mono shadow-inner">
              <p className="mb-2 font-bold">Quick Tips:</p>
              <ul className="list-disc list-inside text-left">
                <li>
                  Be polite in your answers—sometimes you need to say "please"!
                </li>
                <li>Hover over buttons for extra hints.</li>
                <li>
                  Use arrow keys for retro games, but don't worry—page won't
                  scroll.
                </li>
                <li>Check your XP to unlock new stages.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Retro grid background like main menu */}
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

export default PrivacyPage;
