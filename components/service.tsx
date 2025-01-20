"use client";

import React from "react";

const services = [
  {
    title: "Company Criteria Checker",
    description: "Check your eligibility for various companies based on CGPA requirements.",
    icon: "🏢",
  },
  {
    title: "Result Filtering",
    description: "Filter and view results by rank, branch, or CGPA range.",
    icon: "📊",
  },
  {
    title: "Targeted SGPA/CGPA",
    description: "Calculate the grades you need to achieve your academic goals.",
    icon: "🎯",
  },
  {
    title: "Graphical Insights",
    description: "Visualize performance trends with intuitive charts and graphs.",
    icon: "📈",
  },
  {
    title: "Rank Comparison",
    description: "Compare your performance with peers across your batch or branch.",
    icon: "🏆",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">
          What We Offer
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg rounded-xl p-6 text-white transform transition-transform duration-300 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease ${index * 0.2}s both`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>

              {/* Description */}
              <p className="text-sm text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
