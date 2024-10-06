import React, { useState, useEffect } from "react";
import GIF from "../../../public/plane.gif"; // Adjust the path based on your folder structure
import spinner from "../../../public/spinner.gif"; // Your spinner GIF
import { Check } from "lucide-react";
import { FaPlane } from "react-icons/fa";

const FlightResultsLoading: React.FC<{
  from: string;
  to: string;
  travelDates: string;
}> = ({ from, to, travelDates }) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Define all steps in a single array
  const steps = [
    "Searching 400+ flights...",
    "Attaching company rules",
    "Serving best results",
  ];

  useEffect(() => {
    // Set the interval to change steps every 1 second
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1; // Move to the next step
        } else {
          clearInterval(timer);
          return prevStep; // Keep at the last step
        }
      });
    }, 1000); // 1 second for each step

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen bg-gray-50 p-6">
      {/* Blurred out flight results - Skeleton Loading */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="blur-md w-[90%] h-[100%] grid grid-cols-1 gap-4 p-1">
          {/* Big section for Descriptions */}

          {/* Small section for Profile Pictures */}
          <div className="h-20 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-20 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-20 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-20 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-20 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-20 bg-gray-300 rounded-md animate-pulse" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-md rounded-lg flex items-center justify-between p-4 mb-6 relative z-10">
        <div className="flex gap-4 items-center">
          <span className="text-lg font-semibold">{from}</span>
          <FaPlane className="text-xl text-gray-500" />
          <span className="text-lg font-semibold">{to}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{travelDates}</span>
        </div>
      </div>

      {/* Loading Section */}
      <div className="flex flex-col items-center justify-center h-[60vh] relative z-10">
        <div className="bg-white p-10 shadow-lg rounded-xl flex flex-col items-center w-[332px] h-[300px]">
          {/* GIF of Paper Plane */}
          <div className="paper-plane-container mb-4 animate-waveFloat">
            <img
              src={GIF.src}
              alt="Paper Plane"
              className="w-[130px] h-[130px]"
            />
          </div>

          {/* Container for Steps */}
          <div className="flex flex-col items-center w-[332px]">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                {currentStep > index ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : currentStep === index ? (
                  // Show the spinner for the current step
                  <div className="h-5 w-5 relative">
                    <img
                      src={spinner.src}
                      alt="Loading..."
                      className="absolute inset-0 w-[18px] h-[18px] animate-spin"
                    />
                  </div>
                ) : (
                  <div className="w-5" />
                )}
                <p
                  className={`${
                    currentStep === index
                      ? "text-xl font-semibold"
                      : "text-sm text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightResultsLoading;
