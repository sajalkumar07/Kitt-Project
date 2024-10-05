import React from "react";

const FlightTimeline = ({ segments }) => {
  return (
    <div className="absolute left-0 top-0 h-[400px] flex flex-col items-center">
      <svg
        className="mb-4"
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
        className="mb-4"
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
        className="mb-4"
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
        className="mb-4"
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
        className="mb-4"
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
        className="mb-4"
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
  );
};

export default FlightTimeline;
