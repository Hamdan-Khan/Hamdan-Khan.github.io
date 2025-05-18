import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blogs from "./Blogs";

const Landing = ({
  projectsRef,
  skillsRef,
  contactRef,
  blogsRef,
}: {
  projectsRef: React.Ref<HTMLDivElement>;
  skillsRef: React.Ref<HTMLDivElement>;
  contactRef: React.Ref<HTMLDivElement>;
  blogsRef: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div>
      <Hero skillsRef={skillsRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Blogs blogRef={blogsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Landing;
