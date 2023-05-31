import { useSelector } from "react-redux";

const Heading = (props: any) => {
  const background = useSelector((state: any) => state.color.background);
  const text = useSelector((state: any) => state.color.textcolor);

  return (
    <div className={`p-5 text-center ${background} mt-16 md:mt-20`}>
      <h2 className={`text-2xl py-5 font-bold ${text} md:text-6xl font-sans`}>
        {props.heading}
      </h2>
      {props.subHeading !== "" && (
        <p className={`${text} pb-3 font-medium text-base md:text-lg`}>
          {props.subHeading}
        </p>
      )}
    </div>
  );
};

export default Heading;
