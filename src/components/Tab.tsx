import { useSelector } from "react-redux";

const Tab = (props: any) => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className={`text-center p-5 ${background} ${text}`}>
      <p>{props.title}</p>
    </div>
  );
};

export default Tab;
