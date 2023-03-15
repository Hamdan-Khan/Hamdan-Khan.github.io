import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Contact from "./pages/Contact";
import Technologies from "./pages/Technologies";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Technologies />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
