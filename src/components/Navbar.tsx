import { CgMenu, CgClose } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../redux/action";
import data from "../data";
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

  const themeUpdater = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    dispatch(updateTheme(theme));
    setThemeIcon(!themeIcon);
  };

  return (
    <nav>
      <div
        className={`flex w-full justify-between p-5 md:p-3 items-center ${background}`}
      >
        <div className="">
          <Link
            to="/"
            className={`font-black text-2xl font-sans hover:underline hover:decoration-4 ${text}`}
          >
            {data.name}
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center">
            <div className="p-5">
              <ul className="flex w-full justify-between">
                {data.navbar.map((item, index) => (
                  <li
                    key={index}
                    className="hover:underline hover:decoration-2"
                  >
                    <Link
                      to={item.url}
                      className={`p-5 font-bold text-base font-sans ${text}`}
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
      <div className={`bg-gray-400 md:hidden ${background}`}>
        {click === true && <Hamburger textColor={text} />}
      </div>
    </nav>
  );
};

export default Navbar;
