import { useSelector } from "react-redux";
import { content } from "../content";
import Tooltip from "./Tooltip";
import { tooltipPostitionEnum } from "../configuration";

const Footer = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <>
      <div
        className={`p-3 border-t-2 flex flex-col md:flex-row justify-between ${
          background === "bg-white" ? "border-black" : "border-white"
        } ${text} `}
      >
        <div className="flex justify-center items-center">
          <h3 className={`font-semibold pl-5`}>{content.footer.conclusion}</h3>

          {content.footer.icons.map((item, index) => (
            <Tooltip
              disabled={false}
              position={tooltipPostitionEnum.Up}
              content={item.name}
            >
              <a
                className="p-2 block cursor-pointer"
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </Tooltip>
          ))}
        </div>
        <div className={`flex justify-center`}>
          {content.footer.socialicons.map((item, index) => (
            <a
              key={index}
              className={`p-5 cursor-pointer hover:animate-bounce`}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
