import React, { Suspense } from "react";
import { projectData } from "../data/ProjectsData";
const ProjectCard = React.lazy(() => import("./ProjectCard"));

const Projects = ({
  projectsRef,
}: {
  projectsRef: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div
      ref={projectsRef}
      className="sm:px-10 px-4 sm:pb-12 pb-10 scroll-m-28 sm:scroll-m-20"
    >
      <h1 className="text-4xl text-center font-bold my-7 dark:text-white">
        PROJECTS
      </h1>
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </div>
  );
};

export default Projects;
