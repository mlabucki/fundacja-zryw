import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => (
  <button
    className={`bg-accent text-white font-calluna rounded-full flex justify-center items-center ${className}`}
  >
    {children}
  </button>
);

export default Button;
