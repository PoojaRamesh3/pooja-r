import { LIGHT, DARK } from "../action";

export interface theme {
  bgcolor: string;
  textcolor: string;
}

const initialState: theme = {
  bgcolor: "white",
  textcolor: "black",
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LIGHT:
      return { ...state };
    case DARK:
      return { ...state, bgcolor: "black", textcolor: "white" };
    default:
      return state;
  }
};
export default Reducer;
