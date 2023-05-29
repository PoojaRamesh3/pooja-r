import { useState, useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const initialTheme = useSelector((state: any) => state.theme);
  const background = useSelector((state: any) => state.color.background);
  const text = useSelector((state: any) => state.color.textcolor);

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
    <div className={`${background} ${text}`}>
      <div className={`min-h-fit lg:min-h-screen`}>
        <Navbar />
        <Outlet />
      </div>
      {scrollTop && (
        <BiUpArrowAlt
          onClick={bottomToTop}
          className={`cursor-pointer fixed border right-6 bottom-6 z-10 rounded-full ${
            initialTheme === "light"
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
