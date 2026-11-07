import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./screens/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
