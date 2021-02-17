import { IconLogo } from "./Icons";
import React from "react";

const LogoLong = () => {
  return (
    <div className="flex flex-row space-x-2 justify-center select-none">
      <div className="w-8 h-8">
      <IconLogo colorClass="text-blue-500"/>
      </div>
      <h2 className="text-2xl font-black text-gray-700 text-center">ZEMED</h2>
    </div>
  );
};

export default LogoLong;
