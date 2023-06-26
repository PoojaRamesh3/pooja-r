import { content } from "../content";
import { useSelector } from "react-redux";

const Home = () => {
  const initialTheme = useSelector((state: any) => state.theme);
  const background = useSelector((state: any) => state.color.background);
  const text = useSelector((state: any) => state.color.textcolor);

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
            className={`rounded-2xl border h-64 lg:h-auto shadow-slate-300 ${
              initialTheme === "light" ? "shadow-2xl" : "shadow-md "
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
