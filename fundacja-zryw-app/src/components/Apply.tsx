import React from "react";
import SoundsFamiliar from "./SoundsFamiliar";
import Faq from "./Faq";
import ApplyHero from "./ApplyHero";
import ApplyJoin from "./ApplyJoin";
import ApplyContact from "./ApplyContact";

const Apply: React.FC = () => {
  return (
    <div className="text-[var(--color-primary)]">
      <ApplyHero />
      <ApplyJoin />
      <SoundsFamiliar />
      <Faq />
      <ApplyContact />
    </div>
  );
};

export default Apply;
