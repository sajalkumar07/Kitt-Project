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
    <div className="relative h-screen bg-white p-6">
      {/* Blurred out flight results - Skeleton Loading */}
      <div className="absolute inset-0 flex items-center justify-center flex-col overflow-auto pt-20">
        {/* Repeat the flight information sections */}
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="w-[90%] h-[180px] bg-white mb-4">
              <div className="w-full h-full grid grid-cols-1 gap-2 p-1">
                <div className=" w-full h-full bg-white rounded-lg p-4 border-[1px] border-[#E6E8EB] flex flex-col gap-4">
                  {/* Row 1 */}
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-100 animate-pulse  rounded-md "></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 rounded-md animate-pulse  w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded-md animate-pulse  w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-100 animate-pulse  rounded-md "></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 animate-puls rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 animate-pulse rounded-md w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Loading Section */}
      <div className="flex flex-col items-center justify-center h-[100%] relative">
        <div className="bg-white p-10 shadow-md rounded-xl flex flex-col items-center justify-center w-[323px] h-[300px] border-[1px] border:[#E6E8EB]">
          {/* GIF of Paper Plane */}
          <div className="paper-plane-container ">
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
