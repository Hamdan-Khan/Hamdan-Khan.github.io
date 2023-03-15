// import { motion } from "framer-motion";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";

const LandingText = () => {
  return (
    <div className="flex flex-col h-[470px] md:h-[600px] gap-4 md:gap-10">
      <h1 className="text-gray-200 text-4xl md:text-5xl lg:text-6xl mt-[100px] md:mt-[140px]">
        Hi, I am Hamdan.
        <br /> a <span className="text-shadow">Full-Stack</span> Web Developer
      </h1>
      <ScrollIntoView selector="#tech">
        <button className="bg-gray-300 w-max px-4 py-2 rounded-xl border border-green-600 text-green-600 text-xl md:text-2xl hover:bg-green-600 hover:text-white duration-500">
          Learn more about me &#x2193;
          {/* <motion.button
          whileHover={{ y: [6, -6, 6] }}
          transition={{ repeat: Infinity, duration: 0.9 }}
          >
          &#x2193;
        </motion.button> */}
        </button>
      </ScrollIntoView>
    </div>
  );
};

export default LandingText;
