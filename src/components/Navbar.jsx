import React, { useState } from "react";
import AnimatedName from "./AnimatedName";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [side, setSide] = useState(false);
  const toggleSide = () => setSide(!side);
  return (
    <>
      <nav className="flex flex-row items-center justify-between py-4">
        <AnimatedName />
        {!side && (
          <i
            className="text-white text-2xl md:text-3xl lg:text-4xl fa-solid fa-bars cursor-pointer"
            onClick={toggleSide}
          ></i>
        )}
      </nav>
      <Sidebar side={side} toggleSide={toggleSide} />
    </>
  );
};

export default Navbar;
