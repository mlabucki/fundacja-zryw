import React from "react";
import people from "../assets/people.json"
import Container from "./Container";
import twitter from "/vectors/twitter.png";
import linkedin from "/vectors/linkedin.png";
import arrowRight from '/vectors/arrowRight.svg';

const Crew: React.FC = () => {
  return (
    <Container className="mt-38">
        <div className="flex items-center justify-between">
            <h2 className="font-new-order text-5xl text-green">Zespół</h2>
            <div className="ml-auto w-[100px] flex justify-between xs:hidden">
              <div>
                  <img src={arrowRight} alt="" />
              </div>
              <div>
                  <img src={arrowRight} alt="" className="rotate-180"/>
              </div>
            </div>
        </div>
        
        <section className="mt-20 flex xs:flex-wrap gap-x-8 gap-y-16 xs:justify-center overflow-hidden">
            {people.map((person) => (
                <div className="flex flex-col max-w-[280px] h-[536px] xs:max-w-[306px] xs:h-[560px] justify-between">
                        <div className="">
                            <img src={person.img} alt={person.img} className="max-w-[301px] xs:max-w-[306px] rounded-lg"/>
                            <p className="mt-6 text-xl text-green font-new-order">{person.name}</p>
                            {person.title && <p className="font-calluna text-base">{person.title}</p>}
                        </div>
                        <p className="font-calluna text-base leading-[150%]">{person.description}</p>
                        <div className="flex gap-x-4">
                            <a href={person.linkedin} className="">
                                <img src={linkedin} alt="" className=""/>
                            </a>
                            <a href={person.twitter} className="">
                                <img src={twitter} alt="" className=""/>
                            </a>
                        </div>
                </div>
            ))}
        </section>
    </Container> 
  )
};

export default Crew;
