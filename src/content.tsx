import { FaLanguage } from "react-icons/fa";

export const content = {
  name: "Pooja R",
  navbar: [
    {
      listname: "Home",
      url: "/",
    },
    {
      listname: "Skills",
      url: "/skills",
    },
    {
      listname: "Projects",
      url: "/projects",
    },

    {
      listname: "Experiences",
      url: "/experiences",
    },
    {
      listname: "Certificates",
      url: "/certificates",
    },
  ],
  home: {
    heading: "Home",
  },
  skills: {
    heading: "Skills",
    tabs: [
      {
        tab: "Languages",
        img: <FaLanguage />,
      },
      {
        tab: "Frontend Development",
        img: <FaLanguage />,
      },
      {
        tab: "Backend Development",
        img: <FaLanguage />,
      },
      {
        tab: "DevOps",
        img: <FaLanguage />,
      },
    ],
  },
  projects: {
    heading: "Projects",
  },
  experiences: {
    heading: "Experiences",
  },
  certificates: {
    heading: "Certificates",
  },
};
