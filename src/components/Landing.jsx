import React from "react";
import LandingText from "./LandingText";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="h-[820px]">
      <Navbar></Navbar>
      <LandingText />
    </div>
  );
};

export default Landing;
