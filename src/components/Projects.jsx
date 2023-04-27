import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectsData";

const Projects = ({ projects }) => {
  return (
    <div ref={projects} className="px-10 pb-12 scroll-m-20">
      <h1 className="text-4xl text-center font-bold my-7 dark:text-white">
        PROJECTS
      </h1>
      <div className="flex justify-center flex-wrap gap-4">
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
