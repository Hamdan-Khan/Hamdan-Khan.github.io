import React, { useState } from "react";
import About from "./About";
import SkillsAndCert from "./SkillsAndCert";

const Skills = ({ skillsRef }: { skillsRef: React.Ref<HTMLDivElement> }) => {
  const [tab, setTab] = useState("cert");
  return (
    <div
      ref={skillsRef}
      className="py-8 sm:py-10 md:py-12 lg:py-14 px-6 sm:px-8 md:px-10 scroll-m-8 sm:scroll-m-0 bg-slate-100 dark:bg-slate-800"
    >
      <About />

      <SkillsAndCert tab={tab} setTab={setTab} />
    </div>
  );
};

export default Skills;
