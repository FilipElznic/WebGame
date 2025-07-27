import React, { useState } from "react";
import Navbar from "../Components/Navbar";

function MainMenu() {
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
  ]);

  const toggleHomework = (id) => {
    setHomeworkList(
      homeworkList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <Navbar />

      <div className="w-[9vw] h-[9vw] bg-black absolute left-7 top-1/2 z-20"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Game Menu */}
          <div className="flex-1">
            <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-yellow-400 shadow-2xl z-10 h-[90vh] relative">
              <h1 className="text-6xl font-bold text-black text-center mb-6">
                Map of the Tasks
              </h1>

              <div className="w-[9vw] h-[9vw] bg-black absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-end pb-2">
                <span className="text-white font-mono text-xs font-bold">
                  TASK 1
                </span>
              </div>
              <div className="w-[9vw] h-[9vw] bg-black absolute right-1/4 top-1/3 transform translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-end pb-2">
                <span className="text-white font-mono text-xs font-bold">
                  TASK 2
                </span>
              </div>
              <div className="w-[9vw] h-[9vw] bg-black absolute right-1/4 bottom-1/3 transform translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-end pb-2">
                <span className="text-white font-mono text-xs font-bold">
                  TASK 3
                </span>
              </div>
              <div className="w-[9vw] h-[9vw] bg-black absolute left-1/2 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-end pb-2">
                <span className="text-white font-mono text-xs font-bold">
                  TASK 4
                </span>
              </div>
              <div className="w-[9vw] h-[9vw] bg-black absolute left-1/4 bottom-1/3 transform -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-end pb-2">
                <span className="text-white font-mono text-xs font-bold">
                  TASK 5
                </span>
              </div>
              <div className="w-[9vw] h-[9vw] bg-black absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-end pb-2">
                <span className="text-white font-mono text-xs font-bold">
                  TASK 6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
