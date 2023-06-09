import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useStore from "./store/store";
import { useRef } from "react";

function App() {
  const theme = useStore((state) => state.theme);
  const projects = useRef();
  const skills = useRef();
  const blogs = useRef();
  const contact = useRef();

  return (
    <div className={`h-[1000px] ${theme ? "dark" : ""}`}>
      <div className="dark:bg-[rgb(27,31,42)]">
        <BrowserRouter>
          <Navbar
            projects={projects}
            skills={skills}
            contact={contact}
            blogs={blogs}
          />
          <Routes>
            <Route
              element={
                <Landing
                  projects={projects}
                  skills={skills}
                  contact={contact}
                  blogs={blogs}
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
