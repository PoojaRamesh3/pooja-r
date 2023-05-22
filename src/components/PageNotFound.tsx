import PageNotFoundImg from "../assets/404.gif";
import { useSelector } from "react-redux";

const PageNotFound = (props: any) => {
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className="mt-20 text-center">
      <h2 className="pt-16 font-black text-4xl text-red-600">
        {props.pageName} page is currently under construction!
      </h2>
      <p className={`pt-4 pb-2 text-xl ${text}`}>Please, check back later :)</p>
      <div className="flex items-center justify-center">
        <img src={PageNotFoundImg} alt="404" />
      </div>
    </div>
  );
};

export default PageNotFound;
