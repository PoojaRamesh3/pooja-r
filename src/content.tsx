import { DiJavascript } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import C from "./assets/c.png";
import Cpp from "./assets/c++.png";
import CSharp from "./assets/Csharp.png";
import JavaScript from "./assets/python.png";
import Python from "./assets/python.png";

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
        info: [
          {
            logo: C,
            language: "C",
            level: "Intermediate",
            url: "https://www.cprogramming.com/",
            bgCol: "bg-blue-600",
          },
          {
            logo: Cpp,
            language: "C++",
            level: "Advance",
            url: "https://cplusplus.com/",
            bgCol: "bg-blue",
          },
          {
            logo: CSharp,
            language: "C#",
            level: "Intermediate",
            url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            bgCol: "bg-blue",
          },
          {
            logo: JavaScript,
            language: "JavaScript",
            level: "Advance",
            url: "https://www.javascript.com/",
            bgCol: "bg-blue",
          },
          {
            logo: Python,
            language: "Python",
            level: "Beginner",
            url: "https://www.python.org/",
            bgCol: "bg-blue",
          },
        ],
      },
      {
        tab: "Frontend Development",
        img: <RiReactjsLine style={{ width: "25px", height: "25px" }} />,
        info: [
          {
            logo: C,
            language: "HTML5",
            level: "Advance",
          },
          {
            logo: Cpp,
            language: "CSS3",
            level: "Advance",
          },
          {
            logo: CSharp,
            language: "Bootstrap",
            level: "Advance",
          },
          {
            logo: JavaScript,
            language: "React Js",
            level: "Intermediate",
          },
          {
            logo: Python,
            language: "Tailwind",
            level: "Advance",
          },
        ],
      },
      {
        tab: "Backend Development",
        img: <IoLogoNodejs style={{ width: "25px", height: "25px" }} />,
        info: [
          {
            logo: C,
            language: "NodeJs",
            level: "Intermediate",
          },
          {
            logo: Cpp,
            language: "ASP.NET Core",
            level: "Intermediate",
          },
        ],
      },
      {
        tab: "DevOps",
        img: <BsGit style={{ width: "25px", height: "25px" }} />,
        info: [
          {
            logo: C,
            language: "Git",
            level: "Advance",
          },
          {
            logo: Cpp,
            language: "Github",
            level: "Advance",
          },
        ],
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
