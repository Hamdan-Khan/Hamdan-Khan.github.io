import React from "react";
import { motion } from "framer-motion";

const AnimatedName = () => {
  return (
    <div>
      <motion.div
        className="max-w-max px-4"
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h1 className="scale-75 text-2xl md:text-4xl lg:text-5xl text-green-400 inline">
          <span className="text-3xl md:text-5xl lg:text-6xl">H</span>AMDAN{" "}
          <span className="text-3xl md:text-5xl lg:text-6xl">K</span>HAN.
        </h1>
      </motion.div>
    </div>
  );
};

export default AnimatedName;
