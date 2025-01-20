"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ResultPage: React.FC = () => {
  const studentData = {
    name: "John Doe",
    enrollment: "12345678",
    branch: "Computer Science",
    graduationYear: 2025,
    sgpa: [8.0, 8.5, 8.8, 9.0, 9.2, 9.1, 8.9, 9.3],
    cgpa: 8.9,
    branchRank: 12,
    overallRank: 45,
  };

  // Graph data configuration
  const graphData = {
    labels: studentData.sgpa.map((_, index) => `Semester ${index + 1}`),
    datasets: [
      {
        label: "SGPA Trends",
        data: studentData.sgpa,
        fill: true,
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.4)",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "#4A90E2",
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff",
        titleColor: "#4A90E2",
        bodyColor: "#000000",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#808080",
          font: {
            size: 12,
            family: "Arial",
            weight: 700,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#808080",
          font: {
            size: 12,
            family: "Arial",
            weight: 700,
          },
        },
        grid: {
          color: "rgba(128, 128, 128, 0.2)",
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* Student Info */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">{studentData.name}</h2>
        <p>Enrollment: {studentData.enrollment}</p>
        <p>Branch: {studentData.branch}</p>
        <p>Graduation Year: {studentData.graduationYear}</p>
      </div>

      {/* Results Section */}
      <div className="flex flex-wrap gap-6">
        {/* Table */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">Semester-wise Results</h3>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2">Semester</th>
                <th className="px-4 py-2">SGPA</th>
              </tr>
            </thead>
            <tbody>
              {studentData.sgpa.map((score, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="px-4 py-2">{`Semester ${index + 1}`}</td>
                  <td className="px-4 py-2">{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Graph */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-4">Performance Graph</h3>
          {/* Ensure the chart container has width and height */}
          <div className="relative w-full h-80">
            <Line data={graphData} options={graphOptions} />
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex flex-wrap gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex-1 text-center">
          <h4 className="text-lg font-bold">Overall CGPA</h4>
          <p className="text-2xl">{studentData.cgpa}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex-1 text-center">
          <h4 className="text-lg font-bold">Branch Rank</h4>
          <p className="text-2xl">{studentData.branchRank}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex-1 text-center">
          <h4 className="text-lg font-bold">Overall Rank</h4>
          <p className="text-2xl">{studentData.overallRank}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
