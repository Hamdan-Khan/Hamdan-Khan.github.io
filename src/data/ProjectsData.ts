import apiPg from "../assets/apiPg.png";
import aslapp from "../assets/aslapp.png";
import blognama from "../assets/blognama.png";
import matchmemo from "../assets/matchmemo.png";
import pokeportal from "../assets/pokeportal.png";
import surveyapp from "../assets/surveyapp.png";
import vkeyboard from "../assets/virtualkeyboard.png";
import { apiPlaygroundLink } from "./DeployedLinks";

export const projectData = [
  {
    title: "MatchMemo",
    description:
      "MatchMemo is a football matches record and blogging site built using NEXT.Js (V.14) and football-data.org's API. It uses a cloud-hosted postgresql DB. I keep adding features every now and then.",
    image: matchmemo,
    live: "https://match-memo.vercel.app/",
    github: "https://github.com/Hamdan-Khan/matchmemo",
  },
  {
    title: "API Playground",
    description:
      "API Playground is an HTTP client I created out of curiosity using React js. It offers most of the HTTP functionalities including auth, headers, response time and size.",
    image: apiPg,
    live: apiPlaygroundLink,
    github: "https://github.com/Hamdan-Khan/api-playground",
  },
  {
    title: "BlogNama",
    description:
      "BlogNama is a blog website built using NEXT.Js (V.13). It uses the NEXT.Js app directory and dynamic routes generation without compromising on SEO/metadata.",
    image: blognama,
    live: "https://blognama.vercel.app/",
    github: "https://github.com/Hamdan-Khan/BlogNama",
  },
  {
    title: "PokéPortal",
    description:
      "PokéPortal is a fun collection of Pokémons. Browse through the endless collection and find your favourite Pokémon among them. Built using React JS and Zustand.",
    image: pokeportal,
    live: "https://pokeportal.netlify.app/",
    github: "https://github.com/Hamdan-Khan/Pokemon-Portal",
  },
  {
    title: "Survey App | Complex State Management",
    description:
      "A Freelancing Survey App that involves complex state management, built using React JS and Zustand. Try it out yourself!",
    image: surveyapp,
    live: "https://freelancing-survey.netlify.app/",
    github: "https://github.com/Hamdan-Khan/survey-app",
  },
  {
    title: "Virtual Urdu Keyboard",
    description:
      "A utility tool built using React JS. Provides assistance in writing Urdu while also providing other useful options.",
    image: vkeyboard,
    live: "https://virtual-urdu-keyboard.netlify.app/",
    github: "https://github.com/Hamdan-Khan/virtual-urdu-keyboard",
  },
  // {
  //   title: "Expense Tracker",
  //   description:
  //     "A utility tool built using React JS to keep track of your expenses and income.",
  //   image: expensetracker,
  //   live: "https://track-expensez.netlify.app/",
  //   github: "https://github.com/Hamdan-Khan/expense-tracker",
  // },
  {
    title: "Sign Language Detection App",
    description:
      "An Interface of Open-Source Sign Language Detection Model built using TensorFlowJS and react-webcam.",
    image: aslapp,
    live: "https://asl-app.netlify.app/",
    github: "https://github.com/Hamdan-Khan/ASL-2",
  },
];
