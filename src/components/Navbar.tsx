import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <nav>
      <div className="flex w-full justify-between p-5 md:p-3">
        <div className="">
          <Link
            to="/"
            className="font-black text-2xl font-sans hover:underline hover:decoration-4"
          >
            {data.name}
          </Link>
        </div>

        <div className="hidden md:block p-5">
          <ul className="flex w-full justify-between">
            {data.navbar.map((item, index) => (
              <li
                key={index}
                className="px-2 hover:underline hover:decoration-2"
              >
                <Link
                  to={item.url}
                  className="p-5 font-black text-base font-sans"
                >
                  {item.listname}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          {click === true ? (
            <CgClose
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setClick(!click);
              }}
            />
          ) : (
            <CgMenu
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setClick(!click);
              }}
            />
          )}
        </div>
      </div>
      <div className="bg-gray-400 absolute z-50 w-full mix-blend-overlay md:hidden">
        {click === true && <Hamburger />}
      </div>
    </nav>
  );
};

export default Navbar;
