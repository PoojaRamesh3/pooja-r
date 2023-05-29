export const UPDATE_THEME = "UPDATETHEME";
export const UPDATE_COLOR = "UPDATE_COLOR";
export const UPDATETAB = "UPDATETAB";

export function updateColor(color: string) {
  let obj = {};
  if (color === "light") {
    obj = {
      background: "bg-white",
      textcolor: "text-black",
    };
  } else {
    obj = {
      background: "bg-black",
      textcolor: "text-white",
    };
  }
  return {
    type: UPDATE_COLOR,
    payload: obj,
  };
}

export function updateTheme(theme: any) {
  return {
    type: UPDATE_THEME,
    payload: theme,
  };
}

export function updateTab(tab: string) {
  return {
    type: UPDATETAB,
    payload: tab,
  };
}
