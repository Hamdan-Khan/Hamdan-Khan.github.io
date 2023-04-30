import React, { useState } from "react";
import SkillsAndCert from "./SkillsAndCert";
import About from "./About";

const Skills = ({ skills }) => {
  const [tab, setTab] = useState("skills");
  return (
    <div
      ref={skills}
      className="py-8 sm:py-10 md:py-12 lg:py-14 px-6 sm:px-8 md:px-10 scroll-m-8 sm:scroll-m-0"
    >
      <About />

      <SkillsAndCert tab={tab} setTab={setTab} />
    </div>
  );
};

export default Skills;
