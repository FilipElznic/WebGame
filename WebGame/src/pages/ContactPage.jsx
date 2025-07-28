import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-2xl mx-auto bg-white border-4 border-yellow-400 rounded-lg shadow-2xl p-8 flex flex-col items-center">
            <h1 className="text-4xl font-mono font-bold mb-4 text-yellow-700 text-center">
              CONTACT.EXE
            </h1>
            <p className="text-lg font-mono text-gray-700 mb-8 text-center">
              Have a question, feedback, or just want to say hi? <br /> Fill out
              the form below or reach out via social links!
            </p>
            <form className="w-full space-y-6">
              <div>
                <label
                  className="block text-yellow-600 font-bold font-mono mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-2 border-yellow-400 rounded px-4 py-2 font-mono focus:outline-none focus:border-yellow-600 bg-yellow-50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block text-yellow-600 font-bold font-mono mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-2 border-yellow-400 rounded px-4 py-2 font-mono focus:outline-none focus:border-yellow-600 bg-yellow-50"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  className="block text-yellow-600 font-bold font-mono mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-2 border-yellow-400 rounded px-4 py-2 font-mono focus:outline-none focus:border-yellow-600 bg-yellow-50"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 border-2 border-yellow-600 text-black font-bold py-2 px-6 font-mono text-lg rounded transition-all duration-200 transform hover:scale-105 relative group"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 flex space-x-4">
              <a
                href="https://www.instagram.com/fprofilipka/"
                className="group relative text-gray-800 hover:text-yellow-600 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <div className="bg-yellow-100 border-2 border-yellow-400 p-3 group-hover:border-yellow-600 group-hover:bg-yellow-200 transition-colors duration-300">
                  <span className="font-mono text-lg font-bold">IG</span>
                </div>
              </a>
              <a
                href="https://github.com/FilipElznicm"
                className="group relative text-gray-800 hover:text-yellow-600 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on GitHub"
              >
                <div className="bg-yellow-100 border-2 border-yellow-400 p-3 group-hover:border-yellow-600 group-hover:bg-yellow-200 transition-colors duration-300">
                  <span className="font-mono text-lg font-bold">GH</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/filip-elznic/"
                className="group relative text-gray-800 hover:text-yellow-600 transition-all duration-300 hover:scale-110"
                aria-label="Join our Discord"
              >
                <div className="bg-yellow-100 border-2 border-yellow-400 p-3 group-hover:border-yellow-600 group-hover:bg-yellow-200 transition-colors duration-300">
                  <span className="font-mono text-lg font-bold">LI</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Retro scan lines effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="h-full w-full opacity-5"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, #fbbf24 3px, #fbbf24 6px)",
            }}
          ></div>
        </div>
        {/* Animated corner brackets */}
        <div className="absolute top-4 left-4 text-yellow-400 font-mono text-2xl animate-pulse">
          ◤
        </div>
        <div className="absolute top-4 right-4 text-yellow-400 font-mono text-2xl animate-pulse">
          ◥
        </div>
        <div className="absolute bottom-4 left-4 text-yellow-400 font-mono text-2xl animate-pulse">
          ◣
        </div>
        <div className="absolute bottom-4 right-4 text-yellow-400 font-mono text-2xl animate-pulse">
          ◢
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
