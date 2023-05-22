import { content } from "../content";
import { useSelector } from "react-redux";

const Home = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className="mt-20">
      <div
        className={`lg:flex ${background} px-5 lg:px-0 py-5 md:py-10 lg:py-28 items-center justify-center flex-wrap block text-center lg:text-left lg:justify-evenly`}
      >
        <div
          className={`basis-3/12 text-center flex justify-center lg:block flex-wrap`}
        >
          <img
            src={content.home.profile}
            alt="Pooja R"
            style={{ height: "200px", width: "269px" }}
            className={`rounded-2xl w-full border  shadow-slate-300 ${
              text === "text-white" ? "shadow-md" : "shadow-2xl"
            }`}
          />
        </div>
        <div className={`${text} py-5 basis-6/12`}>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-black">
            {content.home.heading}
          </h1>
          <p className="pt-5 font-medium text-base md:text-lg">
            {content.home.sunheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
