import React, { useState } from "react";

import { Search, X } from "lucide-react";
import { useRouter } from "next/router";

import FlightSearchFormModel from "./FlightModificationModel"; // Ensure this is the correct path

interface FlightInfoNavProps {
  from: string;
  to: string;
  departureDate: string | Date;
  returnDate: string | Date;
  onModify: () => void;
}

const FlightInfoNav: React.FC<FlightInfoNavProps> = ({
  from,
  to,
  departureDate,
  returnDate,
  onModify,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const formatDate = (date: string | Date): string => {
    const dateObj = new Date(date);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`;
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false); // Navigate to the SearchFlightForm route
  };

  return (
    <div className="w-full h-[106px] flex items-center justify-center shadow-md">
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center gap-[300px] mt-auto">
          <div className="rounded-full flex items-center p-2 w-[710px] h-[50px] justify-center border-[1px] border-[#E5EBEB]">
            <div className="flex-1 px-4">
              <input
                type="text"
                value={from}
                placeholder="From"
                className="w-full outline-none cursor-pointer"
                onClick={openModal}
                readOnly
              />
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex-1 px-4">
              <input
                type="text"
                value={to}
                placeholder="To"
                className="w-full outline-none cursor-pointer"
                onClick={openModal}
                readOnly
              />
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex-1 px-4">
              <input
                type="text"
                value={`${formatDate(departureDate)} - ${formatDate(
                  returnDate
                )}`}
                placeholder="Date"
                className="w-full outline-none cursor-pointer"
                onClick={openModal}
                readOnly
              />
            </div>
            <button
              onClick={onModify}
              className="bg-[#E5EBEB] text-black p-2 rounded-full"
            >
              <Search size={15} />
            </button>
          </div>
          <div className="close">
            <X size={24} color="#787B80" onClick={closeModal} />
          </div>
        </div>
      </div>
      {/* Modal component */}
      {modalOpen && (
        <FlightSearchFormModel
          isOpen={modalOpen}
          onClose={closeModal}
          title="Select Details"
        >
          <p>Select your flight details here...</p>
          {/* Additional content for the modal can be added here */}
        </FlightSearchFormModel>
      )}
    </div>
  );
};

export default FlightInfoNav;
