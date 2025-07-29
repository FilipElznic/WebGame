import React, { useState, useEffect } from "react";

const RetroComputerLogin = () => {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [blinkCursor, setBlinkCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const cursorTimer = setInterval(() => {
      setBlinkCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "a3F9kL7mV2X0nB6qW8rT1zY5hC4dE7uJ9sP3oG8xQ6vM2iN1A0") {
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
      setPassword("");
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="min-h-screen font-mono">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-yellow-400 shadow-2xl h-[90vh] relative overflow-hidden flex flex-col items-center justify-center">
          {/* Retro border decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yellow-500"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yellow-500"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yellow-500"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-500"></div>

          {/* Challenge text */}
          <div className="w-full h-full bg-black p-6 flex flex-col">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-mono font-bold text-yellow-400 mb-2">
                [CHALLENGE 02]
              </h2>
              <p className="text-lg font-mono text-yellow-300">
                Lets use the computer.
              </p>
            </div>

            {!isLoggedIn ? (
              /* Login Screen */
              <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                {/* Computer Header */}
                <div className="bg-green-900 text-green-400 p-4 mb-6 border border-green-500">
                  <div className="text-center">
                    <div className="text-xs mb-1">RETRO-COMP OS v2.1</div>
                    <div className="text-xs">
                      System Ready - {formatDate(currentTime)}{" "}
                      {formatTime(currentTime)}
                    </div>
                  </div>
                </div>

                {/* Login Form */}
                <div className="bg-gray-900 border border-gray-600 p-6">
                  <div className="text-green-400 text-sm mb-4">
                    === SYSTEM LOGIN ===
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-green-400 text-sm mb-2">
                        Username: <span className="text-white">MOM</span>
                        {blinkCursor && (
                          <span className="text-green-400">_</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-green-400 text-sm block mb-2">
                        Password:
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleLogin(e)}
                        className="bg-black border border-green-500 text-green-400 px-3 py-2 w-full font-mono text-sm focus:outline-none focus:border-green-300"
                        placeholder="Enter password..."
                        autoFocus
                      />
                    </div>

                    <button
                      onClick={handleLogin}
                      className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-6 border border-green-500 transition-colors"
                    >
                      [ENTER]
                    </button>
                  </div>

                  {showError && (
                    <div className="mt-4 text-red-400 text-sm animate-pulse">
                      ACCESS DENIED - Invalid Password
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Desktop Environment */
              <div className="flex-1 flex flex-col">
                {/* Desktop Header */}
                <div className="bg-blue-800 text-white p-2 flex justify-between items-center border-b border-blue-600">
                  <div className="text-sm">Welcome, mom</div>
                  <div className="text-sm">{formatTime(currentTime)}</div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-500 px-3 py-1 text-xs border border-red-400"
                  >
                    LOGOUT
                  </button>
                </div>

                {/* Desktop Content */}
                <div className="flex-1 bg-teal-900 p-6 relative">
                  <div className="text-center text-green-300 text-lg mb-6">
                    🎉 ACCESS GRANTED! 🎉
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {/* Desktop Icons */}
                    <div className="text-center cursor-pointer hover:bg-blue-800/50 p-3 rounded">
                      <div className="text-3xl mb-2">📁</div>
                      <div className="text-xs text-green-300">Files</div>
                    </div>
                    <div className="text-center cursor-pointer hover:bg-blue-800/50 p-3 rounded">
                      <div className="text-3xl mb-2">🖥️</div>
                      <div className="text-xs text-green-300">Terminal</div>
                    </div>
                    <div className="text-center cursor-pointer hover:bg-blue-800/50 p-3 rounded">
                      <div className="text-3xl mb-2">🎮</div>
                      <div className="text-xs text-green-300">Games</div>
                    </div>
                    <div className="text-center cursor-pointer hover:bg-blue-800/50 p-3 rounded">
                      <div className="text-3xl mb-2">⚙️</div>
                      <div className="text-xs text-green-300">Settings</div>
                    </div>
                  </div>

                  {/* Terminal Window */}
                  <div className="bg-black border border-gray-500 p-4 max-w-2xl mx-auto">
                    <div className="bg-gray-700 text-white text-xs py-1 px-3 mb-3 border-b border-gray-500">
                      Terminal - mom@retro-comp
                    </div>
                    <div className="text-green-400 text-sm">
                      <div>$ whoami</div>
                      <div>mom</div>
                      <div>$ echo "Challenge completed successfully!"</div>
                      <div>Challenge completed successfully!</div>
                      <div>$ date</div>
                      <div>
                        {formatDate(currentTime)} {formatTime(currentTime)}
                      </div>
                      <div className="mt-2">
                        $ █
                        {blinkCursor && (
                          <span className="animate-pulse">_</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroComputerLogin;
