import data from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="flex w-full justify-between ">
        <div>
          <Link to="/" className="font-black text-2xl font-sans">
            {data.name}
          </Link>
        </div>
        <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
