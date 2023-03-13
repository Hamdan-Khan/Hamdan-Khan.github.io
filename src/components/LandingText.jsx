import React from "react";

const LandingText = () => {
  return (
    <div className="flex items-center h-[470px] md:h-[660px]">
      <h1 className="text-gray-200 text-4xl md:text-5xl lg:text-6xl">
        Hi, I am Hamdan.
        <br /> a <span className="text-shadow">Full-Stack</span> Web Developer
      </h1>
      <button>Learn more about me</button>
    </div>
  );
};

export default LandingText;
