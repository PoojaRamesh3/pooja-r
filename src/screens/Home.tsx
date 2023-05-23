import { content } from "../content";
import { useSelector } from "react-redux";

const Home = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className="mt-16 md:mt-20">
      <div
        className={`lg:flex ${background} px-5 lg:px-0 py-5 md:py-10 lg:py-28 items-center justify-center flex-wrap block text-center lg:text-left lg:justify-evenly`}
      >
        <div
          className={`basis-3/12 text-center flex justify-center lg:block flex-wrap`}
        >
          <img
            src={content.home.profile}
            alt="Pooja R"
            style={{}}
            className={`rounded-2xl border w-64 h-64 md:w-auto shadow-slate-300 ${
              text === "text-white" ? "shadow-md" : "shadow-2xl"
            }`}
          />
        </div>
        <div className={`${text} py-5 basis-6/12`}>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-black">
            {content.home.heading}
          </h1>
          {content.home.paragraph.map((item: any, index: any) => {
            return (
              <p key={index} className="pt-5 font-medium text-base md:text-lg">
                {item.content}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
