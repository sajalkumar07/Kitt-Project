"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlane } from "react-icons/fa";

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

    // Send the search parameters to the backend or API
    const query = new URLSearchParams({
      from,
      to,
      departureDate,
      returnDate,
    });

    // Simulate an API request (replace this with your real API endpoint)
    setTimeout(() => {
      // Redirect to results page after fetching data
      router.push(`/flight-results?${query.toString()}`);
    }, 2000); // Simulate 2-second API delay
  };

  return (
    <div className="flex flex-col items-center mt-[200px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-md w-full max-w-lg"
      >
        <h2 className="text-lg font-semibold mb-4">Search Flights</h2>

        {/* From */}
        <label className="block mb-2 text-sm font-medium">
          Where from?
          <select
            className="block w-full p-2 mt-1 border rounded-md"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Departure Airport
            </option>
            {airports[0].airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.name} ({airport.code})
              </option>
            ))}
          </select>
        </label>

        {/* To */}
        <label className="block mb-2 text-sm font-medium">
          Where to?
          <select
            className="block w-full p-2 mt-1 border rounded-md"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Destination Airport
            </option>
            {airports[0].airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.name} ({airport.code})
              </option>
            ))}
          </select>
        </label>

        {/* Departure Date */}
        <label className="block mb-2 text-sm font-medium">
          Departure Date
          <input
            type="date"
            className="block w-full p-2 mt-1 border rounded-md"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </label>

        {/* Return Date */}
        <label className="block mb-4 text-sm font-medium">
          Return Date
          <input
            type="date"
            className="block w-full p-2 mt-1 border rounded-md"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
        >
          <FaPlane />
          Search Flights
        </button>
      </form>
    </div>
  );
}
