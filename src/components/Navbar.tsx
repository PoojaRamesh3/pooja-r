import { CgMenu, CgClose } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../redux/action";
import { content } from "../content";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const dispatch = useDispatch();
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);
  const initialTheme = useSelector((state: any) => state.initialTheme);
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState(initialTheme);
  const [themeIcon, setThemeIcon] = useState(false);
  const [activeTab, setActiveTab] = useState(content.navbar[0]);

  const themeUpdater = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    dispatch(updateTheme(theme));
    setThemeIcon(!themeIcon);
  };

  const handleTab = (navlink: any) => {
    setActiveTab(navlink);
  };

  return (
    <nav
      className={`md:border-b-2 fixed top-0 right-0 w-full z-10 ${
        background === "bg-white" ? "border-black" : "border-white"
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
                        activeTab === item && background === "bg-white"
                          ? "bg-black text-white rounded-full"
                          : ""
                      }
            ${
              activeTab === item && text === "text-white"
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
              {themeIcon === true ? (
                <FaSun
                  onClick={themeUpdater}
                  className={`cursor-pointer ${text}`}
                  style={{ width: "30px", height: "30px" }}
                />
              ) : (
                <FaMoon
                  onClick={themeUpdater}
                  className={`cursor-pointer ${text}`}
                  style={{ width: "25px", height: "25px" }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <div className="px-3">
            {themeIcon === true ? (
              <FaSun
                onClick={themeUpdater}
                className={`cursor-pointer ${text}`}
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <FaMoon
                onClick={themeUpdater}
                className={`cursor-pointer ${text}`}
                style={{ width: "25px", height: "25px" }}
              />
            )}
          </div>
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
      <div className={`bg-black md:hidden ${background}`}>
        {click === true && <Hamburger textColor={text} close={setClick} />}
      </div>
    </nav>
  );
};

export default Navbar;
