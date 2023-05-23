import { useState, useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const background = useSelector((state: any) => state.theme.background);
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${background}`}>
      <div className={`min-h-fit lg:min-h-screen`}>
        <Navbar />
        <Outlet />
      </div>
      {scrollTop && (
        <BiUpArrowAlt
          onClick={bottomToTop}
          className={`cursor-pointer fixed border-2 right-6 bottom-6 z-10 rounded-full ${
            background === "bg-white"
              ? "hover:bg-black hover:text-white hover:border-white border-black bg-white text-black"
              : "hover:bg-white hover:text-black hover:border-black border-white bg-black text-white"
          }`}
          style={{ width: "40px", height: "40px" }}
        />
      )}
      <Footer />
    </div>
  );
};

export default Layout;
