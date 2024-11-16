import React, { useState } from "react";
import linkedin from "../assets/logos/linkedin.png";
import github from "../assets/logos/github.svg";
import dropdown from "../assets/icons/dropdown.svg";
import {
  apiPlaygroundLink,
  flexboxPlaygroundLink,
} from "../data/DeployedLinks";

const socials = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/hamdan-khan-b5a260226/",
    logo: linkedin,
  },
  { platform: "GitHub", link: "https://github.com/Hamdan-Khan", logo: github },
];

const Sidebar = ({ skills, projects, blogs, contact, sidenav, setSidenav }) => {
  const [drop, setDrop] = useState(false);

  const toggleDropDown = () => {
    setDrop(!drop);
  };
  return (
    <div
      className={`flex flex-col dark:bg-[rgb(23,28,41)] bg-zinc-200 w-[100%] h-screen absolute top-[81px] border-r-[3px] border-r-[rgb(23,28,41)]  ${
        sidenav ? "left-[-1px] sm:left-[-120%]" : "left-[-120%]"
      }  duration-500 ease-in-out px-8 pt-8 pb-32 touch-none `}
    >
      <ul className="text-3xl dark:text-zinc-100">
        <li className="py-2 border-b border-zinc-400">
          <p
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
          </p>
        </li>
        <li className="py-2 border-b border-zinc-400">
          <p
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
          </p>
        </li>
        <li className="py-2 border-b border-zinc-400">
          <p
            className={`font-medium cursor-pointer pl-2 pt-6 pb-2`}
            onClick={() => {
              blogs.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              setSidenav(false);
            }}
          >
            Blogs
          </p>
        </li>
        <li className="py-2 border-b border-zinc-400">
          <p
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
          </p>
        </li>
        <li className="py-2 border-b border-zinc-400">
          <div
            className="pl-2 pt-6 pb-2 cursor-pointer select-none"
            onClick={() => toggleDropDown()}
          >
            <label
              tabIndex={0}
              className="cursor-pointer w-full font-medium select-none"
            >
              Playground
              <span>
                <img
                  src={dropdown}
                  className={`${
                    drop ? "rotate-180" : ""
                  } inline dark:invert w-10`}
                  alt=""
                />
              </span>
            </label>
            <ul
              tabIndex={0}
              className={`${drop ? "block" : "hidden"}  p-1 w-full `}
            >
              <a
                href={flexboxPlaygroundLink}
                className="py-3 border-b block dark:border-zinc-500 border-zinc-400 dark:text-white text-xl sm:text-base"
              >
                FlexBox Playground ✨
              </a>

              <a
                href={apiPlaygroundLink}
                className="py-3 pb-4 block dark:text-white text-xl sm:text-base"
              >
                API Playground ✨
              </a>
            </ul>
          </div>
        </li>
      </ul>
      <div className="flex justify-evenly mt-16">
        {socials.map((social) => {
          const { platform, logo, link } = social;
          return (
            <a href={link} key={platform}>
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
