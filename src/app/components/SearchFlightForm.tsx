"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomMarkerIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  >
    <g clipPath="url(#clip0_2003_1382)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0002 0.833313C10.4604 0.833313 10.8335 1.20641 10.8335 1.66665V2.54575C14.3098 2.93004 17.0701 5.6903 17.4544 9.16665H18.3335C18.7937 9.16665 19.1668 9.53974 19.1668 9.99998C19.1668 10.4602 18.7937 10.8333 18.3335 10.8333H17.4544C17.0701 14.3097 14.3098 17.0699 10.8335 17.4542V18.3333C10.8335 18.7935 10.4604 19.1666 10.0002 19.1666C9.53992 19.1666 9.16683 18.7935 9.16683 18.3333V17.4542C5.69048 17.0699 2.93023 14.3097 2.54594 10.8333H1.66683C1.20659 10.8333 0.833496 10.4602 0.833496 9.99998C0.833496 9.53974 1.20659 9.16665 1.66683 9.16665H2.54594C2.93023 5.6903 5.69048 2.93004 9.16683 2.54575V1.66665C9.16683 1.20641 9.53992 0.833313 10.0002 0.833313ZM10.0002 4.16665C6.7785 4.16665 4.16683 6.77832 4.16683 9.99998C4.16683 13.2216 6.7785 15.8333 10.0002 15.8333C13.2218 15.8333 15.8335 13.2216 15.8335 9.99998C15.8335 6.77832 13.2218 4.16665 10.0002 4.16665ZM10.0002 8.33331C9.07969 8.33331 8.3335 9.0795 8.3335 9.99998C8.3335 10.9205 9.07969 11.6666 10.0002 11.6666C10.9206 11.6666 11.6668 10.9205 11.6668 9.99998C11.6668 9.0795 10.9206 8.33331 10.0002 8.33331ZM6.66683 9.99998C6.66683 8.15903 8.15921 6.66665 10.0002 6.66665C11.8411 6.66665 13.3335 8.15903 13.3335 9.99998C13.3335 11.8409 11.8411 13.3333 10.0002 13.3333C8.15921 13.3333 6.66683 11.8409 6.66683 9.99998Z"
        fill="#C9CACC"
      />
    </g>
    <defs>
      <clipPath id="clip0_2003_1382">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
// The airport data
const airports = [
  {
    airports: [
      {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        city: "New Delhi",
        country: "India",
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        city: "Mumbai",
        country: "India",
      },
      {
        name: "John F. Kennedy International Airport",
        code: "JFK",
        city: "New York",
        country: "United States",
      },
      {
        name: "Dubai International Airport",
        code: "DXB",
        city: "Dubai",
        country: "United Arab Emirates",
      },
      {
        name: "Heathrow Airport",
        code: "LHR",
        city: "London",
        country: "United Kingdom",
      },
      {
        name: "Singapore Changi Airport",
        code: "SIN",
        city: "Singapore",
        country: "Singapore",
      },
      {
        name: "Los Angeles International Airport",
        code: "LAX",
        city: "Los Angeles",
        country: "United States",
      },
      {
        name: "Beijing Capital International Airport",
        code: "PEK",
        city: "Beijing",
        country: "China",
      },
      {
        name: "Sydney Kingsford Smith International Airport",
        code: "SYD",
        city: "Sydney",
        country: "Australia",
      },
      {
        name: "Tokyo Haneda Airport",
        code: "HND",
        city: "Tokyo",
        country: "Japan",
      },
    ],
  },
];

export default function SearchFlightForm() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const query = new URLSearchParams({
      from,
      to,
      departureDate,
      returnDate,
    });

    setTimeout(() => {
      router.push(`/flight-results?${query.toString()}`);
    }, 2000);
  };

  return (
    <div className="flex items-center flex-col mt-[200px] w-full">
      <h2 className="text-3xl font-semibold">Good afternoon, KITT</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-md w-[1057px] flex flex-col mt-20 border-black"
      >
        <div className="text-[16px]  rounded-md font-medium mb-4 bg-[#F5F7FA] w-[127px] h-[36px] text-center items-center flex justify-center">
          Flights
        </div>

        {/*Select Destination*/}
        <div className="flex justify-between items-center">
          <div className="flex-1 mr-2 ml-2">
            <label className="block mb-2 text-sm font-medium">
              <div className="relative mt-1">
                <CustomMarkerIcon />
                <select
                  className="block w-[267px] h-[60px] pl-10 pr-10 py-2  text-gray-700 bg-white border border-gray-300 rounded-md appearance-none "
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Where from ?
                  </option>
                  {airports[0].airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </label>
          </div>
          {/*Swap Destination*/}
          <button
            type="button"
            className=""
            onClick={() => {
              const temp = from;
              setFrom(to);
              setTo(temp);
            }}
          >
            <div className="">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="52" height="52" rx="26" fill="#F5F7FA" />
                <path
                  d="M33.1673 30.1667H19.834M19.834 30.1667L23.1673 26.8333M19.834 30.1667L23.1673 33.5M19.834 21.8333H33.1673M33.1673 21.8333L29.834 18.5M33.1673 21.8333L29.834 25.1667"
                  stroke="#001F1D"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
          {/*Swap Destination*/}
          <div className="flex-1 mr-2 ml-2">
            <label className="block mb-2 text-sm font-medium">
              <div className="relative mt-1">
                <CustomMarkerIcon />
                <select
                  className="block w-[267px] h-[60px] pl-10 pr-10 py-2  text-gray-700 bg-white border border-gray-300 rounded-md appearance-none "
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Where to ?
                  </option>
                  {airports[0].airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </label>
          </div>
          {/*Select Destination*/}

          {/* Date Selection */}
          <div className="flex-1 ml-4">
            <label className="block mb-2 text-sm font-medium ">
              <input
                type="date"
                className="block  p-2 mt-1 border rounded-md w-[177px] h-[60px]"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="flex-1 ml-4">
            <label className="block mb-2 text-sm font-medium ">
              <input
                type="date"
                className="block  p-2 mt-1 border rounded-md w-[177px] h-[60px]"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </label>
          </div>
          {/* Date Selection */}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-[#003E39] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 w-[249px] h-[48px] "
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.16683 1.66665C4.40541 1.66665 2.16683 3.90522 2.16683 6.66665C2.16683 9.42807 4.40541 11.6666 7.16683 11.6666C8.5089 11.6666 9.72747 11.1379 10.6256 10.2773C10.6463 10.2486 10.6696 10.2211 10.6955 10.1952C10.7214 10.1694 10.7488 10.1461 10.7776 10.1253C11.6381 9.22723 12.1668 8.00869 12.1668 6.66665C12.1668 3.90522 9.92825 1.66665 7.16683 1.66665ZM12.0919 10.6488C12.9726 9.56093 13.5002 8.1754 13.5002 6.66665C13.5002 3.16884 10.6646 0.333313 7.16683 0.333313C3.66903 0.333313 0.833496 3.16884 0.833496 6.66665C0.833496 10.1645 3.66903 13 7.16683 13C8.67561 13 10.0612 12.4724 11.1491 11.5916L13.0288 13.4714C13.2891 13.7317 13.7112 13.7317 13.9716 13.4714C14.2319 13.211 14.2319 12.7889 13.9716 12.5286L12.0919 10.6488Z"
                fill="white"
              />
            </svg>
            Search Flights
          </button>
        </div>
      </form>
    </div>
  );
}
