import React from "react";
import html from "../assets/logos/html-5.png";
import css from "../assets/logos/css.png";
import express from "../assets/logos/express.png";
import mongodb from "../assets/logos/mongodb.png";
import js from "../assets/logos/js.png";
import nodejs from "../assets/logos/nodejs.png";
import react from "../assets/logos/react.png";
import python from "../assets/logos/python.png";
import tailwind from "../assets/logos/tailwind.png";
import next from "../assets/logos/next.png";

// const techs = [
//   { name: "HTML", img: html },
//   { name: "CSS", img: css },
//   { name: "JavaScript", img: js },
//   { name: "ReactJS", img: react },
//   { name: "NodeJS", img: nodejs },
//   { name: "ExpressJS", img: express },
//   { name: "MongoDB", img: mongodb },
//   { name: "Python", img: python },
// ];
const images = [
  html,
  css,
  js,
  react,
  tailwind,
  nodejs,
  express,
  mongodb,
  next,
  python,
];

const SkillsSlider = () => {
  return (
    <div className="flex items-center justify-center dark:bg-zinc-300">
      {/* 1. */}
      <div className="w-[2000px] flex items-center h-[8rem] border-t border-b dark:border-gray-600 border-zinc-300 overflow-hidden relative ">
        {/* 2. */}
        <div className="w-[2000px] h-20 flex items-center  justify-around absolute left-0 animate">
          {/* 3 */}
          {images.map((i, index) => {
            return (
              <div
                key={index + 1}
                className="flex justify-center items-start mx-3"
              >
                <img src={i} className=" w-[20rem]" />
              </div>
            );
          })}
          {images.map((i, index) => {
            return (
              <div
                key={index + 1}
                className="flex justify-center items-start mx-3"
              >
                <img src={i} className=" w-[20rem]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
