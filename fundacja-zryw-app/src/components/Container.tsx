import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-mobile xs:max-w-main mx-auto px-[5%] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
