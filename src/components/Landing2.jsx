import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const name1 = useRef(null);
  const name2 = useRef(null);
  const H = useRef(null);
  const K = useRef(null);
  const rest1 = useRef(null);
  const rest2 = useRef(null);
  const container = useRef(null);

  let tl = gsap.timeline();
  useEffect(() => {
    gsap.to([name1.current, name2.current], {
      scale: 1.4,
      duration: 2,
      ease: "Power2.easeInOut",
    });
    tl.to([name1.current, name2.current], {
      duration: 2,
      autoAlpha: 1,
      ease: "Power1.easeInOut",
    })
      .to([rest1.current, rest2.current], { opacity: 0, duration: 1 })
      .to(container.current, { y: -250, left: "20%", duration: 1.4 }, "<")
      .to(name2.current, { y: -189, left: "20%", duration: 1.4 }, "<");
  }, []);
  return (
    <div className="relative h-[800px]">
      <div className="h-36 bg-gray-600 w-full"></div>
      <div
        ref={container}
        className="absolute top-[350px] left-[50%] translate-x-[-50%] translate-y-[-80%] "
      >
        <h1
          className="absolute translate-y-[-80%] left-[50%] translate-x-[-50%] text-7xl text-green-400 opacity-0 text-center"
          ref={name1}
        >
          <span className="text-8xl" ref={H}>
            H
          </span>
          <span ref={rest1}>AMDAN</span>
        </h1>
        <h1
          className="absolute translate-y-[-80%] left-[50%] top-28 translate-x-[-50%] text-7xl text-green-400 opacity-0 text-center"
          ref={name2}
        >
          <span className="text-8xl" ref={K}>
            K
          </span>
          <span ref={rest2}>HAN.</span>
        </h1>
      </div>
      <button className="text-white">Continue</button>
    </div>
  );
};

export default Landing;
