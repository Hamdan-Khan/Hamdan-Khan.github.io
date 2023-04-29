import React from "react";
import useStore from "../store/store";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.svg";

const socials = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/hamdan-khan-b5a260226/",
    logo: linkedin,
  },
  { platform: "GitHub", link: "https://github.com/Hamdan-Khan", logo: github },
];

const Sidebar = ({ skills, projects, contact, sidenav, setSidenav }) => {
  const theme = useStore((state) => state.theme);
  return (
    <div
      className={`flex flex-col dark:bg-[rgb(23,28,41)] bg-zinc-200 w-[100%] h-screen absolute top-[81px] border-r-[3px] border-r-[rgb(23,28,41)]  ${
        sidenav ? "left-[-1px] sm:left-[-120%]" : "left-[-120%]"
      }  duration-500 ease-in-out px-8 pt-8 pb-32 `}
    >
      <ul className="text-3xl dark:text-zinc-100">
        <li className="py-2 border-b border-zinc-400">
          <h3
            className={`font-medium cursor-pointer pl-2 pt-6 pb-2`}
            onClick={() => {
              skills.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              setSidenav(false);
            }}
          >
            About
          </h3>
        </li>
        <li className="py-2 border-b border-zinc-400">
          <h3
            className={`font-medium cursor-pointer pl-2 pt-6 pb-2`}
            onClick={() => {
              projects.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              setSidenav(false);
            }}
          >
            Projects
          </h3>
        </li>
        <li className="py-2 border-b border-zinc-400">
          <h3
            className={`font-medium cursor-pointer pl-2 pt-6 pb-2`}
            onClick={() => {
              contact.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              setSidenav(false);
            }}
          >
            Contact
          </h3>
        </li>
      </ul>
      <div className="flex justify-evenly mt-auto">
        {socials.map((social) => {
          const { platform, logo, link } = social;
          return (
            <a href={link}>
              <img
                src={logo}
                alt={platform}
                className={`w-[50px] ${
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

export default Sidebar;
