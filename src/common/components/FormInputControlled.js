import { IconInfoOutline } from "./Icons";
import React from "react";
import Tooltip from "./Tooltip";

const FormInputControlled = ({
  id,
  labelText,
  name,
  type,
  required = false,
  tooltipText,
  onChange,
  validationError = false,
  disabled = false,
  autoFocus = false,
  minLength = 0,
  maxLength = 100,
  placeholder = "",
  value,
}) => (
  <>
    <div className="flex justify-between items-center">
      <label
        className="block text-gray-600 text-sm font-medium mb-2"
        htmlFor={id}
      >
        {labelText}
      </label>
      <div className="mb-2 text-xs text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer">
        {tooltipText ? (
          <Tooltip tooltipText={tooltipText}>
            <div className="w-4 h-4">
              <IconInfoOutline strokeWidth={2} />
            </div>
          </Tooltip>
        ) : null}
      </div>
    </div>
    <input
      id={id}
      name={name}
      className={` ${
        validationError
          ? "ring-red-400 ring-2 border-red-500"
          : "focus:border-blue-500 focus:ring-blue-300 focus:ring-2"
      } bg-white text-gray-700 border border-gray-300 focus:outline-none rounded-lg py-1 px-4 block w-full transition-all ease-out duration-300`}
      type={type}
      onChange={onChange}
      disabled={disabled}
      autoFocus={autoFocus}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
    />
  </>
);
export default FormInputControlled;
