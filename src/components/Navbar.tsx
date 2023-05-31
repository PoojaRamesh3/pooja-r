import { CgMenu, CgClose } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateColor, updateTheme, updateTab } from "../redux/action";
import { content } from "../content";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const dispatch = useDispatch();
  const initialTheme = useSelector((state: any) => state.theme);
  const background = useSelector((state: any) => state.color.background);
  const text = useSelector((state: any) => state.color.textcolor);
  const activeTab = useSelector((state: any) => state.activeTab);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const currentLocation = window.location.href.split("/");
    const endPoint = currentLocation[currentLocation.length - 1];
    if (endPoint === "") {
      dispatch(updateTab("Home"));
    }
  }, [dispatch]);

  const changeFunction = () => {
    if (initialTheme === "light") {
      dispatch(updateColor("dark"));
      dispatch(updateTheme("dark"));
    } else {
      dispatch(updateColor("light"));
      dispatch(updateTheme("light"));
    }
  };

  const handleTab = (navlink: any) => {
    dispatch(updateTab(navlink.listname));
  };

  return (
    <nav
      className={`md:border-b-2 fixed top-0 right-0 w-full z-10 ${
        initialTheme === "light" ? "border-black" : "border-white"
      } ${text}`}
    >
      <div
        className={`flex w-full justify-between p-5 md:p-3 items-center ${background}`}
      >
        <div>
          <Link
            onClick={() => handleTab(content.navbar[0])}
            to="/"
            className={`font-black text-2xl font-sans hover:underline hover:decoration-4 ${text}`}
          >
            {content.brandname}
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center">
            <div className="p-5">
              <ul className="list-none flex w-full justify-between">
                {content.navbar.map((item, index) => (
                  <li
                    onClick={() => handleTab(item)}
                    key={index}
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  >
                    <Link
                      to={item.url}
                      className={`${
                        activeTab === item.listname && initialTheme === "light"
                          ? "bg-black text-white rounded-full"
                          : ""
                      }
            ${
              activeTab === item.listname && initialTheme === "dark"
                ? "bg-white text-black rounded-full"
                : ""
            } p-4 font-bold text-base font-sans`}
                    >
                      {item.listname}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {initialTheme !== "light" ? (
                <FaSun
                  onClick={() => changeFunction()}
                  className={`cursor-pointer ${text}`}
                  style={{ width: "30px", height: "30px" }}
                />
              ) : (
                <FaMoon
                  onClick={() => changeFunction()}
                  className={`cursor-pointer ${text}`}
                  style={{ width: "25px", height: "25px" }}
                />
              )}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="flex items-center md:hidden">
          {/* MOBILE THEME BUTTON */}
          <div className="px-4">
            {initialTheme !== "light" ? (
              <FaSun
                onClick={() => changeFunction()}
                className={`cursor-pointer ${text}`}
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <FaMoon
                onClick={() => changeFunction()}
                className={`cursor-pointer ${text}`}
                style={{ width: "25px", height: "25px" }}
              />
            )}
          </div>

          {/* MOBILE HAMBURGER AND CLOSE BUTTON */}
          <div className="md:hidden">
            {click === true ? (
              <CgClose
                className={`${text}`}
                style={{ width: "30px", height: "30px" }}
                onClick={() => {
                  setClick(!click);
                }}
              />
            ) : (
              <CgMenu
                className={`${text}`}
                style={{ width: "30px", height: "30px" }}
                onClick={() => {
                  setClick(!click);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE HAMBURGER MENU */}
      <div className={`bg-black md:hidden ${background}`}>
        {click === true && <Hamburger textColor={text} close={setClick} />}
      </div>
    </nav>
  );
};

export default Navbar;
