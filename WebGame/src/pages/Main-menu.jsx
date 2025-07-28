import React from "react";
import Navbar from "../Components/Navbar";
import HomeWork from "../Components/HomeWork";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../Components/UserDataProvider";

function MainMenu() {
  const { canAccessStage, userXP, getRequiredXPForStage } = useUserData();
  const [showHomework, setShowHomework] = useState(false);
  const [homeworkList, setHomeworkList] = useState([
    {
      id: 1,
      task: "Math Assignment Ch. 5",
      dueDate: "Tomorrow",
      completed: false,
    },
    { id: 2, task: "History Essay - WWII", dueDate: "Friday", completed: true },
    { id: 3, task: "Science Lab Report", dueDate: "Monday", completed: false },
    {
      id: 4,
      task: "English Reading Ch. 1-3",
      dueDate: "Wednesday",
      completed: false,
    },
    {
      id: 5,
      task: "Chemistry Experiment Report",
      dueDate: "Next Tuesday",
      completed: false,
    },
  ]);

  // Component for individual stage links with lock functionality
  const StageLink = ({ stageNumber, to, className }) => {
    const isAccessible = canAccessStage(stageNumber);
    const requiredXP = getRequiredXPForStage(stageNumber - 1);

    if (!isAccessible) {
      // Locked stage
      return (
        <div
          className={`${className} relative group cursor-not-allowed opacity-75`}
        >
          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-600"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-600"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-600"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-600"></div>

          {/* Lock overlay */}
          <div className="absolute inset-0 bg-red-100 border-4 border-red-400 flex flex-col items-center justify-center">
            <div className="text-2xl mb-1">🔒</div>
            <span className="font-mono text-xs font-bold text-red-700">
              LOCKED
            </span>
          </div>

          {/* Tooltip on hover */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-2 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
            Requires {requiredXP} XP (Current: {userXP})
          </div>
        </div>
      );
    }

    // Accessible stage
    return (
      <Link to={to} className={`${className} hover:bg-yellow-200`}>
        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

        <div className="bg-black text-white px-2 py-1 border border-gray-700 mb-1 group-hover:bg-gray-800 transition-colors duration-200">
          <span className="font-mono text-xs font-bold">STAGE</span>
        </div>
        <span className="text-black font-mono text-lg font-bold">
          {stageNumber.toString().padStart(2, "0")}
        </span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      {/* Homework List Button - Retro Style */}
      <div
        className="w-[8vw] h-[8vw] bg-white/90 border-4 border-yellow-400 absolute left-7 top-1/2 transform -translate-y-1/2 z-30 text-center flex items-center justify-center cursor-pointer hover:bg-yellow-50 transition-colors duration-200"
        onClick={() => setShowHomework(true)}
      >
        {/* Corner decorations for homework button */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-yellow-500"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-yellow-500"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>

        <span className="text-black font-mono text-xs font-bold text-center px-2">
          [HOMEWORK
          <br />
          LIST]
        </span>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Game Menu */}
          <div className="flex-1">
            <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-yellow-400 shadow-2xl z-10 h-[90vh] relative">
              {/* Retro border decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yellow-500"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yellow-500"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yellow-500"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-500"></div>

              {/* Retro title with bracket styling */}
              <div className="text-center mb-8">
                <div className="bg-yellow-100 border-2 border-yellow-400 inline-block px-6 py-3 relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
                  <h1 className="text-5xl font-mono font-bold text-black">
                    [TASK MAP]
                  </h1>
                </div>
              </div>

              {/* Retro task indicators with enhanced styling */}

              <StageLink
                stageNumber={1}
                to="/stage1"
                className="w-[10vw] h-[10vw] bg-yellow-100 border-4 border-yellow-400 absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 group"
              />
              <Link
                to="/stage2"
                className="w-[10vw] h-[10vw] bg-yellow-100 border-4 border-yellow-400 absolute right-1/4 top-1/3 transform translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors duration-200 group"
              >
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

                <div className="bg-black text-white px-2 py-1 border border-gray-700 mb-1 group-hover:bg-gray-800 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold">STAGE</span>
                </div>
                <span className="text-black font-mono text-lg font-bold">
                  02
                </span>
              </Link>
              <Link
                to="/stage3"
                className="w-[10vw] h-[10vw] bg-yellow-100 border-4 border-yellow-400 absolute right-1/4 bottom-1/3 transform translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors duration-200 group"
              >
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

                <div className="bg-black text-white px-2 py-1 border border-gray-700 mb-1 group-hover:bg-gray-800 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold">STAGE</span>
                </div>
                <span className="text-black font-mono text-lg font-bold">
                  03
                </span>
              </Link>
              <Link
                to="/stage4"
                className="w-[10vw] h-[10vw] bg-yellow-100 border-4 border-yellow-400 absolute left-1/2 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors duration-200 group"
              >
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

                <div className="bg-black text-white px-2 py-1 border border-gray-700 mb-1 group-hover:bg-gray-800 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold">STAGE</span>
                </div>
                <span className="text-black font-mono text-lg font-bold">
                  04
                </span>
              </Link>
              <Link
                to="/stage5"
                className="w-[10vw] h-[10vw] bg-yellow-100 border-4 border-yellow-400 absolute left-1/4 bottom-1/3 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors duration-200 group"
              >
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

                <div className="bg-black text-white px-2 py-1 border border-gray-700 mb-1 group-hover:bg-gray-800 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold">STAGE</span>
                </div>
                <span className="text-black font-mono text-lg font-bold">
                  05
                </span>
              </Link>
              <Link
                to="/stage6"
                className="w-[10vw] h-[10vw] bg-yellow-100 border-4 border-yellow-400 absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors duration-200 group"
              >
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-600"></div>

                <div className="bg-black text-white px-2 py-1 border border-gray-700 mb-1 group-hover:bg-gray-800 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold">STAGE</span>
                </div>
                <span className="text-black font-mono text-lg font-bold">
                  06
                </span>
              </Link>

              {/* Central map decoration */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 border-4 border-yellow-300 bg-yellow-50 rotate-45 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                  <div className="bg-yellow-100 border-2 border-yellow-400 px-3 py-1">
                    <span className="font-mono text-xs font-bold text-yellow-800">
                      [MAP CORE]
                    </span>
                  </div>
                </div>
              </div>

              {/* Retro grid pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(yellow 1px, transparent 1px), linear-gradient(90deg, yellow 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Homework List Modal */}
      <HomeWork
        showHomework={showHomework}
        setShowHomework={setShowHomework}
        homeworkList={homeworkList}
      />
    </div>
  );
}
export default MainMenu;
