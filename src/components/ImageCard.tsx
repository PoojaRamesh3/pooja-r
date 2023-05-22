import { useSelector } from "react-redux";
import { content } from "../content";
import { DiVim } from "react-icons/di";

const ImageCard = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div
      className={`${background} text-center flex items-center justify-center flex-col`}
    >
      {content.projects.projectslist?.map((item: any, index: any) => {
        return (
          <div className={`pb-16`} key={index}>
            <a
              href={item.prolink}
              className={``}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.proimg}
                alt=""
                className={`shadow-2xl rounded-3xl shadow-slate-300 border ${
                  text === "text-white"
                    ? "shadow-xl border-black"
                    : "shadow-2xl border-white"
                }`}
                style={{ height: "500px" }}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
