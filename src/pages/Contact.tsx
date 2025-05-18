import React from "react";
import fiverr from "../assets/fiverr.png";

const Contact = () => {
  return (
    <div
      className="glass p-4 rounded-none mb-10 flex flex-col gap-4"
      id="contact"
    >
      <h1 className="text-lg md:text-2xl text-white">
        Contact me :{" "}
        <span className="underline md:underline-offset-4 underline-offset-2 md:text-2xl text-base">
          {" "}
          hamdankhan212@gmail.com
        </span>
      </h1>
      <h1 className="text-lg md:text-2xl text-white inline">
        My Fiverr Profile:{" "}
        <a href="https://www.fiverr.com/hamdankhan364" target={"_blank"}>
          <img src={fiverr} alt="" width={"45px"} className="inline " />
        </a>
      </h1>
    </div>
  );
};

export default Contact;
