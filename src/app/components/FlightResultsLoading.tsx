import React, { useState, useEffect } from "react";
import GIF from "../../../public/plane.gif"; // Adjust the path based on your folder structure
import spinner from "../../../public/spinner.gif"; // Your spinner GIF
import { Check } from "lucide-react";

const FlightResultsLoading: React.FC<{
  from: string;
  to: string;
  travelDates: string;
}> = ({ from, to, travelDates }) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Define all steps in a single array
  const steps = [
    "Searching for flights...",
    "Attaching company rules",
    "Serving best results",
  ];

  useEffect(() => {
    // Set the interval to change steps every 3 seconds
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1; // Move to the next step
        } else {
          clearInterval(timer);
          return prevStep; // Keep at the last step
        }
      });
    }, 1000); // 1 seconds for each step

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Search Bar */}
      <div className="bg-white shadow-md rounded-lg flex items-center justify-between p-4 mb-6">
        <div className="flex gap-4 items-center">
          <span className="text-lg font-semibold">{from}</span>
          <span className="text-lg font-semibold">{to}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{travelDates}</span>
        </div>
      </div>

      {/* Loading Section */}
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white p-10 shadow-lg rounded-md flex flex-col items-center">
          {/* GIF of Paper Plane */}
          <div className="paper-plane-container mb-4 animate-waveFloat">
            <img
              src={GIF.src}
              alt="Paper Plane"
              className="w-[130px] h-[130px]"
            />
          </div>
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
                    className="absolute inset-0 w-full h-full animate-spin"
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

      {/* Blurred out flight results - Skeleton Loading */}
      <div className="grid grid-cols-1 gap-4">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="h-16 bg-gray-200 rounded-md animate-pulse"
            />
          ))}
      </div>
    </div>
  );
};

export default FlightResultsLoading;
