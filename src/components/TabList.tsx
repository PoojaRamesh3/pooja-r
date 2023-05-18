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
        className={`nav w-4/5 flex justify-between items-center border-2 mx-auto flex-wrap md:flex-nowrap ${
          text === "text-white" ? "border-white" : "border-black"
        }`}
      >
        {content.skills.tabs.map((item, index) => (
          <li
            key={index}
            className={`w-1/2 p-4 text-center cursor-pointer transition-all font-semibold duration-0 ${
              activeTab === "tab1" && text === "text-white"
                ? "bg-white text-black"
                : ""
            } ${
              text === "text-white"
                ? "hover:bg-white hover:text-black hover:opacity-50"
                : "hover:bg-black hover:text-white hover:opacity-50"
            }
          ${
            activeTab === "tab1" && text === "text-black"
              ? "bg-black text-white"
              : ""
          }`}
            onClick={() => handleTab(item.tab)}
          >
            <div className="flex">
              <div>{item.img}</div>
              <div>{item.tab}</div>
            </div>
          </li>
        ))}
      </ul>
      {content.skills.tabs.map((item, index) => (
        <div key={index}>
          {activeTab === item.tab && <Tab title={item.tab} />}
        </div>
      ))}
    </div>
  );
};

export default TabList;
