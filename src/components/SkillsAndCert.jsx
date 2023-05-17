import React from "react";
import SkillsTab from "./SkillsTab";
import SkillsSlider from "./SkillsSlider";

const certData = [
  {
    name: "Developing Back-end Apps with Node.js and Express",
    institute: "IBM Skills Network Coursera",
    link: "https://coursera.org/share/3fe67dbf1bd712ab1639d471e422f9ee",
  },
  {
    name: "JavaScript Basic Certificate",
    institute: "HackerRank",
    link: "https://www.hackerrank.com/certificates/29251d4cc63a",
  },
  {
    name: "Javascript animation for websites, storytelling, data visualization and games",
    institute: "Coursera Project Network",
    link: "https://coursera.org/share/aa0d73a69eb92ff7970e4ffaaa38e3a4",
  },
  {
    name: "Problem Solving Certificate",
    institute: "HackerRank",
    link: "https://www.hackerrank.com/certificates/e29460659928",
  },
  {
    name: "Rest API Certificate",
    institute: "HackerRank",
    link: "https://www.hackerrank.com/certificates/e16600586e95",
  },
];

const SkillsAndCert = ({ tab, setTab }) => {
  return (
    <>
      {/* <h1 className="dark:text-white my-7 text-3xl sm:text-4xl text-center font-bold">
        SKILLS & CERTIFICATIONS
      </h1> */}
      <div className="flex flex-col justify-center p-1 sm:p-4 w-full">
        <SkillsTab tab={tab} setTab={setTab} />
        <div className="dark:text-white">
          {tab === "skills" ? (
            <div className="w-full py-5">
              <SkillsSlider />
            </div>
          ) : (
            <div className="w-full flex flex-col sm:flex-row flex-wrap justify-evenly">
              {/* <h1 className="text-2xl font-semibold dark:text-white">
                CERTIFICATIONS
              </h1> */}
              {certData.map((cert) => {
                const { name, institute, link } = cert;
                return (
                  <div className="border-zinc-400 bg-zinc-100 dark:border-zinc-500 dark:bg-zinc-700 border px-4 py-2 rounded-xl sm:w-[45%] my-2">
                    <h2 className="font-semibold text-lg mb-1 ">{name}</h2>
                    <a
                      href={link}
                      target="_blank"
                      className="dark:text-zinc-300 hover:underline text-sm ibm-plex font-normal"
                    >
                      {institute} <span>&#8599;</span>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SkillsAndCert;
