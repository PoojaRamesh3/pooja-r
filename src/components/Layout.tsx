import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Layout = () => {
  const background = useSelector((state: any) => state.theme.background);
  console.log(background, "background");

  return (
    <div className={`${background} min-h-screen`}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
