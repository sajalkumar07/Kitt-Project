"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlightResultsLoading from "../components/FlightResultsLoading";
import FlightDetailsModal from "../components/FlightDetailsModal";
import FlightInfoNav from "../components/FlightInfoNavBar";
import SearchFlightForm from "../components/SearchFlightForm";
import LogoOne from "../../../public/Logo 1.png";
import LogoTwo from "../../../public/Logo 2.png";
import Image from "next/image";
import FlightSearchFormModel from "./FlightModificationModel"; // Ensure this is the correct path

interface Flight {
  from: string;

  id: number;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
}

export default function FlightResults() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departureDate = searchParams.get("departureDate");
  const returnDate = searchParams.get("returnDate");

  useEffect(() => {
    if (from && to) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulate a 2-second API delay
    }
  }, [from, to]);

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setModalOpen(true);
  };

  if (loading) {
    return (
      <FlightResultsLoading
        from={from || "Unknown Departure"}
        to={to || "Unknown Destination"}
        travelDates={`${departureDate || "Unknown Date"} - ${
          returnDate || "Unknown Date"
        }`}
      />
    );
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Unknown Date";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short", // e.g., Thu
      day: "numeric", // e.g., 10
      month: "short", // e.g., Oct
      year: "2-digit", // e.g., 24
    }).format(date);
  };

  return (
    <div className=" h-screen bg-white relative  ">
      <FlightInfoNav
        from={from ?? ""}
        to={to ?? ""}
        departureDate={departureDate ?? ""}
        returnDate={returnDate ?? ""}
        onModify={() => {}}
      />

      {/* Main Content Below Header */}
      <div className="relative flex items-center justify-center  flex-col overflow-auto mt-5  ">
        <div className="flex  w-[1056px] mt-5 mb-6">
          <h2 className="text-[#787B80] text-lg font-semibold ">
            Showing 356 of 767 results
          </h2>
        </div>
        {/* Repeat the flight information sections */}

        {/* Card 1 */}
        <div className="w-[1056px] h-[200px] mb-4 flex justify-between items-center  border-[1px] border-[#E6E8EB] rounded-md ">
          <div className="w-[85%] h-full grid grid-cols-1 gap-2 p-1 border-r-[1px] border-[#E6E8EB]">
            <div className="w-full h-[180px] rounded-lg p-4  flex flex-col gap-4 gap-y-[50px]">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex justify-between items-center gap-5">
                  <Image src={LogoOne} alt="" />
                  <div>
                    <p className="font-extralight">Emirates • AT 4334 </p>
                    9:45 AM - 11:45 AM
                  </div>
                </div>

                <div>
                  <p className="font-extralight">{`${from}-${to}`}</p>
                  2h 10min
                </div>
                <div>Non stop</div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="flex justify-between items-center gap-5">
                  <Image src={LogoTwo} alt="" />
                  <div>
                    <p className="font-extralight">Emirates • AT 4334</p>
                    11:45 AM - 6:45 AM
                  </div>
                </div>

                <div>
                  <p className="font-extralight">{`${from}-${to}`}</p>
                  2h 10min
                </div>
                <div>
                  <p>2 stop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-2">
            <div className="mt-4 mb-4">
              <p className="font-extralight">From</p>
              <h1 className="text-xl font-semibold">AED 2,456.90</h1>
            </div>
            <button
              onClick={handleSelectFlight}
              className="bg-[#003E39] text-white px-6 py-2 rounded-md flex justify-center w-[189px] h-[40px]"
            >
              Select
            </button>
          </div>
        </div>

        <div className="w-[1056px] h-[200px] mb-4 flex justify-between items-center  border-[1px] border-[#E6E8EB] rounded-md ">
          <div className="w-[85%] h-full grid grid-cols-1 gap-2 p-1 border-r-[1px] border-[#E6E8EB]">
            <div className="w-full h-[180px]  rounded-lg p-4  flex flex-col gap-4 gap-y-[50px]">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex justify-between items-center gap-5">
                  <Image src={LogoOne} alt="" />
                  <div>
                    <p className="font-extralight">Emirates • AT 4334 </p>
                    9:45 AM - 11:45 AM
                  </div>
                </div>

                <div>
                  <p className="font-extralight">{`${from}-${to}`}</p>
                  2h 10min
                </div>
                <div>Non stop</div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="flex justify-between items-center gap-5">
                  <Image src={LogoTwo} alt="" />
                  <div>
                    <p className="font-extralight">Emirates • AT 4334</p>
                    11:45 AM - 6:45 AM
                  </div>
                </div>

                <div>
                  <p className="font-extralight">{`${from}-${to}`}</p>
                  2h 10min
                </div>
                <div>
                  <p>Non stop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-2">
            <div className="mt-4 mb-4">
              <p className="font-extralight">From</p>
              <h1 className="text-xl font-semibold">AED 2,456.90</h1>
            </div>
            <button
              onClick={handleSelectFlight}
              className="bg-[#003E39] text-white px-6 py-2 rounded-md flex justify-center w-[189px] h-[40px]"
            >
              Select
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[1056px] h-[200px] mb-4 flex justify-between items-center  border-[1px] border-[#E6E8EB] rounded-md ">
          <div className="w-[85%] h-full grid grid-cols-1 gap-2 p-1 border-r-[1px] border-[#E6E8EB]">
            <div className="w-full h-[180px]  rounded-lg p-4  flex flex-col gap-4 gap-y-[50px]">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex justify-between items-center gap-5">
                  <Image src={LogoOne} alt="" />
                  <div>
                    <p className="font-extralight">Emirates • AT 4334 </p>
                    9:45 AM - 11:45 AM
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-500 font-light text-sm">{`${from}-${to}`}</p>
                  2h 10min
                </div>

                <div>Non stop</div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="flex justify-between items-center gap-5">
                  <Image src={LogoOne} alt="" />
                  <div>
                    <p className="font-extralight">Emirates • AT 4334 </p>
                    9:45 AM - 11:45 AM
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-500 font-light text-sm">{`${from}-${to}`}</p>
                  2h 10min
                </div>

                <div>Non stop</div>
              </div>
            </div>
          </div>

          <div className="mx-2">
            <div className="mt-4 mb-4">
              <p className="font-extralight">From</p>
              <h1 className="text-xl font-semibold">AED 2,456.90</h1>
            </div>
            <button
              onClick={handleSelectFlight}
              className="bg-[#003E39] text-white px-6 py-2 rounded-md flex justify-center w-[189px] h-[40px]"
            >
              Select
            </button>
          </div>
        </div>
      </div>

      <FlightDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        flightDetails={selectedFlight}
      />
    </div>
  );
}
