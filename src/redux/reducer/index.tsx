import { UPDATE_THEME, UPDATE_COLOR } from "../action";

const initialState = {
  theme: "light",
  color: {
    background: "bg-white",
    textcolor: "text-black",
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return { ...state, color: action.payload };
    case UPDATE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export default reducer;
