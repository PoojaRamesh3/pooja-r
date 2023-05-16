import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
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
            <AiFillCloseCircle
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setClick(!click);
              }}
            />
          ) : (
            <GiHamburgerMenu
              style={{ width: "30px", height: "30px" }}
              onClick={() => {
                setClick(!click);
              }}
            />
          )}
        </div>
      </div>
      <div className="bg-gray-400">{click === true && <Hamburger />}</div>
    </nav>
  );
};

export default Navbar;
