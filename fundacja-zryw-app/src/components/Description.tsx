import React from "react";
import team from "/photos/team.jpg";
import Button from "./Button";
import arrowRight from '/vectors/arrowRight.svg';
import Container from "./Container";

interface DescriptionData {
  title: string;
  text: string;
}

const descriptions: DescriptionData[] = [
  {
    title: "Wiedzę z XXI wieku",
    text: "Od edukatorów z Yale i Cambridge, po praktyków z pierwszej linii",
  },
  {
    title: "Warsztat skutecznego działania",
    text: "Komunikacja, organizowanie społeczne, tworzenie polityk publicznych",
  },
  {
    title: "Politykę od kuchni",
    text: "Zamknięte spotkania z decydentami w formule Chatham House",
  },
  {
    title: "Sieć ludzi, którym też się chce",
    text: "Relacje na lata z dziesiątkami osób z całej Polski",
  },
  {
    title: "Mentoring i rozwój",
    text: "Regularne wsparcie od tych, który już przeszli tą drogę",
  },
];

const Description: React.FC = () => {
  return (
    <Container>
        <div className="h-[395px] mt-24 xs:mt-32 xs:min-h-[550px] xs:max-h-[631px] xs:rounded-lg overflow-hidden relative">
            <img src={team} alt="" className="w-full h-full scale-[1.27] mt-[-40px] xs:mt-0 xs:scale-[1] object-[47%_88%] object-cover xs:object-[50%_87%]" />
            <div className="absolute xs:hidden z-2 inset-0 bg-[linear-gradient(285.13deg,_rgba(0,_0,_0,_0)_0.22%,_rgba(81,_81,_61,_0.2)_100%)]"></div>
            <p className="absolute z-3 top-10 left-[50%] transform -translate-x-1/2 font-new-order text-4xl text-white xs:hidden">Dostaniesz</p>
        </div>
        <section className="grid grid-flow-col md:grid-cols-3 xs:grid-cols-2 gap-x-10 overflow-x-auto overflow-y-hidden xs:grid-flow-row xs:gap-x-40 xs:gap-y-36 mt-15">
            {descriptions.map(({ title, text }, idx) => (
                <div key={idx} className="flex flex-col w-[290px] xs:w-auto">
                    <h3 className="font-new-order xs:text-2xl text-green">{title}</h3>
                    <p className="font-calluna xs:text-lg mt-4 leading-[130%] tracking-[-0.015em]">{text}</p>
                </div>
            ))}
            <Button className="w-[96px] h-[45px] bg-olive hidden xs:block">Aplikuj</Button>
        </section>
        <div className="mt-10 xs:hidden">
            <div className="ml-auto w-[100px] flex justify-between">
              <div>
                  <img src={arrowRight} alt="" />
              </div>
              <div>
                  <img src={arrowRight} alt="" className="rotate-180"/>
              </div>
            </div>
          <Button className="w-[96px] h-[45px] bg-olive ml-auto mt-6">Aplikuj</Button>
        </div>
      </Container>
  );
};

export default Description;