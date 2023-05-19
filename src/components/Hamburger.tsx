import { content } from "../content";
import { Link } from "react-router-dom";

const Hamburger = (props: any) => {
  return (
    <ul className="flex-col flex items-center pb-5">
      {content.navbar.map((item, index) => (
        <li className="py-2 w-full text-center" key={index}>
          <Link
            to={item.url}
            className={`font-semibold hover:underline hover:decoration-2 ${props.textColor}`}
          >
            {item.listname}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Hamburger;
