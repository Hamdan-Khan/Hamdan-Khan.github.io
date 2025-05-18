import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import useStore from "./store/store";

function App() {
  const isDarkTheme = useStore((state) => state.theme);
  const projects = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const blogs = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  return (
    <div className={`h-[1000px] ${isDarkTheme ? "dark" : ""}`}>
      <div className="dark:bg-[rgb(27,31,42)]">
        <BrowserRouter>
          <Navbar
            projectsRef={projects}
            skillsRef={skills}
            contactRef={contact}
            blogsRef={blogs}
          />
          <Routes>
            <Route
              element={
                <Landing
                  projectsRef={projects}
                  skillsRef={skills}
                  contactRef={contact}
                  blogsRef={blogs}
                />
              }
              path="/"
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
