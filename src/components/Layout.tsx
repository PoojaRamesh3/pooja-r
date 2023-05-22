import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const background = useSelector((state: any) => state.theme.background);

  return (
    <div className={`${background}`}>
      <div className={`min-h-fit lg:min-h-screen`}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
