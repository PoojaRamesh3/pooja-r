import { DiJavascript } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiLeetcode,
  SiGmail,
} from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import Pooja_R from "./assets/Pooja-R.jpeg";
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
import TypeScript from "./assets/typescript.png";
import HubSpot from "./assets/hubSpot.png";
import Sass from "./assets/sass.png";
import WordPress from "./assets/wordpress.png";
import NodeJs from "./assets/node.png";
import AspDotNET from "./assets/dotNet.png";
import Postgre from "./assets/postgre.png";
import MangoDB from "./assets/mangoDb.png";
import Sql from "./assets/sql.png";
import Git from "./assets/git.png";
import GitHub from "./assets/github.png";
import GitLab from "./assets/gitlab.png";
import Aws from "./assets/aws.png";
import Project1 from "./assets/project1.PNG";
import Project2 from "./assets/project2.PNG";
import Project3 from "./assets/project3.PNG";
import PythonCertificate from "./assets/python.jpeg";
import AwsCertificate from "./assets/aws_devops.jpeg";

export const content = {
  brandname: "Pooja R",
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
      listname: "Certificates",
      url: "/certificates",
    },
    {
      listname: "Experiences",
      url: "/experiences",
    },
  ],
  home: {
    heading: "Hello, I'm Pooja R!",
    paragraph: [
      {
        content:
          "A software developer with two years of professional experience in the industry. My passion for technology and problem-solving has driven me to excel in various aspects of software development.",
      },
      {
        content:
          "Over the past two years, I have honed my skills in full-stack web development, working with both front-end and back-end technologies.",
      },
      {
        content:
          "I am passionate about staying up-to-date with the latest trends in the software development field and continuously improving my skills. I am a proactive problem-solver.",
      },
      {
        content:
          "Here, you can find my personal projects, technologies I like working with or the skills I own...",
      },
    ],

    profile: Pooja_R,
  },
  skills: {
    heading: "Skills",
    subheading:
      "Some of the tools and technologies that I know and enjoy working with.",
    tabs: [
      {
        tab: "Languages",
        color: "bg-sky-200",
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
        color: "bg-sky-300",
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
            logo: Sass,
            language: "Sass",
            level: "Advance",
            url: "https://sass-lang.com/",
            bgCol: "bg-pink-200",
          },
          {
            logo: React,
            language: "React Js",
            level: "Intermediate",
            url: "https://reactjs.org/",
            bgCol: "bg-cyan-100",
          },
          {
            logo: TypeScript,
            language: "TypeScript",
            level: "Intermediate",
            url: "https://www.typescriptlang.org/",
            bgCol: "bg-blue-300",
          },
          {
            logo: WordPress,
            language: "WordPress",
            level: "Intermediate",
            url: "https://wordpress.com/",
            bgCol: "bg-blue-200",
          },
          {
            logo: HubSpot,
            language: "HubSpot",
            level: "Advance",
            url: "https://www.hubspot.com/products/crm",
            bgCol: "bg-orange-500",
          },
        ],
      },
      {
        tab: "Backend Development",
        color: "bg-sky-400",
        img: <IoLogoNodejs style={{ width: "25px", height: "25px" }} />,
        info: [
          {
            logo: NodeJs,
            language: "NodeJs",
            level: "Intermediate",
            url: "https://nodejs.org/en/docs",
            bgCol: "bg-lime-200",
          },
          {
            logo: AspDotNET,
            language: "ASP.NET Core",
            level: "Intermediate",
            url: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0",
            bgCol: "bg-cyan-200",
          },
          {
            logo: Postgre,
            language: "PostgreSQL",
            level: "Intermediate",
            url: "https://www.postgresql.org/",
            bgCol: "bg-cyan-600",
          },
          {
            logo: Sql,
            language: "MySQL",
            level: "Intermediate",
            url: "https://www.mysql.com/",
            bgCol: "bg-orange-300",
          },
          {
            logo: MangoDB,
            language: "MongoDB",
            level: "Beginner",
            url: "https://www.mongodb.com/",
            bgCol: "bg-green-300",
          },
        ],
      },
      {
        tab: "DevOps",
        color: "bg-sky-500",
        img: <BsGit style={{ width: "25px", height: "25px" }} />,
        info: [
          {
            logo: Git,
            language: "Git",
            level: "Advance",
            url: "https://git-scm.com/",
            bgCol: "bg-orange-200",
          },
          {
            logo: GitHub,
            language: "Github",
            level: "Advance",
            url: "http://github.com/",
            bgCol: "bg-slate-400",
          },
          {
            logo: GitLab,
            language: "GitLab",
            level: "Advance",
            url: "https://gitlab.com/",
            bgCol: "bg-orange-300",
          },
          {
            logo: Aws,
            language: "AWS",
            level: "Beginner",
            url: "http://aws.amazon.com/",
            bgCol: "bg-orange-300",
          },
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    subheading:
      "Here is a quick list of some of the projects I have worked on.",
    projectslist: [
      {
        name: "Text Utilizer",
        proimg: Project1,
        prolink: "https://poojaramesh3.github.io/text-utilizer-react-app/",
        gitlink: "https://github.com/PoojaRamesh3/text-utilizer-react-app",
      },
      {
        name: "Naming Ideas",
        proimg: Project2,
        prolink: "https://poojaramesh3.github.io/naming-ideas/",
        gitlink: "https://github.com/PoojaRamesh3/naming-ideas",
      },
      {
        name: "NewsLetter SignIn",
        proimg: Project3,
        prolink: "https://tame-ruby-ladybug-coat.cyclic.app/",
        gitlink: "https://github.com/PoojaRamesh3/News-Letter-SignUp",
      },
    ],
  },
  certificates: {
    heading: "Certificates",
    subheading: "Here are some of the online certificates I own.",
    certiList: [
      {
        certiImg: PythonCertificate,
        certiTitle: "The Python Programming",
        certidate: new Date("2020-10-21"),
      },
      {
        certiImg: AwsCertificate,
        certiTitle: "Azure DevOps & AWS DevOps",
        certidate: new Date("2020-10-15"),
      },
    ],
  },
  experiences: {
    heading: "Experience",
    subheading: "",
  },
  footer: {
    conclusion: "Developed by Pooja R using :",
    icons: [
      {
        icon: <RiReactjsLine style={{ width: "25px", height: "25px" }} />,
        name: "React JS",
        url: "https://reactjs.org/",
      },
      {
        icon: <SiTypescript style={{ width: "20px", height: "25px" }} />,
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
      },
      {
        icon: <SiTailwindcss style={{ width: "25px", height: "25px" }} />,
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
      },
    ],
    socialicons: [
      {
        icon: <SiGmail style={{ width: "25px", height: "25px" }} />,
        name: "Email",
        url: "mailto:pooja.ramesh331@gmail.com",
      },
      {
        name: "GitHub",
        icon: <BsGithub style={{ width: "25px", height: "25px" }} />,
        url: "https://github.com/PoojaRamesh3",
      },
      {
        name: "LinkedIn",
        icon: <AiFillLinkedin style={{ width: "25px", height: "25px" }} />,
        url: "https://www.linkedin.com/in/pooja--r/",
      },
      {
        name: "LeetCode",
        icon: <SiLeetcode style={{ width: "25px", height: "25px" }} />,
        url: "https://leetcode.com/PoojaRamesh3/",
      },
    ],
  },
};
