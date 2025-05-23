import React, { useState } from "react";
import dropdown from "../assets/icons/dropdown.svg";
import {
  apiPlaygroundLink,
  flexboxPlaygroundLink,
} from "../data/DeployedLinks";
import useStore from "../store/store";

const NavbarMenu = ({
  skills,
  projects,
  contact,
  blogs,
}: {
  skills: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
  blogs: React.RefObject<HTMLDivElement>;
}) => {
  const theme = useStore((state) => state.theme);
  const [drop, setDrop] = useState(false);

  const toggleDropDown = () => {
    setDrop(!drop);
  };

  return (
    <ul className="hidden sm:flex flex-row items-center sm:gap-4 md:gap-8 lg:pr-8 sm:px-3 md:pr-5 text-lg dark:text-zinc-200">
      <li>
        <p
          className={`${
            !theme
              ? "hover-underline-animation"
              : "hover-underline-animation-dark"
          } font-medium cursor-pointer`}
          onClick={() => {
            if (skills.current) {
              skills.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }
          }}
        >
          About
        </p>
      </li>
      <li>
        <p
          className={`${
            !theme
              ? "hover-underline-animation"
              : "hover-underline-animation-dark"
          } font-medium cursor-pointer`}
          onClick={() =>
            projects.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Projects
        </p>
      </li>
      <li>
        <p
          className={`${
            !theme
              ? "hover-underline-animation"
              : "hover-underline-animation-dark"
          } font-medium cursor-pointer`}
          onClick={() =>
            blogs.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Blogs
        </p>
      </li>
      <li>
        <p
          className={`${
            !theme
              ? "hover-underline-animation"
              : "hover-underline-animation-dark"
          } font-medium cursor-pointer`}
          onClick={() =>
            contact.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Contact
        </p>
      </li>
      <li>
        <div className="">
          <label
            tabIndex={0}
            className="cursor-pointer font-medium select-none"
            onClick={() => toggleDropDown()}
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
            className={`${
              drop ? "block" : "hidden"
            } bg-zinc-200 absolute menu p-1 shadow translate-x-[-80px] translate-y-2 rounded-box w-56 border border-gray-300 dark:border-gray-500 dark:bg-slate-600`}
          >
            <li>
              <a
                href={flexboxPlaygroundLink}
                className="dark:text-white text-base"
                onClick={() => setDrop(false)}
              >
                ✨FlexBox Playground
              </a>
            </li>
            <li>
              <a
                href={apiPlaygroundLink}
                className="dark:text-white text-base"
                onClick={() => setDrop(false)}
              >
                ✨API Playground
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default NavbarMenu;
