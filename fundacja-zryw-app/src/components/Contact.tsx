import React from "react";
import people from "/photos/people.jpg";



const Contact: React.FC = () => {
  return (
    <section className={`pb-32`}>
        <div className="w-main mx-auto">
            <img src={people} alt="" />

            <div className="relative z-10 h-full flex flex-col justify-between p-12 md:p-20">
                <p className="text-white text-center">
                    Aplikuj na zryw
                </p>
                <div className="flex justify-center">
                    <button>
                        Aplikuj
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;