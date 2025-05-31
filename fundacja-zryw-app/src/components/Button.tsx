import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", style }) => (
  <button
    className={`rounded-full font-calluna px-6 py-2 text-base text-white shadow transition focus:outline-none flex justify-center items-center ${className}`}
    style={style}
  >
    {children}
  </button>
);

export default Button;
