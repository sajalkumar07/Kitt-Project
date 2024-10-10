"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoTwo from "../../../public/Logo 2.png";
import { useSearchParams } from "next/navigation";
import airportData from "@/app/airport.json";

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

interface AirportInfo {
  code: string;
  name: string;
}

const airports: {
  name: string;
  code: string;
  city: string;
  country: string;
}[] = airportData.airports;

const getAirportInfo = (code: string): AirportInfo => {
  const airport = airports.find((a) => a.code === code); // Use the 'airports' array from JSON
  return airport
    ? { code: airport.code, name: airport.name }
    : { code, name: "" };
};

const renderAirportInfo = (airportCode: string) => {
  const { code, name } = getAirportInfo(airportCode);
  return (
    <div className="whitespace-warp w-[300px] overflow-hidden text-ellipsis">
      <span className="font-bold">{code} • </span> {name}
    </div>
  );
};

// FlightDetailsModal component
const FlightDetailsModal: React.FC<FlightDetailsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");

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
      date: "",
      time: "",
      from: "",
      to: "",
      duration: "",
      airline: "",
      flightNumber: "",
      aircraftType: "",
      isLastSegment: false,
    },
    {
      date: "",
      time: "",
      from: "",
      to: "",
      duration: "",
      airline: "",
      flightNumber: "",
      aircraftType: "",
      isLastSegment: true,
    },
  ];

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
          <div className=" w-screen  mb-[190px] ">
            <div className="mb-[20px] ">
              <p className="text-xs">Sat 28 Sept • 2:15</p>
              <p className="font-semibold">{renderAirportInfo(from || "")}</p>
            </div>

            <div className="">
              <p className="text-xs"> Sat 28 Sept • 2:15</p>
              <p className="font-semibold">{renderAirportInfo(to || "")}</p>
            </div>
            <div className="flex items-center mt-10 ml-20 gap-3">
              <p>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2003_832)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.00395 1.74998C4.10445 1.74998 1.75395 4.10048 1.75395 6.99998C1.75395 9.89948 4.10445 12.25 7.00395 12.25C9.90344 12.25 12.2539 9.89948 12.2539 6.99998C12.2539 4.10048 9.90344 1.74998 7.00395 1.74998ZM0.58728 6.99998C0.58728 3.45615 3.46012 0.583313 7.00395 0.583313C10.5478 0.583313 13.4206 3.45615 13.4206 6.99998C13.4206 10.5438 10.5478 13.4166 7.00395 13.4166C3.46012 13.4166 0.58728 10.5438 0.58728 6.99998ZM7.00395 2.91665C7.32611 2.91665 7.58728 3.17781 7.58728 3.49998V6.63946L9.59816 7.6449C9.88631 7.78897 10.0031 8.13937 9.85903 8.42752C9.71495 8.71568 9.36456 8.83247 9.07641 8.6884L6.74307 7.52173C6.54545 7.42292 6.42061 7.22093 6.42061 6.99998V3.49998C6.42061 3.17781 6.68178 2.91665 7.00395 2.91665Z"
                      fill="#787B80"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2003_832">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.00390625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className="text-[#787B80] ">Layover 2h 10min</p>
            </div>
          </div>

          <div className="w-screen  mb-[300px]">
            <div className="flex justify-between items-center w-[200px] ml-20 ">
              <Image src={LogoTwo} alt="" />
              <div className="flex flex-col ">
                <p>Lufthansa • SV555</p>
                <p>Economy • A331</p>
                <p>Flight time 3h 45m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center -mt-[120px]">
          <div className="flex flex-col items-center w-[150px] "></div>
          <div className=" w-screen  ">
            <div className=" mb-[20px]">
              <p className="text-xs"> Sat 28 Sept • 2:15</p>
              <p className="font-semibold ">{renderAirportInfo(to || "")}</p>
            </div>
            <div className="">
              <p className="text-xs">Sat 28 Sept • 2:15</p>
              <p className="font-semibold">{renderAirportInfo(from || "")}</p>
            </div>
          </div>
          <div className="w-screen  ">
            <div className="flex justify-between items-center w-[200px] ml-20 ">
              <Image src={LogoTwo} alt="" />
              <div className="flex flex-col">
                <p>Lufthansa • SV553</p>
                <p>Economy • A330</p>
                <p>Flight time 3h 45m</p>
              </div>
            </div>
          </div>
        </div>
        {/* Flight Segment Display */}
        <div className="">
          {flightSegments.map((segment, index) => (
            <FlightSegment
              key={index}
              date={segment.date}
              time={segment.time}
              from={segment.from}
              to={segment.to} // Added 'to' property
              duration={segment.duration} // Added 'duration' property
              airline={segment.airline} // Added 'airline' property
              flightNumber={segment.flightNumber} // Added 'flightNumber' property
              aircraftType={segment.aircraftType} // Added 'aircraftType' property
              isLastSegment={segment.isLastSegment}
            />
          ))}
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
  <div className="">
    {/* <div className="ml-10">
      <p className="text-sm text-gray-500">{`${date}  ${time}`}</p>
      <p className="font-semibold">{from}</p>
      {!isLastSegment && <div className="my-2"></div>}
    </div> */}
  </div>
);

export default FlightDetailsModal;
