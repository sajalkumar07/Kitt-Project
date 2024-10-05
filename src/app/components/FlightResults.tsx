// src/app/components/FlightResults.tsx
"use client";

import { useState, useEffect } from "react";

interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  price: string;
}

const flightData: Flight[] = [
  {
    id: 1,
    airline: "Emirates",
    flightNumber: "EK 1234",
    departureTime: "9:45 AM",
    arrivalTime: "11:45 AM",
    duration: "2h 10min",
    stops: "Non stop",
    price: "AED 2,456.90",
  },
  {
    id: 2,
    airline: "Lufthansa",
    flightNumber: "LH 4324",
    departureTime: "11:45 PM",
    arrivalTime: "6:45 AM",
    duration: "7h 10min",
    stops: "1 stop",
    price: "AED 1,456.90",
  },
  // More flight data can be added here
];

export default function FlightResults() {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    // In a real-world app, you would fetch flight results from an API
    setFlights(flightData);
  }, []);

  return (
    <div className="flex flex-col items-center mt-[50px]">
      <h2 className="text-lg font-semibold mb-4">
        Showing {flights.length} results
      </h2>
      <div className="w-full max-w-4xl">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="border p-4 mb-4 rounded-lg flex justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="font-semibold">
                {flight.airline} - {flight.flightNumber}
              </span>
              <span>
                {flight.departureTime} - {flight.arrivalTime}
              </span>
              <span>{flight.duration}</span>
              <span>{flight.stops}</span>
            </div>
            <div className="text-right">
              <span className="block text-lg font-semibold">
                {flight.price}
              </span>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mt-2">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
