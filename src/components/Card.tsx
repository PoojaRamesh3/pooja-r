import { useSelector } from "react-redux";
import { content } from "../content";

const Card = () => {
  const initialTheme = useSelector((state: any) => state.theme);

  const handleClick = (event: any) => {};

  return (
    <div
      className={`flex items-center justify-evenly cursor-pointer p-5 flex-col md:flex-row`}
      onClick={(event) => handleClick(event)}
    >
      {content.certificates.certiList.map((item, index) => (
        <a
          href={item.certiImg}
          target="_blank"
          rel="noreferrer"
          key={index}
          className={`shadow-slate-300 rounded-3xl transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 mb-8 md:mx-5 ${
            initialTheme === "light" ? "shadow-2xl" : "shadow-md"
          }`}
        >
          <img
            src={item.certiImg}
            alt=""
            className={`h-64 md:h-72 rounded-t-3xl`}
          />
          <div
            className={`flex md:items-center justify-between p-5 rounded-b-3xl 
                 bg-black text-white`}
          >
            <p className="text-sm md:text-base">{item.certiTitle}</p>
            <p className="text-sm md:text-base">
              {item.certidate.getDate() +
                "/" +
                (item.certidate.getMonth() + 1) +
                "/" +
                item.certidate.getFullYear()}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
