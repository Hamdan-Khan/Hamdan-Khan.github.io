import Contact from "../components/Contact";
import Hero from "../components/Hero";
// import InterestingFacts from "../components/InterestingFacts";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blogs from "./Blogs";

const Landing = ({ projects, skills, contact, blogs }) => {
  return (
    <div>
      <Hero skills={skills} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Blogs blogs={blogs} />
      <Contact contact={contact} />
      {/* <InterestingFacts /> */}
    </div>
  );
};

export default Landing;
