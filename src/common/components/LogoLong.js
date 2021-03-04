import { IconLogo } from "./Icons";
import React from "react";

const LogoLong = ({ size = "sm" }) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return {
          iconClass: "w-8 h-8",
          textSize: "text-2xl",
        };
      case "lg":
        return {
          iconClass: "w-12 h-12",
          textSize: "text-5xl",
        };

      default:
        return {
          iconClass: "w-8 h-8",
          textSize: "text-2xl",
        };
    }
  };
  return (
    <div className="flex flex-row space-x-2 justify-start select-none w-max">
      <div className={getSize().iconClass}>
        <IconLogo colorClass="text-blue-500" />
      </div>
      <h2 className={`${getSize().textSize} font-black text-gray-700 text-center`}>ZEMED</h2>
    </div>
  );
};

export default LogoLong;
