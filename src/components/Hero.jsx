import Snippet from "./Snippet";

const Hero = ({ skills }) => {
  return (
    <div
      id="hero"
      className="flex flex-col justify-evenly sm:justify-between sm:flex-row px-5 sm:px-6 md:px-8 lg:px-10 h-[90vh] min-h-[500px] items-center sm:gap-10"
    >
      <div className="py-2 sm:p-2 mb-12 mt-6 sm:max-w-[50%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-black text-center my-3">
          HELLO WORLD
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-center dark:text-zinc-200 leading-6 sm:leading-normal">
          MY NAME IS{" "}
          <span className="font-extrabold gradint-text">HAMDAN KHAN</span> AND I
          AM A FULL STACK WEB DEVELOPER.
        </h2>
        <div className="flex gap-6 justify-center mt-2">
          <button
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
          </button>
        </div>
      </div>
      <Snippet />
    </div>
  );
};

export default Hero;
