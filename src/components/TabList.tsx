import { useSelector } from "react-redux";
import { useState } from "react";
import Tab from "./Tab";

const TabList = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className={`text-center p-5 ${background} ${text}`}>
      <ul
        className={`nav w-3/5 flex justify-between items-center border-2 rounded-full mx-auto ${
          text === "text-white" ? "border-white" : "border-black"
        }`}
      >
        <li
          className={`w-1/2 p-4 text-center cursor-pointer transition-all duration-0 ${
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
          onClick={handleTab1}
        >
          Tab 1
        </li>
        <li
          className={`w-1/2 p-4 text-center cursor-pointer transition-all duration-0 ${
            activeTab === "tab2" && text === "text-white"
              ? "bg-white text-black"
              : ""
          } ${
            text === "text-white"
              ? "hover:bg-white hover:text-black hover:opacity-50"
              : "hover:bg-black hover:text-white hover:opacity-50"
          }
          ${
            activeTab === "tab2" && text === "text-black"
              ? "bg-black text-white"
              : ""
          }`}
          onClick={handleTab2}
        >
          Tab 2
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? (
          <Tab title={"First"} />
        ) : (
          <Tab title={"Second"} />
        )}
      </div>
    </div>
  );
};

export default TabList;
