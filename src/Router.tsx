import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Experiences from "./screens/Experiences";
import Certificates from "./screens/Certificates";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certificates" element={<Certificates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
