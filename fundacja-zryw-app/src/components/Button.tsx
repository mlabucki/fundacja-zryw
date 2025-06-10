import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  link: string;
  blank?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", style, link, blank }) => (
    <Link to={link}
      className={`rounded-full font-calluna text-base text-white shadow transition focus:outline-none flex justify-center items-center ${className}`}
      style={style}
      target={blank ? '_blank' : '_parent'}
    >
      <div className="flex justify-center items-center w-full h-full z-2">
        {children}
      </div>
    </Link>
);

export default Button;
