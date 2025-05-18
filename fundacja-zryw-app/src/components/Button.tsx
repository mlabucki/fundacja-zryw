import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => (
  <button
    className={`bg-accent text-white font-new-order text-base px-6 py-2 rounded-full ${className}`}
  >
    {children}
  </button>
);

export default Button;
