import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-24 w-24 hover:drop-shadow-lg transition-all duration-300"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-24 w-24 hover:drop-shadow-lg transition-all duration-300 animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-8">
        Vite + React + Tailwind ✨
      </h1>

      {/* Tailwind Test Card */}
      <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-2xl shadow-2xl border border-indigo-100 mb-6">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
          🎨 Tailwind CSS Test
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-500 h-12 rounded-lg flex items-center justify-center text-white font-medium">
            Red
          </div>
          <div className="bg-green-500 h-12 rounded-lg flex items-center justify-center text-white font-medium">
            Green
          </div>
          <div className="bg-blue-500 h-12 rounded-lg flex items-center justify-center text-white font-medium">
            Blue
          </div>
        </div>

        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
        >
          🚀 Count is {count}
        </button>
        <p className="text-gray-600 text-center mb-4">
          Edit{" "}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>

        {/* Responsive Grid Test */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
          <div className="bg-yellow-400 h-8 rounded flex items-center justify-center text-xs font-bold">
            XS
          </div>
          <div className="bg-orange-400 h-8 rounded flex items-center justify-center text-xs font-bold">
            SM
          </div>
          <div className="bg-red-400 h-8 rounded flex items-center justify-center text-xs font-bold">
            MD
          </div>
          <div className="bg-purple-400 h-8 rounded flex items-center justify-center text-xs font-bold">
            LG
          </div>
        </div>

        {/* Animation Test */}
        <div className="flex justify-center space-x-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div
            className="w-4 h-4 bg-green-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-4 h-4 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Additional Tailwind Features Test */}
      <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Tailwind Working!
            </h3>
            <p className="text-gray-500 text-sm">
              All styles are being applied correctly
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 mt-8 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
