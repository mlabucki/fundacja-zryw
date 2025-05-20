import React from "react";
import LoadingHeader from "./LandingHeader";
import Story from "./Story";

const Home: React.FC = () => {
  return (
    <>
      <LoadingHeader />
      <hr className="w-mobile xs:w-main mx-auto mt-20 h-[1px] bg-olive border-0 outline-none" />
      <Story />
    </>
  );
};

export default Home;
