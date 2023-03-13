import React from "react";
import LandingText from "./LandingText";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="h-[820px] px-12">
      <Navbar></Navbar>
      <LandingText />
    </div>
  );
};

export default Landing;
