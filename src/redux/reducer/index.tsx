import { LIGHT, DARK } from "../action";

export interface theme {
  background: string;
  text: string;
}

const initialState: theme = {
  background: "bg-white",
  text: "text-[black]",
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LIGHT:
      return { ...state };
    case DARK:
      return { ...state, background: "black", text: "white" };
    default:
      return state;
  }
};
export default Reducer;
