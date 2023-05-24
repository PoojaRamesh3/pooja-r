import { useSelector } from "react-redux";
import { content } from "../content";
import { Link } from "react-router-dom";

const Hamburger = (props: any) => {
  const background = useSelector((state: any) => state.theme.background);

  return (
    <ul
      className={`list-none flex-col flex items-center pb-5 flex-wrap border-b-2 ${
        background === "bg-white" ? "border-black" : "border-white"
      }`}
    >
      {content.navbar.map((item, index) => (
        <li
          className="py-2 w-full text-center"
          key={index}
          onClick={() => {
            props.close(false);
          }}
        >
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
