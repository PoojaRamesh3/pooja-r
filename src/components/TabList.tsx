import { useSelector } from "react-redux";
import { useState } from "react";
import Tab from "./Tab";
import { content } from "../content";

const TabList = () => {
  const [activeTab, setActiveTab] = useState(content.skills.tabs[0].tab);
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  const handleTab = (tabs: any) => {
    setActiveTab(tabs);
  };

  return (
    <div className={`text-center p-5 ${background} ${text}`}>
      <ul
        className={`list-none nav w-full md:w-4/5 flex justify-center md:justify-between items-center mb-12 mx-auto flex-wrap md:flex-nowrap `}
      >
        {content.skills.tabs.map((item, index) => (
          <li
            onClick={() => handleTab(item.tab)}
            key={index}
            className={`${
              activeTab === item.tab && background === "bg-white"
                ? "bg-black text-white"
                : ""
            }
            ${
              activeTab === item.tab && text === "text-white"
                ? "bg-white text-black"
                : ""
            } rounded-full w-fit p-4 text-center cursor-pointer transition-all font-semibold duration-0 `}
          >
            <div
              className={`flex justify-center flex-wrap md:flex-nowrap items-center`}
            >
              <div className="pr-2">{item.img}</div>
              <div className="text-sm md:text-base">{item.tab}</div>
            </div>
          </li>
        ))}
      </ul>
      {content.skills.tabs.map((item, index) => (
        <div key={index}>{activeTab === item.tab && <Tab title={item} />}</div>
      ))}
    </div>
  );
};

export default TabList;
