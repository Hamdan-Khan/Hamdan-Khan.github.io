import Contact from "../components/Contact";
import Hero from "../components/Hero";
import InterestingFacts from "../components/InterestingFacts";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Landing = ({ projects, skills, contact }) => {
  return (
    <div>
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      {/* <InterestingFacts /> */}
    </div>
  );
};

export default Landing;
