import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { tooltipPostitionEnum, ITooltip } from "../config";
import "../styles/Tooltip.css";

const Tooltip = ({ content, position, disabled, children }: ITooltip) => {
  const background = useSelector((state: any) => state.theme.background);
  const text = useSelector((state: any) => state.theme.text);

  return (
    <div className="relative hover:visible tooltipContainer ">
      <div
        className={`absolute ${
          background === "bg-white" ? "bg-black" : "bg-white"
        } ${
          text === "text-white" ? "text-black" : "text-white"
        } top-0 left-1/2 hover:visible py-2 px-1 rounded-md text-sm font-medium invisible md:px-2.5 text-center min-w-max tooltip${
          position === tooltipPostitionEnum.Down ? " down" : ""
        }${disabled ? "invisible" : ""}`}
      >
        {content}
      </div>
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Tooltip;
