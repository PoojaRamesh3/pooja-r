import { THEMECHANGER, UPDATETAB, UPDATETABICON } from "../action";

export interface theme {
  initialTheme: string;
  activeTab: string;
  theme: {
    background: string;
    text: string;
  };
  themeIcon: boolean;
}

const initialState: theme = {
  initialTheme: "dark",
  activeTab: "/",
  theme: {
    background: "bg-white",
    text: "text-black",
  },
  themeIcon: true,
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case THEMECHANGER:
      return { ...state, theme: action.payload };
    case UPDATETAB:
      return { ...state, activeTab: action.payload };
    case UPDATETABICON:
      return { ...state, themeIcon: action.payload };
    default:
      return state;
  }
};
export default Reducer;
