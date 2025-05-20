import React from "react";
import picture from '/photos/main-home.jpg'
import arrowDown from '/vectors/arrowDown.svg'
import arrowRounded from '/vectors/arrowRounded.svg'

const LoadingHeader: React.FC = () => {
  return (
    <section className="relative w-mobile xs:w-main mx-auto xs:mt-8 xs:h-[672px] overflow-hidden rounded-lg">
        <img src={picture} alt="zryw-main-picture" className="xs:mt-[-108px] h-[427px] xs:h-auto object-cover object-[72%] rounded-lg"/>
        <div className="absolute hidden xs:block z-2 inset-0 bg-[linear-gradient(285.13deg,_rgba(0,_0,_0,_0)_0.22%,_rgba(81,_81,_61,_0.2)_100%)]"></div>
        <h1 className="z-3 xs:absolute top-10 left-10 text-green mt-6 xs:mt-0 xs:text-white text-4xl xs:text-8xl font-new-order leading-[0.95] tracking-[-0.03em] xs:capitalize">
          Budujemy <br className="hidden xs:block"/> nowe <br /> kadry
        </h1>
        <div
            className="z-3 mt-6 xs:mt-0 h-[140px] xs:w-[338px] xs:h-[187px] xs:absolute xs:bottom-10 xs:right-10 xs:bg-white xs:rounded-lg xs:p-6 flex flex-col justify-between"
            style={{
                clipPath: "path('M 10,0 L 328,0 A 10,10 0,0,1 338,10 L 338 177 A 10,10 0,0,1 328, 187 L 300,187 A 10,10 0,0,1 290,177 L 290,180 A 10,10 0,0,0 240,180 L 240,177 A 10,10 0,0,1 230,187 L 10,187 A 10,10 0,0,1 0,177 L 0,10 A 10,10 0,0,1 10,0 Z')",
            }}
        >
          
          <p className="text-lg font-calluna">Jesteśmy społecznością państwowców.</p>
          <p className="text-lg font-calluna">Pomagamy młodym osobom wejść w służbę publiczną i życie polityczne.</p>
          <p className="text-lg font-calluna flex">
            Zobacz Więcej
            <img src={arrowRounded} alt="" className="ml-2 xs:hidden xs:ml-0"/>
          </p>
        </div>
        <img src={arrowDown} alt="" className="absolute bottom-10 right-[107px] w-[12px] hidden xs:block"/>
    </section>
  );
};

export default LoadingHeader;