import React from "react";
import doomer from "../assets/doomer.png";
import download from "../assets/icons/download.svg";
import resume from "../assets/docs/Hamdan-Khan-resume.pdf";
import { saveAs } from "file-saver";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Hamdan_resume.pdf";
    link.click();
  };
  return (
    <div>
      <h1 className="dark:text-white my-7 text-3xl sm:text-4xl text-center font-bold">
        ABOUT ME
      </h1>
      <div className="bg-zinc-100 border-zinc-400 dark:border-zinc-500 border p-4 flex md:flex-row md:gap-4 flex-col gap-2 mb-5 rounded-md dark:bg-zinc-700 dark:text-white">
        <div className="md:w-[45%] my-auto">
          <img
            src={doomer}
            alt=""
            className="md:min-w-[300px] w-full rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <p className="px-2 md:px-0 md:pr-2 md:pt-2 text-justify">
            Hi there! I'm Hamdan Khan, a Software Engineer and Web developer
            skilled in{" "}
            <span className="font-semibold">
              React.js, Next.js, MERN stack, JavaScript, Python,
            </span>{" "}
            and other modern technologies. I'm currently pursuing a Software
            Engineering degree and enjoy contributing to open-source projects
            and doing freelancing. I'm passionate about tackling new challenges
            and learning from the best in the industry.
          </p>
          <button
            onClick={handleDownload}
            className="bg-yellow-500 mt-2 w-[93%] mx-auto md:w-auto md:mr-3 dark:bg-yellow-600 dark:hover:bg-yellow-500 hover:shadow-md hover:bg-yellow-600 duration-200 font-semibold text-white rounded-xl py-1 px-8 text-lg sm:text-xl"
          >
            Resume{"  "}
            <img src={download} className="w-[16px] inline invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
