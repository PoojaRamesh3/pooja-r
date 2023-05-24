export const THEMECHANGER = "THEMECHANGER";

export function updateTheme(theme: string) {
  let updateObj;
  if (theme === "dark") {
    updateObj = {
      background: "bg-black",
      text: "text-white",
    };
  } else {
    updateObj = {
      background: "bg-white",
      text: "text-black",
    };
  }

  return {
    type: THEMECHANGER,
    payload: updateObj,
  };
}
