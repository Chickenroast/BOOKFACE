import React from "react";

const HideIcon = () => {
  return (
    <svg
      id="Calque_1"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="h-6 w-6" // You can adjust the size using Tailwind CSS classes
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: #1d1d1b;
              stroke: #1d1d1b;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 3px;
            }

            .cls-2 {
              fill: #fff;
              stroke-width: 0px;
            }
          `}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m114.16,176.61s169.05-15.01,263.06,0c0,0,10.27,80.58-23.7,132.72l48.19,82.95-96.38-40.29s-208.55,68.73-191.17-175.37Z"
      />
      <path
        className="cls-2"
        d="m204.01,228.45c0,14.72-11.94,26.66-26.66,26.66s-26.66-11.94-26.66-26.66,11.94,16.72,26.66,16.72,26.66-31.44,26.66-16.72Z"
      />
      <path
        className="cls-2"
        d="m326.04,228.45c0,14.72-11.94,26.66-26.66,26.66s-26.66-11.94-26.66-26.66,11.94,16.44,26.66,16.44,26.66-31.16,26.66-16.44Z"
      />
    </svg>
  );
};

export default HideIcon;
