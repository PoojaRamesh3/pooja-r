import { useSelector } from "react-redux";
import { BsGithub } from "react-icons/bs";
import { content } from "../content";
import Tooltip from "./Tooltip";
import { tooltipPostitionEnum } from "../config";
import "../styles/ImageCard.css";

const ImageCard = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div
      className={`${background} text-center flex flex-wrap items-center justify-center flex-col p-3`}
    >
      {content.projects.projectslist?.map((item: any, index: any) => {
        return (
          <div
            className={`flex flex-wrap pb-16 items-baseline transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 justify-center`}
            key={index}
          >
            <div className={`cursor-pointer`}>
              <a
                href={item.prolink}
                className={``}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.proimg}
                  alt=""
                  className={`h-auto md:h-96 rounded-3xl shadow-slate-300 proj-img ${
                    text === "text-white"
                      ? "shadow-xl"
                      : "shadow-2xl border-black border-2"
                  }`}
                />
              </a>
            </div>
            <Tooltip
              key={index}
              disabled={false}
              position={tooltipPostitionEnum.Up}
              content={"Code Link"}
            >
              <div
                className={`border-2 rounded-xl py-2 px-3 md:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 basis-1/2 ${
                  text === "text-white"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <div className={`flex flex-wrap items-center`}>
                  <a
                    className="text-base md:text-xl font-bold pr-3 hover:underline underline-offset-4 decoration-2"
                    href={item.gitlink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>

                  <BsGithub
                    // style={{ width: "25px", height: "25px" }}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
