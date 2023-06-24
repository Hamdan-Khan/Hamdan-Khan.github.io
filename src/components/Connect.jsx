import React from "react";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.svg";
import twitter from "../assets/logos/twitter.svg";

const socials = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/hamdan-khan-b5a260226/",
    logo: linkedin,
  },
  { platform: "GitHub", link: "https://github.com/Hamdan-Khan", logo: github },
  {
    platform: "Twitter",
    link: "https://twitter.com/hamdankhan212?t=wQb0gqGbh5mPfmhbOWfqmQ&s=08",
    logo: twitter,
  },
];

const Connect = () => {
  return (
    <div className="px-10 py-5 sm:py-8 dark:text-white flex flex-col gap-4 sm:flex-row items-center justify-evenly bg-slate-100 dark:bg-slate-800">
      <h2 className="text-2xl uppercase font-bold">Connect with me</h2>
      <div className="flex justify-center gap-7 items-center">
        {socials.map((s) => {
          const { platform, link, logo } = s;
          return (
            <a
              href={link}
              className="tooltip"
              data-tip={platform}
              target="_blank"
              key={platform}
            >
              <img
                src={logo}
                alt={platform}
                className={`w-[40px] ${
                  platform == "GitHub" ? "dark:invert" : ""
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
