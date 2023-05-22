import { useSelector } from "react-redux";
import { BsGithub } from "react-icons/bs";
import { content } from "../content";
import Tooltip from "./Tooltip";
import { tooltipPostitionEnum } from "../config";

const ImageCard = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div
      className={`${background} text-center flex items-center justify-center flex-col`}
    >
      {content.projects.projectslist?.map((item: any, index: any) => {
        return (
          <div
            className={`flex pb-16 items-baseline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
            key={index}
          >
            <div className={``}>
              <a
                href={item.prolink}
                className={``}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.proimg}
                  alt=""
                  className={`rounded-3xl shadow-slate-300 ${
                    text === "text-white"
                      ? "shadow-xl"
                      : "shadow-2xl border-black border-2"
                  }`}
                  style={{ height: "400px" }}
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
                className={`border-2 rounded-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 basis-1/2 ${
                  text === "text-white"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <div className={`flex`}>
                  <a
                    className="text-xl font-bold pr-3 hover:underline underline-offset-4 decoration-2"
                    href={item.gitlink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                  <BsGithub
                    style={{ width: "25px", height: "25px" }}
                    className=""
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