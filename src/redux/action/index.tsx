export const UPDATE_THEME = "UPDATETHEME";
export const UPDATE_COLOR = "UPDATE_COLOR";

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
