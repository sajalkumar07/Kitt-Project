import React, { useState, useEffect } from "react";
import FlightTimeline from "./FlightTimeline";

const FlightDetailsModal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const flightSegments = [
    {
      date: "Sat 28 Sept",
      time: "2:15",
      from: "DXB • Dubai International Airport",
      to: "RUH • King Khalid International Airport",
      duration: "3h 45m",
      airline: "Saudi Arabian Airlines",
      flightNumber: "SV553",
      aircraftType: "A330",
    },
    {
      date: "Sat 28 Sept",
      time: "2:15",
      from: "RUH • King Khalid International Airport",
      to: "CDG • Paris - Charles de Gaulle Airport",
      duration: "3h 45m",
      airline: "Saudi Arabian Airlines",
      flightNumber: "SV553",
      aircraftType: "A330",
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-[50%] h-[95%] my-auto mr-4 rounded-lg shadow-lg overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 slide-in" : "translate-x-full slide-out"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Flight details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
          </div>

          <div className="space-y-5 relative">
            <FlightTimeline segments={flightSegments} />
            {flightSegments.map((segment, index) => (
              <FlightSegment
                key={index}
                {...segment}
                isLastSegment={index === flightSegments.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        .slide-in {
          animation: slideIn 0.3s ease-out;
        }
        .slide-out {
          animation: slideOut 0.3s ease-in;
        }
      `}</style>
    </div>
  );
};
const FlightSegment = ({
  date,
  time,
  from,
  to,
  duration,
  airline,
  flightNumber,
  aircraftType,
  isLastSegment,
}) => (
  <div className="relative z-10 h-[250px]">
    <div className="ml-10">
      <p className="text-sm text-gray-500">{`${date} • ${time}`}</p>
      <p className="font-semibold">{from}</p>
      {!isLastSegment && (
        <div className="my-2">
          <svg
            className="inline-block mr-2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-500">Layover 2h 25m</span>
        </div>
      )}
      {isLastSegment && <p className="font-semibold mt-1">{to}</p>}
      <div className="mt-2 text-sm text-gray-600">
        <p>{`${airline} • ${flightNumber}`}</p>
        <p>{`Economy • ${aircraftType}`}</p>
        <p>{`Flight time ${duration}`}</p>
      </div>
    </div>
  </div>
);

export default FlightDetailsModal;
