import { IconSpinner } from "../../common/components/Icons";
import React from "react";

const LoadingContainer = ({ authLoaded, profileLoaded }) => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="animate-pulse w-10 h-10 text-gray-500 mb-10">
        <IconSpinner />
      </div>
      <div className="text-md font-lato animate-pulse text-gray-900 text-center">
        {authLoaded
          ? "✔ Auth Loaded successfully"
          : "• Auth is Loading..."}
        <br />
        {authLoaded && profileLoaded
          ? "✔ User profile loaded successfully"
          : "• User profile is Loading..."}
      </div>
    </div>
  );
};

export default LoadingContainer;
