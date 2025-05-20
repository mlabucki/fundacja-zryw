import React from "react";
import LoadingHeader from "./LandingHeader";
import Story from "./Story";
import Description from "./Description";

const Home: React.FC = () => {
  return (
    <>
      <LoadingHeader />
      <hr className="w-mobile xs:w-main mx-auto mt-20 h-[1px] bg-olive border-0 outline-none hidden xs:block" />
      <Story />
      <Description />
    </>
  );
};

export default Home;
