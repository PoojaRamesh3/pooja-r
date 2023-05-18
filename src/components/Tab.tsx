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
              href="#"
              className={`flex items-center basis-[45%] shadow-xl ${background} ${text} px-3 py-2 border-2 mb-10 ${
                text === "text-white"
                  ? "border-white shadow-slate-100"
                  : "border-black shadow-slate-300"
              }`}
              key={index}
            >
              <div>
                <img src={item.logo} alt="" className="w-14 h-14" />
              </div>
              <div className="flex">
                <div>{item.language}</div>
                <div>{item.level}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
