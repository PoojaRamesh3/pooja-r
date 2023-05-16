const themeChanger = () => {
  //   let theme = "white";
  const primaryColor = (theme: any) => {
    if (theme === "white") {
      return "bg-red-500";
    } else {
      return "bg-black";
    }
  };
};

export default themeChanger;
