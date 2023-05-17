import { useSelector } from "react-redux";

const Heading = (props: any) => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className={`p-5 text-center ${background}`}>
      <h2 className={`text-2xl py-5 font-bold ${text} md:text-4xl font-sans`}>
        {props.heading}
      </h2>
    </div>
  );
};

export default Heading;
