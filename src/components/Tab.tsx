import { useSelector } from "react-redux";

const Tab = (props: any) => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className={`text-center p-5`}>
      <div className="flex items-center flex-wrap justify-between">
        {props.title.info?.map((item: any, index: any) => {
          return (
            <a
              target="_blank"
              href={item.url}
              className={`flex items-center basis-[45%] ${background} ${text} px-4 py-3 border-2 mb-10 shadow-slate-300 ${
                text === "text-white"
                  ? "border-white shadow-md"
                  : "border-black shadow-2xl"
              }`}
              key={index}
            >
              <div className={`p-1.5 mr-5 ${item.bgCol} rounded-xl`}>
                <img src={item.logo} alt="" className="w-14 h-14" />
              </div>
              <div className="flex items-center">
                <div className="font-bold text-xl font-sans mr-3">
                  {item.language}
                </div>
                <div
                  className={`font-bold text-base text-black font-sans ${item.bgCol} px-2 py-1 rounded-xl`}
                >
                  {item.level}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
