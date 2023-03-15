import React from "react";
import Card from "../components/Card";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import python from "../assets/python.png";

const techs = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "ReactJS", img: react },
  { name: "NodeJS", img: nodejs },
  { name: "ExpressJS", img: express },
  { name: "MongoDB", img: mongodb },
  { name: "Python", img: python },
];

const Technologies = () => {
  return (
    <div className="p-4 px-6 glass mb-4" id="tech">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-shadow text-center">
        TECHNOLOGIES
      </h1>
      <div className="flex flex-row justify-between flex-wrap lg:gap-10 gap-6 py-5 duration-300">
        {techs.map((x) => {
          const { name, img } = x;
          return <Card name={name} img={img} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
