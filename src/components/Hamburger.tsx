import data from "../data";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <ul className="flex-col flex items-center">
      {data.navbar.map((item, index) => (
        <li className="py-2 w-full text-center" key={index}>
          <Link to={item.url} className="font-semibold text-black">
            {item.listname}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Hamburger;
