import React from "react";
import LoadingHeader from "./LandingHeader";
import Story from "./Story";
import Description from "./Description";
import Partners from "./Partners";
import SoundsFamiliar from "./SoundsFamiliar";
import Newsletter from "./Newsletter";
import Gallery from "./Gallery";
import Container from "./Container";
import Faq from "./Faq";
import Contact from "./Contact";
import building from "/photos/building.jpg";

const Home: React.FC = () => {
  return (
    <>
      <LoadingHeader />
      <Container>
        <hr className="mt-20 h-[1px] bg-olive border-0 outline-none hidden xs:block" />
      </Container>
      
      <Story />
      <Description />
      <Partners />
      <SoundsFamiliar />
      <Container>
        <hr className="mt-38 xs:mt-40 h-[1px] bg-olive border-0 outline-none" />
      </Container>
      <Newsletter />
      <Gallery />
      <Faq />
      <Contact text="Zrywamy ze schematami" src={building} className="mt-48"/>
    </>
  );
};

export default Home;
