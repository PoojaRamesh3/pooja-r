import { useSelector } from "react-redux";
import { content } from "../content";
import Tooltip from "./Tooltip";
import { tooltipPostitionEnum } from "../config";

const Footer = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <>
      <div
        className={`p-3 border-t-2 flex flex-col md:flex-row flex-wrap justify-between ${
          background === "bg-white" ? "border-black" : "border-white"
        } ${text} `}
      >
        <div className="flex justify-center items-center flex-wrap">
          <h3
            className={`font-semibold md:pl-5 basis-full md:basis-auto text-center md:text-left pb-4  md:pb-0`}
          >
            {content.footer.conclusion}
          </h3>

          {content.footer.icons.map((item, index) => (
            <Tooltip
              key={index}
              disabled={false}
              position={tooltipPostitionEnum.Up}
              content={item.name}
            >
              <a
                className="py-2 px-3 block cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </Tooltip>
          ))}
        </div>

        <div className="flex justify-center flex-wrap pt-5 md:pt-0">
          {content.footer.socialicons.map((item, index) => (
            <Tooltip
              key={index}
              disabled={false}
              position={tooltipPostitionEnum.Up}
              content={item.name}
            >
              <a
                className={`p-2 md:p-5 cursor-pointer block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
