import { IconSpinner } from "../../common/components/Icons";
import LogoLong from "../../common/components/LogoLong";
import React from "react";

const LoadingContainer = ({ authLoaded, profileLoaded }) => {
  return (
    <div className="w-full h-full bg-gray-50 flex flex-col justify-center items-center">
      <LogoLong />
      <div className="w-8 h-8 text-blue-500 mb-2 mt-8">
        <IconSpinner />
      </div>
      <div className="text-sm font-lato animate-pulse text-gray-900 text-center">
        {authLoaded
          ? "✔ Application loaded successfully"
          : "• Application is Loading..."}
        <br />
        {authLoaded && profileLoaded
          ? "✔ User data loaded successfully"
          : "• User data is Loading..."}
      </div>
    </div>
  );
};

export default LoadingContainer;
