import React, { useState } from "react";
import useStore from "../store/store";
import dropdown from "../assets/icons/dropdown.svg";

const NavbarMenu = ({ skills, projects, contact }) => {
  const theme = useStore((state) => state.theme);
  const [drop, setDrop] = useState(false);

  const toggleDropDown = () => {
    setDrop(!drop);
  };
  return (
    <ul className="hidden sm:flex flex-row items-center sm:gap-4 md:gap-8 lg:pr-8 sm:px-3 md:pr-5 text-lg dark:text-zinc-200">
      <li>
        <h3
          className={`${
            !theme
              ? "hover-underline-animation"
              : "hover-underline-animation-dark"
          } font-medium cursor-pointer`}
          onClick={() =>
            skills.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          About
        </h3>
      </li>
      <li>
        <h3
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
        </h3>
      </li>
      <li>
        <h3
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
        </h3>
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
                href="https://hamdan-k.me/flexbox-playground/"
                className="dark:text-white text-base"
                onClick={() => setDrop(false)}
              >
                ✨FlexBox Playground
              </a>
            </li>
            <li>
              <a
                href="https://hamdan-k.me/api-playground/"
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
