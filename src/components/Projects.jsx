import ProjectCard from "./ProjectCard";
import { projectData } from "../data/ProjectsData";

const Projects = ({ projects }) => {
  return (
    <div
      ref={projects}
      className="sm:px-10 px-4 sm:pb-12 pb-10 scroll-m-28 sm:scroll-m-20"
    >
      <h1 className="text-4xl text-center font-bold my-7 dark:text-white">
        PROJECTS
      </h1>
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
        {projectData.map((project) => {
          const { title, description, image, live, github } = project;
          return (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              img={image}
              live={live}
              github={github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
