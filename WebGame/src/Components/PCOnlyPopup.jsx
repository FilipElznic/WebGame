import { useState, useEffect } from "react";

function PCOnlyPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        "mobile",
        "android",
        "iphone",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
      ];
      const isMobileDevice = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      );

      // Also check screen width as an additional indicator
      const isSmallScreen = window.innerWidth < 768;

      return isMobileDevice || isSmallScreen;
    };

    const deviceIsMobile = checkDevice();
    setIsMobile(deviceIsMobile);

    // Show popup if on mobile/tablet or small screen
    if (deviceIsMobile) {
      setShowPopup(true);
    }

    // Listen for window resize to detect orientation changes
    const handleResize = () => {
      const deviceIsMobile = checkDevice();
      setIsMobile(deviceIsMobile);
      if (deviceIsMobile && !showPopup) {
        setShowPopup(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showPopup]);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup || !isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6 relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Icon */}
        <div className="text-center mb-4">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          PC Gaming Experience Required
        </h2>

        {/* Message */}
        <div className="text-gray-600 text-center mb-6 space-y-3">
          <p className="text-lg">
            This web game is optimized for PC and requires:
          </p>
          <ul className="text-left space-y-2 bg-gray-50 p-4 rounded-lg">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Desktop or laptop computer
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Keyboard and mouse controls
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Larger screen for optimal gameplay
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            For the best gaming experience, please access this game from a PC or
            laptop.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={closePopup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            I'll play on PC later
          </button>
          <button
            onClick={closePopup}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Continue anyway
          </button>
        </div>
      </div>
    </div>
  );
}

export default PCOnlyPopup;
