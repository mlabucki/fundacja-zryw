import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", style, link }) => (
    <Link to={link}
      className={`rounded-full font-calluna text-base text-white shadow transition focus:outline-none flex justify-center items-center ${className}`}
      style={style}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        {children}
      </div>
    </Link>
);

export default Button;
