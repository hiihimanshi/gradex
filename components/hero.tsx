"use client";

import React from "react";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-fadeInUp bg-blue-400 opacity-20 w-24 h-24 rounded-full blur-lg absolute top-10 left-20"></div>
        <div className="animate-fadeInUp bg-indigo-400 opacity-20 w-16 h-16 rounded-full blur-lg absolute bottom-32 right-16"></div>
        <div className="animate-fadeInUp bg-yellow-400 opacity-30 w-12 h-12 rounded-full blur-md absolute top-1/3 left-1/2"></div>
        <div className="animate-fadeInUp bg-purple-400 opacity-25 w-20 h-20 rounded-full blur-xl absolute bottom-10 left-10"></div>
      </div>

      {/* 3D Animation or Moving Object */}
      <div className="absolute right-0 top-1/3 transform translate-x-20 animate-moveObject">
        <div className="w-32 h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg shadow-lg transform rotate-45 animate-spin-slow "></div>
      </div>
      <div className="absolute left-0 top-1/3 transform translate-x-20 animate-moveObject">
        <div className="w-32 h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg shadow-lg transform rotate-45 animate-spin-slow"></div>
      </div>
      <div className="absolute left-0 bottom-0 transform translate-x-20 animate-moveObject">
        <div className="w-32 h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg shadow-lg transform rotate-45 animate-spin-slow"></div>
      </div>
      <div className="absolute right-0 top-0 transform translate-x-20 animate-moveObject">
        <div className="w-32 h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg shadow-lg transform rotate-45 animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fadeInUp">
          Welcome to <span className="text-yellow-300">GradeX</span>
        </h1>
        <p className="text-white text-base md:text-lg max-w-xl mb-10 animate-fadeInUp delay-200">
          Empower your academic journey with intuitive tools. Analyze, calculate, and visualize your performance effortlessly.
        </p>

        {/* Search Bar */}
        <div className="flex space-x-2 w-full max-w-md animate-fadeInUp delay-400">
          <input
            type="text"
            placeholder="Enter your enrollment number..."
            className="w-full px-4 py-3 rounded-l-lg border-none outline-none focus:ring-2 focus:ring-blue-300 shadow-lg text-gray-800"
          />
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-r-lg shadow-lg transition-transform transform hover:scale-105">
            Search
          </button>
        </div>

        {/* Explore Button */}
        <button className="mt-8 px-8 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 animate-fadeInUp delay-600">
          Explore Features
        </button>
      </div>
    </div>
  );
};

export default HomePage;
