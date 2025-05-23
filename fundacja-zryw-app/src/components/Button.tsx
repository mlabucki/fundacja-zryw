import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => (
  <button
    className={`rounded-full font-calluna font-bold px-6 py-2 text-base shadow transition focus:outline-none flex justify-center items-center ${className}`}
  >
    {children}
  </button>
);

export default Button;
