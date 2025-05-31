import React from "react";
import Contact from "./Contact";
import applyToZryw from "/photos/apply-to-zryw.jpg";

const ApplyContact: React.FC = () => {
  return (
    <section className="w-full grid grid-cols-10 mt-[120px]">
      <div className="hidden xs:block xs:col-span-1" />
      <div className="col-span-10 xs:col-span-8">
        <Contact
          src={applyToZryw}
          text="Aplikuj na zryw"
          buttonText="Aplikuj"
          aspect="aspect-[4/1]"
          className="w-full h-full mx-0"
        />
      </div>
      <div className="hidden xs:block xs:col-span-1" />
    </section>
  );
};

export default ApplyContact;
