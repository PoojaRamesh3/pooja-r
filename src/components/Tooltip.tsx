import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { tooltipPostitionEnum, ITooltip } from "../config";
import "../styles/Tooltip.css";

const Tooltip = ({ content, position, disabled, children }: ITooltip) => {
  const initialTheme = useSelector((state: any) => state.theme);

  return (
    <div className="relative hover:visible tooltipContainer ">
      <div
        className={`absolute ${
          initialTheme === "light" ? "bg-black" : "bg-white"
        } ${
          initialTheme === "dark" ? "text-black" : "text-white"
        } top-0 left-1/2 hover:visible py-2 px-1 rounded-md text-sm font-medium invisible lg:px-2.5 text-center min-w-max tooltip${
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
