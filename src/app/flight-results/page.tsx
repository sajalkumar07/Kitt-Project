"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlightResultsLoading from "../components/FlightResultsLoading";
import FlightDetailsModal from "../components/FlightDetailsModal";
import { FaPlane } from "react-icons/fa";

export default function FlightResults() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  useEffect(() => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (from && to) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Simulate a 2-second API delay
    }
  }, [searchParams]);

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setModalOpen(true);
  };

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

  return (
    <div className="relative h-screen bg-white p-6">
      {/* Main Content Below Header */}
      <div className="absolute inset-0 flex items-center justify-center flex-col overflow-auto pt-20">
        {/* Repeat the flight information sections */}
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="w-[90%] h-[180px] bg-white mb-4">
              <div className="w-full h-full grid grid-cols-1 gap-2 p-1">
                <div className="w-full h-full bg-white rounded-lg p-4 border-[1px] border-[#E6E8EB] flex flex-col gap-4">
                  {/* Row 1 */}
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-100 rounded-md "></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-100 rounded-md "></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                    </div>
                    <div className="">
                      <button
                        onClick={handleSelectFlight}
                        className="bg-green-700 text-white px-6 py-2 rounded-md flex justify-self-end"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <FlightDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        flightDetails={selectedFlight}
      />
    </div>
  );
}
