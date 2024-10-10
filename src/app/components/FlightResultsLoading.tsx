import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import GIF from "../../../public/plane.gif";
import spinner from "../../../public/spinner.gif";
import { Check } from "lucide-react";
import FlightInfoNav from "./FlightInfoNavBar";
import LoadingBar from "./SmoothFlowLoader";
import Image from "next/image";

export default function FlightResults() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departureDate = searchParams.get("departureDate");
  const returnDate = searchParams.get("returnDate");

  const steps = [
    "Searching 400+ flights...",
    "Attaching company rules",
    "Serving best results",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1;
        } else {
          clearInterval(timer);
          return prevStep;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  });

  const onModify = () => {
    console.log("modify");
  };

  return (
    <div className="h-screen bg-white relative">
      {/* Flight Info Navigation Bar */}
      <FlightInfoNav
        from={from ?? " "}
        to={to ?? " "}
        departureDate={departureDate ?? " "}
        returnDate={returnDate ?? " "}
        onModify={onModify}
      />
      <LoadingBar></LoadingBar>
      {/* Blurred out flight results - Skeleton Loading */}
      <div className="relative flex items-center justify-center flex-col overflow-auto mt-9">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="w-[1056px] h-[180px] bg-white mb-4">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Loading Section */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full">
        <div className="bg-white p-10 shadow-md rounded-xl flex flex-col items-center justify-center w-[323px] h-[300px] border-[1px] border:[#E6E8EB]">
          {/* GIF of Paper Plane */}
          <div className="paper-plane-container">
            <Image
              src={GIF}
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
                  <div className="h-5 w-5 relative">
                    <Image
                      src={spinner}
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
}
