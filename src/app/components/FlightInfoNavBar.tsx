// import React, { useState } from "react";
// import { Search, X } from "lucide-react";
// import FlightSearchFormModel from "@/app/components/FlightModificationModel"; // Ensure this is the correct path

// interface FlightInfoNavProps {
//   from: string;
//   to: string;
//   departureDate: string | Date;
//   returnDate: string | Date;
//   onModify: () => void;
// }

// const FlightInfoNav: React.FC<FlightInfoNavProps> = ({
//   from,
//   to,
//   departureDate,
//   returnDate,
//   onModify,
// }) => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const formatDate = (date: string | Date): string => {
//     const dateObj = new Date(date);
//     const monthNames = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`;
//   };

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="w-full h-[106px] flex items-center justify-center shadow-md">
//       <div className="flex justify-center items-center">
//         <div className="flex justify-between items-center gap-[300px] mt-auto">
//           <div className="rounded-full flex items-center p-2 w-[710px] h-[50px] justify-center border-[1px] border-[#E5EBEB]">
//             <div className="flex-1 px-4">
//               <input
//                 type="text"
//                 value={from}
//                 placeholder="From"
//                 className="w-full outline-none cursor-pointer"
//                 onClick={openModal}
//                 readOnly
//               />
//             </div>
//             <div className="w-px h-8 bg-gray-300"></div>
//             <div className="flex-1 px-4">
//               <input
//                 type="text"
//                 value={to}
//                 placeholder="To"
//                 className="w-full outline-none cursor-pointer"
//                 onClick={openModal}
//                 readOnly
//               />
//             </div>
//             <div className="w-px h-8 bg-gray-300"></div>
//             <div className="flex-1 px-4">
//               <input
//                 type="text"
//                 value={`${formatDate(departureDate)} - ${formatDate(
//                   returnDate
//                 )}`}
//                 placeholder="Date"
//                 className="w-full outline-none cursor-pointer"
//                 onClick={openModal}
//                 readOnly
//               />
//             </div>
//             <button
//               onClick={onModify}
//               className="bg-[#E5EBEB] text-black p-2 rounded-full"
//             >
//               <Search size={15} />
//             </button>
//           </div>
//           <div className="close">
//             <X size={24} color="#787B80" />
//           </div>
//         </div>
//       </div>
//       {modalOpen && (
//         <FlightSearchFormModel
//           isOpen={modalOpen}
//           onClose={closeModal}
//           title="Select Details"
//         >
//           <p>Select your flight details here...</p>
//           {/* Additional content for the modal can be added here */}
//         </FlightSearchFormModel>
//       )}
//     </div>
//   );
// };

// export default FlightInfoNav;
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import FlightSearchFormModel from "@/app/components/FlightModificationModel";
import airportData from "@/app/airport.json"; // Ensure this path is correct

interface FlightInfoNavProps {
  from: string;
  to: string;
  departureDate: string | Date;
  returnDate: string | Date;
  onModify: () => void;
}

interface AirportInfo {
  code: string;
  name: string;
}

// Accessing the 'airports' array from the JSON object
const airports: {
  name: string;
  code: string;
  city: string;
  country: string;
}[] = airportData.airports;

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

  const getAirportInfo = (code: string): AirportInfo => {
    const airport = airports.find((a) => a.code === code); // Use the 'airports' array from JSON
    return airport
      ? { code: airport.code, name: airport.name }
      : { code, name: "" };
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const renderAirportInfo = (airportCode: string) => {
    const { code, name } = getAirportInfo(airportCode);
    return (
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="font-bold">{code}</span> {name}
      </div>
    );
  };

  return (
    <div className="w-full h-[106px] flex items-center justify-center shadow-md">
      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center gap-[300px] mt-auto">
          <div className="rounded-full flex items-center p-2 w-[710px] h-[50px] justify-center border-[1px] border-[#E5EBEB]">
            <div className="flex-1 px-4 overflow-hidden">
              <div
                className="w-full outline-none cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                onClick={openModal}
                title={getAirportInfo(from).code}
              >
                {renderAirportInfo(from)}
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex-1 px-4 overflow-hidden">
              <div
                className="w-full outline-none cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                onClick={openModal}
                title={getAirportInfo(to).code}
              >
                {renderAirportInfo(to)}
              </div>
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
            <X size={24} color="#787B80" />
          </div>
        </div>
      </div>
      {modalOpen && (
        <FlightSearchFormModel
          isOpen={modalOpen}
          onClose={closeModal}
          title="Select Details"
        >
          <p>Select your flight details here...</p>
        </FlightSearchFormModel>
      )}
    </div>
  );
};

export default FlightInfoNav;
