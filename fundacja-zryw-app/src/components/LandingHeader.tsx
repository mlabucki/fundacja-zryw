import React from "react";
import picture from '/photos/main-home.jpg'

const LoadingHeader: React.FC = () => {
  return (
    <section className="relative w-mobile xs:w-main mx-auto mt-8 h-[672px] overflow-hidden rounded-lg">
        <img src={picture} alt="zryw-main-picture" className="mt-[-108px]"/>
        <div className="absolute inset-0 bg-[linear-gradient(285.13deg,_rgba(0,_0,_0,_0)_0.22%,_rgba(81,_81,_61,_0.2)_100%)]"></div>
        <h1 className="absolute top-10 left-10 text-white text-8xl font-new-order leading-[0.95] tracking-[-0.03em]">Budujemy <br /> Nowe <br /> Kadry</h1>
        <div
            className="w-[338px] h-[187px] absolute bottom-10 right-10 bg-white rounded-lg p-6 flex flex-col justify-between"
            style={{
                WebkitMaskImage: `radial-gradient(circle 33px at 78% 100%, transparent 33px, black 34px)`,
                maskImage: `radial-gradient(circle 33px at 78% 100%, transparent 33px, black 34px)`
            }}
        >
            <p className="text-lg font-calluna">Jesteśmy społecznością państwowców.</p>
            <p className="text-lg font-calluna">Pomagamy młodym osobom wejść w służbę publiczną i życie polityczne.</p>
            <p className="text-lg font-calluna">Zobacz Więcej</p>
        </div>
    </section>
  );
};

export default LoadingHeader;