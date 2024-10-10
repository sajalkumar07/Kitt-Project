"use client";

import React, { useState, useEffect } from "react";
import FlightTimeline from "./FlightTimeline";
import Image from "next/image";
import LogoOne from "../../../public/Logo 1.png";
import LogoTwo from "../../../public/Logo 2.png";

// Define a type for each flight segment
interface FlightSegmentProps {
  date: string;
  time: string;
  from: string;
  to: string;
  duration: string;
  airline: string;
  flightNumber: string;
  aircraftType: string;
  isLastSegment: boolean;
}

interface FlightDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// FlightDetailsModal component
const FlightDetailsModal: React.FC<FlightDetailsModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  return (
    <div
      className={`fixed inset-0 bg-[#E6E8EB] bg-opacity-50 flex justify-end items-stretch transition-opacity duration-500 ease-in-out ${
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
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="#F5F7FA" />
                <path
                  d="M12.5536 10C11.1513 11.037 9.89185 12.2485 8.80631 13.6038C8.71319 13.72 8.66663 13.86 8.66663 14M12.5536 18C11.1513 16.963 9.89185 15.7515 8.80631 14.3962C8.71319 14.28 8.66663 14.14 8.66663 14M8.66663 14H19.3333"
                  stroke="#484A4D"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-5">
            <h2 className="text-xl font-semibold">Flight details</h2>
          </div>
          <div className="border-b border-gray-300 mt-5"></div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col items-center w-[150px] gap-y-[15px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.00391"
                cy="6"
                r="5.4"
                stroke="#000C0B"
                strokeWidth="1.2"
              />
            </svg>
            <svg
              width="2"
              height="57"
              viewBox="0 0 2 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00391 56L1.00391 1"
                stroke="#000C0B"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.00391"
                cy="6"
                r="5.4"
                stroke="#000C0B"
                strokeWidth="1.2"
              />
            </svg>
            <svg
              width="2"
              height="143"
              viewBox="0 0 2 143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00391 142L1.00391 1"
                stroke="#787B80"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.00391"
                cy="6"
                r="5.4"
                stroke="#000C0B"
                strokeWidth="1.2"
              />
            </svg>
            <svg
              width="2"
              height="57"
              viewBox="0 0 2 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00391 56L1.00391 1"
                stroke="#000C0B"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.00391"
                cy="6"
                r="5.4"
                stroke="#000C0B"
                strokeWidth="1.2"
              />
            </svg>
          </div>
          <div className=" w-screen  mb-[300px] ">
            <div className="mb-[20px]">
              <p className="text-xs">Sat 28 Sept • 2:15</p>
              <p className="font-semibold">DXB • Dubai International Airport</p>
            </div>
            <div className="">
              <p className="text-xs"> Sat 28 Sept • 2:15</p>
              <p className="font-semibold">
                RUH • King Khalid International Airport
              </p>
            </div>
          </div>
          <div className="w-screen  mb-[300px]">
            <div className="flex justify-between items-center w-[300px] ">
              <Image src={LogoTwo} alt="" />
              <div className="flex flex-col">
                <p>Saudi Arabian Airlines • SV553</p>
                <p>Economy • A330</p>
                <p>Flight time 3h 45m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center -mt-[110px]">
          <div className="flex flex-col items-center w-[150px] "></div>
          <div className=" w-screen  ">
            <div className=" mb-[20px]">
              <p className="text-xs"> Sat 28 Sept • 2:15</p>
              <p className="font-semibold ">
                RUH • King Khalid International Airport
              </p>
            </div>
            <div>
              <p className="text-xs">Sat 28 Sept • 2:15</p>
              <p className="font-semibold">
                CDG • Paris - Charles de Gualle Airport
              </p>
            </div>
          </div>
          <div className="w-screen  ">
            <div className="flex justify-between items-center w-[300px] ">
              <Image src={LogoTwo} alt="" />
              <div className="flex flex-col">
                <p>Saudi Arabian Airlines • SV553</p>
                <p>Economy • A330</p>
                <p>Flight time 3h 45m</p>
              </div>
            </div>
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

// FlightSegment component
const FlightSegment: React.FC<FlightSegmentProps> = ({
  date,
  time,
  from,
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
        </div>
      )}
    </div>
  </div>
);

export default FlightDetailsModal;
