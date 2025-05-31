import React, { useState } from "react";

interface AboutWhyProps {
  title: string;
  text: string;
  bgColor: string;
  textColor: string;
  clipPath?: string;
  arrowColor?: string;
}

const AboutWhy: React.FC<AboutWhyProps> = ({
  title,
  text,
  bgColor,
  textColor,
  clipPath,
  arrowColor = "#222", // domyślnie czarny
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-[609px] rounded-t-lg relative ${bgColor} cursor-pointer select-none transition-all duration-500 overflow-hidden`}
      style={{ height: open ? 220 : 145 }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div
        className="absolute top-0 right-1/6 z-10 flex items-center justify-center bg-[var(--color-background)] rounded-full w-[35px] h-[33px] shadow"
        style={{ ...(clipPath ? { clipPath } : {}), color: arrowColor }}
      >
        <svg
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.05 0.5V14.875H0.25L6.322 23.5L12.25 14.875H7.45V0.5H5.05Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center h-[145px] w-full">
        <h3 className={`font-new-order font-bold text-[54px] ${textColor}`}>
          {title}
        </h3>
      </div>
      {open && (
        <div className="w-full flex justify-center">
          <p className={`font-calluna text-base text-center ${textColor}`}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutWhy;
