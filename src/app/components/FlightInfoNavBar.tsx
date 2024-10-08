import React from "react";
import { Search, Plane } from "lucide-react";

interface FlightInfoNavProps {
  from: string;
  to: string;
  departureDate: string | Date; // Use string or Date depending on how dates are managed
  returnDate: string | Date; // Use string or Date as appropriate
  onModify: () => void;
  selectedFlight: any; // Define a more specific type if possible
}

const FlightInfoNav: React.FC<FlightInfoNavProps> = ({
  from,
  to,
  departureDate,
  returnDate,
  onModify,
  selectedFlight,
}) => {
  const formatDate = (dateString: string | Date): string => {
    const date = new Date(dateString);
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
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
  };

  return (
    <div className="  w-[100%] h-[106px] flex items-center justify-center shadow-md">
      <div className="flex justify-between items-center gap-[300px] mt-6 ">
        <div className=" rounded-full flex items-center p-2 w-[662px] h-[50px] justify-center border-[1px] border-[#E5EBEB]">
          <div className="flex-1 px-4">
            <input
              type="text"
              value={from}
              placeholder="From"
              className="w-full outline-none"
              readOnly
            />
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="flex-1 px-4">
            <input
              type="text"
              value={to}
              placeholder="To"
              className="w-full outline-none"
              readOnly
            />
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="flex-1 px-4">
            <input
              type="text"
              value={`${formatDate(departureDate)} - ${formatDate(returnDate)}`}
              placeholder="Date"
              className="w-full outline-none"
              readOnly
            />
          </div>
          <button
            onClick={onModify}
            className="bg-[#E5EBEB] text-black p-2 rounded-full "
          >
            <Search size={15} />
          </button>
        </div>
        <div>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#E6E8EB"
            />
            <path
              d="M27 17L17 27M17 17L27 27"
              stroke="#787B80"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoNav;
