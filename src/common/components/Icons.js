import React from "react";

export const IconLogo = ({ colorClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31.814 31.815"
    className={`${colorClass}`}
    fill="currentColor"
  >
    <path d="M31.814 13.411a2.047 2.047 0 10-3.546 1.392l-.852 1.444a2.042 2.042 0 00-2.299 1.152h-2.029a2.05 2.05 0 00-1.686-1.191l-.883-1.509c.285-.354.457-.801.457-1.288 0-.468-.158-.896-.421-1.24l.902-1.536c.024.001.048.003.073.003a2.046 2.046 0 100-4.095 2.049 2.049 0 00-2.049 2.048c0 .44.141.848.379 1.183l-.92 1.589h-.014c-.836 0-1.553.501-1.871 1.217l-2.278.013a2.045 2.045 0 00-1.872-1.229l-.898-1.551a2.044 2.044 0 00.142-2.674l.847-1.46a2.046 2.046 0 00-.096-4.091 2.047 2.047 0 00-1.551 3.382l-.812 1.375h-.005c-.87 0-1.611.544-1.908 1.31H6.269a2.047 2.047 0 10-.007 1.891h2.58c.317.466.823.792 1.407.874l1.03 1.746a2.038 2.038 0 00.04 2.544l-.882 1.495a2.045 2.045 0 00-1.766 1.196H6.312A2.045 2.045 0 004.45 16.2a2.049 2.049 0 00-1.579 3.353l-.894 1.561a2.046 2.046 0 00.071 4.092 2.047 2.047 0 001.583-3.346l.891-1.565a2.047 2.047 0 001.688-1.003h2.564c.32.539.879.92 1.532.992l.956 1.651a2.034 2.034 0 00-.408 1.224c0 .511.188.978.498 1.336l-.95 1.642a2.047 2.047 0 101.648.667l.502-.867.002.002.426-.734a2.048 2.048 0 001.744-1.109h2.384a2.039 2.039 0 001.752 1.109l.896 1.55a2.049 2.049 0 101.678-.612l-.951-1.65a2.035 2.035 0 00.082-2.559l.965-1.657a2.048 2.048 0 001.457-.98h2.233a2.045 2.045 0 003.625-1.885l1.123-1.957a2.06 2.06 0 001.846-2.044zm-12.886 7.768c-.843 0-1.566.437-1.881 1.164h-2.266a2.046 2.046 0 00-1.88-1.235c-.024 0-.048.002-.073.004l-.82-1.445a2.042 2.042 0 00.056-2.776l.829-1.433.008.001c.794 0 1.481-.453 1.821-1.114h2.384c.328.64.982 1.082 1.743 1.109l.829 1.452a2.04 2.04 0 00-.502 1.342c0 .559.225 1.101.586 1.471l-.831 1.463c0-.003-.002-.003-.003-.003z"></path>
  </svg>
);

export const IconHomeOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-6 m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const IconUserOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-6 m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export const IconUserCircleOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-6 m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const IconChatOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-6 m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

export const IconSettingsOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-6 m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const IconGlobeOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-6 m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

export const IconMapPinOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} w-full m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const IconStarOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);
export const IconStarFill = ({ colorClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${colorClass} m-auto`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const IconInfoOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
export const IconEditOutline = ({ strokeWidth, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} m-auto`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

export const IconSpinner = ({ strokeWidth = 5, colorClass }) => (
  <svg
    className={`stroke-current ${colorClass} m-auto spinner`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
  >
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth={strokeWidth}
    ></circle>
  </svg>
);
export const IconNavProfile = () => (
  <svg
    className="text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const IconSearch = ({ strokeWidth = 2, colorClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
