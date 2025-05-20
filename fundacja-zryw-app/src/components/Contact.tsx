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
      <h2 className="font-['New_Order'] text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        {text}
      </h2>
    </div>
    {/* Prostokąt + półkole na desktopie */}
    <div className="hidden md:flex absolute left-1/2 bottom-0 -translate-x-1/2 w-75 h-45 bg-white rounded-t-full shadow-md justify-center items-center z-10">
      <button
        className="bg-[var(--color-accent)] text-white font-['New_Order'] text-base px-8 py-3 rounded-full "
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
    <div className="flex md:hidden absolute left-1/2 bottom-4 -translate-x-1/2 z-10">
      <button
        className="bg-[var(--color-accent)] text-white font-['New_Order'] text-base px-8 py-3 rounded-full "
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default Contact;
