import { content } from "../content";
import { useSelector } from "react-redux";

const Home = () => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className="mt-20">
      <div className={`flex ${background} py-28 items-center justify-center`}>
        <div className={`basis-3/12`}>
          <img
            // src={content.home.profile}
            alt=""
            style={{ height: "200px", width: "269px" }}
            className={`rounded-2xl w-full border  shadow-slate-300 ${
              text === "text-white" ? "shadow-md" : "shadow-2xl"
            }`}
          />
        </div>
        <div className={`${text} py-5 basis-6/12`}>
          <h1 className="text-6xl font-black">{content.home.heading}</h1>
          <p className="pt-5 font-medium text-xl">{content.home.sunheading}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
