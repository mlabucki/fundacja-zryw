import React from "react";

interface ContactProps {
  text: string;
  src?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  aspect?: string;
}

const Contact: React.FC<ContactProps> = ({
  text,
  src = "./photos/apply-to-zryw.jpg",
  buttonText = "Aplikuj",
  onButtonClick,
  className,
}) => (
  <div
    className={`relative w-full rounded-[2px] overflow-hidden ${
      className ? className : ""
    }`}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover rounded-[2px]"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <h2 className="font-['New_Order'] text-white text-2xl xs:text-3xl font-bold text-center">
        {text}
      </h2>
    </div>
    {/* Biała figura z buttonem - responsywna */}
    <div className="flex absolute left-1/2 bottom-0 -translate-x-1/2 w-40 h-16 xs:w-75 xs:h-45 bg-white rounded-t-full shadow-md justify-center items-center z-10">
      <button
        className="bg-[var(--color-accent)] text-white font-['New_Order'] text-sm px-4 py-2 rounded-full xs:text-base xs:px-8 xs:py-3"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default Contact;
