// src/app/flight-results.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlightResultsLoading from "../components/FlightResultsLoading"; // Import the loading component
import FlightDetailsModal from "../components/FlightDetailsModal"; // Import the modal component
import { FaPlane } from "react-icons/fa";

interface Flight {
  flightNumber: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
}

// Simulated flight data (this should come from your API)
const mockFlights: Flight[] = [
  {
    flightNumber: "AI123",
    airline: "Air India",
    from: "DEL",
    to: "BOM",
    departureTime: "09:00 AM",
    arrivalTime: "11:00 AM",
    price: "₹4500",
  },
  {
    flightNumber: "6E456",
    airline: "IndiGo",
    from: "DEL",
    to: "BOM",
    departureTime: "01:00 PM",
    arrivalTime: "03:00 PM",
    price: "₹4000",
  },
];

export default function FlightResults() {
  const searchParams = useSearchParams();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  useEffect(() => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (from && to) {
      setLoading(true);
      setTimeout(() => {
        const filteredFlights = mockFlights.filter(
          (flight) => flight.from === from && flight.to === to
        );
        setFlights(filteredFlights);
        setLoading(false);
      }, 2000); // Simulate a 2-second API delay
    }
  }, [searchParams]);

  // Display the loading screen while fetching flight results
  if (loading) {
    return (
      <FlightResultsLoading
        from={searchParams.get("from") || "Unknown Departure"}
        to={searchParams.get("to") || "Unknown Destination"}
        travelDates={`${
          searchParams.get("departureDate") || "Unknown Date"
        } - ${searchParams.get("returnDate") || "Unknown Date"}`}
      />
    );
  }

  // Function to handle opening the modal
  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="bg-white shadow-md rounded-md flex items-center justify-between p-4 mb-6">
        <div className="flex gap-4 items-center">
          <span className="text-lg font-semibold">
            {searchParams.get("from") || "Unknown Departure"}
          </span>
          <FaPlane className="text-xl text-gray-500" />
          <span className="text-lg font-semibold">
            {searchParams.get("to") || "Unknown Destination"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{`${
            searchParams.get("departureDate") || "Unknown Date"
          } - ${searchParams.get("returnDate") || "Unknown Date"}`}</span>
        </div>
      </div>

      {flights.length === 0 ? (
        <p>No flights found for your search criteria.</p>
      ) : (
        <div className="grid gap-4">
          {flights.map((flight, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h2 className="font-semibold">
                {flight.airline} - {flight.flightNumber}
              </h2>
              <p>From: {flight.from}</p>
              <p>To: {flight.to}</p>
              <p>Departure: {flight.departureTime}</p>
              <p>Arrival: {flight.arrivalTime}</p>
              <p>Price: {flight.price}</p>

              {/* Select Flight Button */}
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleSelectFlight(flight)}
              >
                Select Flight
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Flight Details Modal */}
      <FlightDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        flightDetails={selectedFlight}
      />
    </div>
  );
}
