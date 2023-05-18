import { DiJavascript } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

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
        img: <DiJavascript style={{ width: "25px", height: "25px" }} />,
      },
      {
        tab: "Frontend Development",
        img: <RiReactjsLine style={{ width: "25px", height: "25px" }} />,
      },
      {
        tab: "Backend Development",
        img: <IoLogoNodejs style={{ width: "25px", height: "25px" }} />,
      },
      {
        tab: "DevOps",
        img: <BsGit style={{ width: "25px", height: "25px" }} />,
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
