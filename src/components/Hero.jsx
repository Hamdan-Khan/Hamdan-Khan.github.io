import Snippet from "./Snippet";

const Hero = () => {
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
          AM A WEB DEVELOPER
        </h2>
      </div>
      <Snippet />
    </div>
  );
};

export default Hero;
