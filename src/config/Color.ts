const darkColors = {
  background: "bg-gray-900",
  divColor: "bg-gray-800",
  primaryText: "text-[white]",
  secondaryText: "text-slate-300",
  border: "border-white",
  secondaryDiv: "bg-slate-700",
  backgroundReverse: "bg-white",
  purecolor: "white",
};

const lightColors = {
  background: "bg-white",
  divColor: "bg-slate-200",
  primaryText: "text-[black]",
  secondaryText: "text-zinc-700",
  border: "border-black",
  secondaryDiv: "bg-gray-100",
  backgroundReverse: "bg-black",
  purecolor: "black",
};

export const themeChanger = (theme: string) => {
  if (theme === "DARK") {
    return darkColors;
  } else {
    return lightColors;
  }
};
