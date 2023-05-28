import Snippet from "./Snippet";
import { motion } from "framer-motion";

const Hero = ({ skills }) => {
  const hDelay = 0.3;
  const hVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      id="hero"
      className="flex flex-col justify-evenly sm:justify-between sm:flex-row px-5 sm:px-6 md:px-8 lg:px-10 h-[90vh] min-h-[500px] items-center sm:gap-10 overflow-hidden"
    >
      <div className="py-2 sm:p-2 mb-12 mt-6 sm:max-w-[50%]">
        <motion.h1
          variants={hVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-black text-center my-3"
        >
          HELLO WORLD
        </motion.h1>
        <motion.h2
          variants={hVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: hDelay }}
          className="text-lg sm:text-2xl font-semibold text-center dark:text-zinc-200 leading-6 sm:leading-normal"
        >
          MY NAME IS{" "}
          <span className="font-extrabold gradint-text">HAMDAN KHAN</span> AND I
          AM A FULL STACK WEB DEVELOPER.
        </motion.h2>
        <div className="flex gap-6 justify-center mt-2">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: hDelay * 2 }}
            className="bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 hover:shadow-md hover:bg-green-600 duration-200 font-semibold text-white rounded-xl py-1 px-12 text-lg sm:text-xl"
            onClick={() =>
              skills.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
          >
            ABOUT ME
          </motion.button>
        </div>
      </div>
      <Snippet />
    </div>
  );
};

export default Hero;
