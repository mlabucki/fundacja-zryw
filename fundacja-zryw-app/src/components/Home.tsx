import React from "react";
import LoadingHeader from "./LandingHeader";
import Story from "./Story";
import Description from "./Description";
import Partners from "./Partners";
import SoundsFamiliar from "./SoundsFamiliar";
import Newsletter from "./Newsletter";
import Gallery from "./gallery";

const Home: React.FC = () => {
  return (
    <>
      <LoadingHeader />
      <hr className="w-mobile xs:w-main mx-auto mt-20 h-[1px] bg-olive border-0 outline-none hidden xs:block" />
      <Story />
      <Description />
      <Partners />
      <SoundsFamiliar />
      <hr className="w-mobile xs:w-main mx-auto mt-38 xs:mt-40 h-[1px] bg-olive border-0 outline-none" />
      <Newsletter />
      <Gallery />
    </>
  );
};

export default Home;
