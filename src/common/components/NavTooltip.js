import React from "react";

const NavTooltip = ({ children, tooltipText }) => {
  const tipRef = React.createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginLeft = "20px";
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginLeft = "10px";
  }
  return (
    <div
      className="relative flex items-center z-20"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute whitespace-no-wrap uppercase bg-blue-400 text-sm text-gray-50 shadow-md px-4 py-2 rounded flex items-center transition-all duration-150 "
        style={{ left: "100%", opacity: 0, top: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-blue-400 h-3 w-3 absolute shadow-md"
          style={{ left: "-6px", transform: "rotate(45deg)" }}
        />
        {tooltipText}
      </div>
      <div onMouseEnter={handleMouseEnter}>{children}</div>
    </div>
  );
};

export default NavTooltip;
