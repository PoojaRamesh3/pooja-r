import { THEMECHANGER } from "../action";

export interface theme {
  initialTheme: string;
  theme: {
    background: string;
    text: string;
  };
}

const initialState: theme = {
  initialTheme: "dark",
  theme: {
    background: "bg-white",
    text: "text-black",
  },
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case THEMECHANGER:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export default Reducer;
