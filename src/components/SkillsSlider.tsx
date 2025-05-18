import css from "../assets/logos/css.png";
import express from "../assets/logos/express.png";
import html from "../assets/logos/html-5.png";
import js from "../assets/logos/js.png";
import mongodb from "../assets/logos/mongodb.png";
import next from "../assets/logos/next.png";
import nodejs from "../assets/logos/nodejs.png";
import python from "../assets/logos/python.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";

const skills = [
  { image: html, name: "HTML" },
  { image: css, name: "CSS" },
  { image: js, name: "JavaScript" },
  { image: react, name: "React" },
  { image: tailwind, name: "Tailwind CSS" },
  { image: nodejs, name: "Node JS" },
  { image: express, name: "Express JS" },
  { image: mongodb, name: "MongoDB" },
  { image: next, name: "Next JS" },
  { image: python, name: "Python" },
];

const SkillsSlider = () => {
  return (
    <div className="flex items-center justify-center dark:bg-slate-600">
      {/* 1. */}
      <div className="w-[2000px] flex items-center h-[8rem] border-t border-b dark:border-gray-600 border-zinc-300 overflow-hidden relative ">
        {/* 2. */}
        <div className="w-[2000px] h-20 hidden items-center sm:flex justify-around absolute left-0 animate">
          {/* 3 */}
          {skills.map((i) => {
            const { name, image } = i;
            return (
              <div key={name} className="flex justify-center items-start mx-3">
                <img src={image} alt={name} className=" w-[20rem]" />
              </div>
            );
          })}
          {skills.map((i) => {
            const { name, image } = i;
            return (
              <div key={name} className="flex justify-center items-start mx-3">
                <img src={image} alt={name} className=" w-[20rem]" />
              </div>
            );
          })}
        </div>
        <div className="w-[2000px] h-20 flex items-center sm:hidden  justify-around absolute left-0 animate-small">
          {/* 3 */}
          {skills.map((i) => {
            const { name, image } = i;
            return (
              <div key={name} className="flex justify-center items-start mx-3">
                <img src={image} alt={name} className=" w-[20rem]" />
              </div>
            );
          })}
          {skills.map((i) => {
            const { name, image } = i;
            return (
              <div key={name} className="flex justify-center items-start mx-3">
                <img src={image} alt={name} className=" w-[20rem]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
