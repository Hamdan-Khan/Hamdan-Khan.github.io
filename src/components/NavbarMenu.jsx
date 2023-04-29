import React from "react";
import useStore from "../store/store";

const NavbarMenu = ({ skills, projects, contact }) => {
  const theme = useStore((state) => state.theme);
  return (
    <ul className="hidden sm:flex flex-row items-center gap-8 lg:pr-8 sm:px-3 md:pr-5 text-lg dark:text-zinc-200">
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
    </ul>
  );
};

export default NavbarMenu;
