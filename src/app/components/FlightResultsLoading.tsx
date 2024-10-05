import React from "react";
import GIF from "../../../public/plane.gif"; // Adjust the path based on your folder structure

const FlightResultsLoading: React.FC<{
  from: string;
  to: string;
  travelDates: string;
}> = ({ from, to, travelDates }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Search Bar */}
      <div className="bg-white shadow-md rounded-md flex items-center justify-between p-4 mb-6">
        <div className="flex gap-4 items-center">
          <span className="text-lg font-semibold">{from}</span>
          <span className="text-lg font-semibold">{to}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{travelDates}</span>
        </div>
      </div>

      {/* Loading Section */}
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white p-10 shadow-lg rounded-md flex flex-col items-center">
          {/* GIF of Paper Plane */}
          <div className="paper-plane-container mb-4 animate-waveFloat">
            <img src={GIF.src} alt="Paper Plane" className="w-[100px]" />
          </div>
          <p className="text-xl font-semibold">Searching for flights...</p>
          <p className="text-sm text-gray-500">Attaching company rules</p>
          <p className="text-sm text-gray-500">Serving best results</p>
        </div>
      </div>

      {/* Blurred out flight results - Skeleton Loading */}
      <div className="grid grid-cols-1 gap-4">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="h-16 bg-gray-200 rounded-md animate-pulse"
            />
          ))}
      </div>
    </div>
  );
};

export default FlightResultsLoading;
