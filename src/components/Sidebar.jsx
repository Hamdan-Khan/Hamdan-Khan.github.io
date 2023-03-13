import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({ side, toggleSide }) => {
  return (
    <aside
      className={`bg-green-700 overflow-hidden text-gray-200 top-0 left-0 ${
        !side ? "left-[100%]" : ""
      } fixed w-[100vw] min-h-[400px] duration-300 h-full py-4 md:py-7 pb-12 md:pb-16 px-10 md:px-16`}
    >
      <div className="flex flex-col justify-between h-[100%]">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">
            NAVIGATE
          </h1>
          <i
            class="text-2xl md:text-3xl lg:text-4xl cursor-pointer fa-sharp fa-solid fa-xmark"
            onClick={toggleSide}
          ></i>
        </div>
        <motion.div
          whileHover={{ scale: 1.07, transition: { duration: 0.4 } }}
          whileTap={{ scale: 1 }}
          className="border-b-2 border-green-300"
        >
          <Link
            to={"/google"}
            className="block text-2xl md:text-3xl  py-1 md:py-3 lg:text-4xl"
          >
            About me
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.07, transition: { duration: 0.4 } }}
          whileTap={{ scale: 1 }}
          className="border-b-2 border-green-300"
        >
          <Link
            to={"/"}
            className="block text-2xl md:text-3xl lg:text-4xl  py-1 md:py-3"
          >
            Technologies
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.07, transition: { duration: 0.4 } }}
          whileTap={{ scale: 1 }}
          className="border-b-2 border-green-300"
        >
          <Link
            to={"/"}
            className="block text-2xl md:text-3xl lg:text-4xl  py-1 md:py-3"
          >
            Projects
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.07, transition: { duration: 0.4 } }}
          whileTap={{ scale: 1 }}
          className="border-b-2 border-green-300"
        >
          <Link
            to={"/"}
            className="block text-2xl md:text-3xl lg:text-4xl  py-1 md:py-3"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </aside>
  );
};

export default Sidebar;
