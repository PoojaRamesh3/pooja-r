import { DiJavascript } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import C from "./assets/c.png";
import Cpp from "./assets/c++.png";
import CSharp from "./assets/Csharp.png";
import JavaScript from "./assets/javascript.png";
import Python from "./assets/python.png";
import Html from "./assets/html.png";
import Css from "./assets/css.png";
import Bootstrap from "./assets/bootstrap.png";
import Tailwind from "./assets/tailwind.png";
import React from "./assets/react.png";

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
            logo: JavaScript,
            language: "JavaScript",
            level: "Advance",
            url: "https://www.javascript.com/",
            bgCol: "bg-yellow-200",
          },
          {
            logo: Cpp,
            language: "C++",
            level: "Advance",
            url: "https://cplusplus.com/",
            bgCol: "bg-sky-200",
          },
          {
            logo: C,
            language: "C",
            level: "Intermediate",
            url: "https://www.cprogramming.com/",
            bgCol: "bg-blue-200",
          },
          {
            logo: CSharp,
            language: "C#",
            level: "Intermediate",
            url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            bgCol: "bg-fuchsia-300",
          },
          {
            logo: Python,
            language: "Python",
            level: "Beginner",
            url: "https://www.python.org/",
            bgCol: "bg-blue-300",
          },
        ],
      },
      {
        tab: "Frontend Development",
        img: <RiReactjsLine style={{ width: "25px", height: "25px" }} />,
        info: [
          {
            logo: Html,
            language: "HTML5",
            level: "Advance",
            url: "https://html.com/",
            bgCol: "bg-orange-200",
          },
          {
            logo: Css,
            language: "CSS3",
            level: "Advance",
            url: "https://www.css3.com/",
            bgCol: "bg-slate-400",
          },
          {
            logo: Bootstrap,
            language: "Bootstrap",
            level: "Advance",
            url: "https://getbootstrap.com/",
            bgCol: "bg-purple-300",
          },
          {
            logo: Tailwind,
            language: "Tailwind",
            level: "Advance",
            url: "https://tailwindcss.com/",
            bgCol: "bg-sky-200",
          },
          {
            logo: React,
            language: "React Js",
            level: "Intermediate",
            url: "https://reactjs.org/",
            bgCol: "bg-cyan-100",
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
