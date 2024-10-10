"use client";
import React from "react";

const LoadingBar: React.FC = () => {
  return (
    <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
      <div className="h-full w-[100%] bg-gradient-to-r from-blue-500/30 to-blue-800/60 animate-loading"></div>
    </div>
  );
};

export default LoadingBar;
