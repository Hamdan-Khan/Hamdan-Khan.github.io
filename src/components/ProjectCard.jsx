import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LazyLoad from "react-lazy-load";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 },
};

const ProjectCard = ({ img, title, description, live, github }) => {
  // Scroll Animation Logic
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="card card-compact w-80 bg-base-100 shadow-xl border border-zinc-200 dark:border-none dark:text-white dark:shadow-zinc-800 dark:bg-zinc-600"
    >
      <figure className="border-b border-zinc-300 cursor-pointer">
        <LazyLoad height="200px" offset="20px">
          <img src={img} alt="Shoes" />
        </LazyLoad>
      </figure>
      <div className="card-body px-3">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center my-1">
          <div className="btn-group">
            <a href={live} target="_blank" className="btn">
              Preview
            </a>
            <button className="btn btn-accent">About</button>
            <a href={github} target="_blank" className="btn">
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
