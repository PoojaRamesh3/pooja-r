import { useSelector } from "react-redux";

const Tab = (props: any) => {
  const initialTheme = useSelector((state: any) => state.theme);
  const background = useSelector((state: any) => state.color.background);
  const text = useSelector((state: any) => state.color.textcolor);

  return (
    <div className={`text-center p-3 md:p-5`}>
      <div className="flex items-center flex-wrap lg:justify-between md:justify-evenly justify-center">
        {props.title.info?.map((item: any, index: any) => {
          return (
            <a
              rel="noreferrer"
              target="_blank"
              href={item.url}
              className={`flex rounded-3xl items-center basis-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 md:basis-2/5 lg:basis-[45%] ${background} ${text} px-4 py-3 border mb-10 shadow-slate-300 ${
                initialTheme === "light"
                  ? "border-black shadow-2xl"
                  : "border-white shadow-md"
              }`}
              key={index}
            >
              <div className={`p-1.5 mr-2 md:mr-5 ${item.bgCol} rounded-xl`}>
                <img src={item.logo} alt="" className="w-14 h-14" />
              </div>
              <div className="flex items-center">
                <div className="font-bold text-base md:text-xl font-sans mr-3">
                  {item.language}
                </div>
                <div
                  className={`font-bold break-all text-sm text-black font-sans ${item.bgCol} px-2 py-1 rounded-xl`}
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
