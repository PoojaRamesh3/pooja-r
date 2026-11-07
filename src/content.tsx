import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
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
    { listname: "Home", url: "#top" },
    { listname: "About", url: "#about" },
    { listname: "Skills", url: "#skills" },
    { listname: "Experience", url: "#experience" },
    { listname: "Projects", url: "#projects" },
    // { listname: "Certificates", url: "#certificates" },
    { listname: "Contact", url: "#contact" },
  ],
  hero: {
    eyebrow: "Senior Frontend Engineer · 10+ years",
    greeting: "Hi, I'm Pooja R",
    lines: ["I design & build", "fast, accessible,", "delightful web apps."],
    roles: [
      "Frontend Architect",
      "React & TypeScript Specialist",
      "Design-System Builder",
      "Performance Obsessive",
    ],
    sub: "A decade of crafting products used by thousands — from pixel-perfect interfaces to scalable full-stack systems.",
  },
  stats: [
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 40, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "+", label: "Engineers mentored" },
    { value: 98, suffix: "", label: "Avg. Lighthouse score" },
  ],
  about: {
    heading: "About me",
    paragraphs: [
      "I'm a frontend-focused software engineer with over ten years of experience turning complex requirements into clean, performant and accessible products. I've worked across startups and large teams, owning everything from architecture decisions to the last micro-interaction.",
      "My sweet spot is React and TypeScript, backed by solid full-stack skills in Node.js and ASP.NET Core. I care deeply about design systems, web performance, testing and developer experience — and I enjoy mentoring teams so quality scales with the codebase.",
    ],
    highlights: [
      {
        title: "Architecture",
        text: "Scalable component libraries, micro-frontends and design systems.",
      },
      {
        title: "Performance",
        text: "Core Web Vitals tuning, code splitting and lean bundles.",
      },
      {
        title: "Accessibility",
        text: "WCAG-minded UI that works for everyone, on every device.",
      },
      {
        title: "Leadership",
        text: "Code reviews, mentoring and pragmatic technical direction.",
      },
    ],
  },
  skills: {
    heading: "Skills & Technologies",
    subheading: "The tools I reach for to ship great products.",
    groups: [
      {
        title: "Frontend",
        items: [
          { name: "React", logo: React, pct: 95 },
          { name: "TypeScript", logo: TypeScript, pct: 92 },
          { name: "JavaScript", logo: JavaScript, pct: 96 },
          { name: "HTML5", logo: Html, pct: 98 },
          { name: "CSS3", logo: Css, pct: 96 },
          { name: "Tailwind", logo: Tailwind, pct: 94 },
          { name: "Sass", logo: Sass, pct: 90 },
          { name: "Bootstrap", logo: Bootstrap, pct: 90 },
        ],
      },
      {
        title: "Backend & Data",
        items: [
          { name: "Node.js", logo: NodeJs, pct: 80 },
          { name: "ASP.NET Core", logo: AspDotNET, pct: 75 },
          { name: "C#", logo: CSharp, pct: 75 },
          { name: "PostgreSQL", logo: Postgre, pct: 75 },
          { name: "MySQL", logo: Sql, pct: 75 },
          { name: "MongoDB", logo: MangoDB, pct: 60 },
        ],
      },
      {
        title: "Languages",
        items: [
          { name: "C++", logo: Cpp, pct: 85 },
          { name: "C", logo: C, pct: 70 },
          { name: "Python", logo: Python, pct: 55 },
        ],
      },
      {
        title: "Tooling & CMS",
        items: [
          { name: "Git", logo: Git, pct: 95 },
          { name: "GitHub", logo: GitHub, pct: 95 },
          { name: "GitLab", logo: GitLab, pct: 92 },
          { name: "AWS", logo: Aws, pct: 55 },
          { name: "WordPress", logo: WordPress, pct: 75 },
          { name: "HubSpot", logo: HubSpot, pct: 88 },
        ],
      },
    ],
  },
  experiences: {
    heading: "Experience",
    subheading: "A decade of building and leading frontend work.",
    // NOTE: placeholder companies & details — replace with your real history.
    list: [
      {
        role: "Senior Frontend Engineer / Tech Lead",
        company: "Company Name",
        period: "2021 — Present",
        points: [
          "Lead a team of 6 engineers building a React + TypeScript platform serving thousands of daily users.",
          "Created a shared design system and component library that cut UI delivery time by ~40%.",
          "Improved Core Web Vitals across key pages, raising Lighthouse scores to 95+.",
        ],
        tags: ["React", "TypeScript", "Redux", "Tailwind", "Jest"],
      },
      {
        role: "Frontend Engineer",
        company: "Company Name",
        period: "2018 — 2021",
        points: [
          "Owned the customer-facing web app from redesign to launch, collaborating closely with design and product.",
          "Introduced automated testing and CI pipelines, reducing production regressions significantly.",
          "Mentored junior developers through code reviews and pairing.",
        ],
        tags: ["React", "JavaScript", "Sass", "Node.js", "GitLab CI"],
      },
      {
        role: "Full-Stack Developer",
        company: "Company Name",
        period: "2016 — 2018",
        points: [
          "Built responsive websites and internal tools with ASP.NET Core, SQL databases and modern JavaScript.",
          "Delivered HubSpot and WordPress solutions that improved lead capture and marketing workflows.",
        ],
        tags: ["ASP.NET Core", "C#", "MySQL", "HubSpot", "WordPress"],
      },
    ],
  },
  projects: {
    heading: "Selected Projects",
    subheading: "A few things I've built and shipped.",
    projectslist: [
      {
        name: "Text Utilizer",
        description:
          "A handy React toolkit for transforming, analysing and cleaning text in real time.",
        tags: ["React", "Bootstrap"],
        proimg: Project1,
        prolink: "https://poojaramesh3.github.io/text-utilizer-react-app/",
        gitlink: "https://github.com/PoojaRamesh3/text-utilizer-react-app",
      },
      {
        name: "Naming Ideas",
        description:
          "A creative name generator that helps spark ideas for products, pets and projects.",
        tags: ["JavaScript", "CSS"],
        proimg: Project2,
        prolink: "https://poojaramesh3.github.io/naming-ideas/",
        gitlink: "https://github.com/PoojaRamesh3/naming-ideas",
      },
      {
        name: "Newsletter Sign-Up",
        description:
          "A full-stack newsletter subscription flow built with Node.js and a mailing-list API.",
        tags: ["Node.js", "Express", "API"],
        proimg: Project3,
        prolink: "https://tame-ruby-ladybug-coat.cyclic.app/",
        gitlink: "https://github.com/PoojaRamesh3/News-Letter-SignUp",
      },
    ],
  },
  certificates: {
    heading: "Certificates",
    subheading: "Continuous learning, validated.",
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
  contact: {
    heading: "Let's build something great",
    text: "Open to senior and lead frontend roles, consulting and interesting collaborations. My inbox is always open.",
    email: "pooja.ramesh331@gmail.com",
    // Put your PDF in the project's /public folder with this exact name.
    resumeUrl: "/Pooja-R-Resume.pdf",
    // Optional: paste a Formspree (or similar) endpoint, e.g. "https://formspree.io/f/xxxxxxxx".
    // Leave empty to fall back to opening the visitor's email app.
    formEndpoint: "",
    socials: [
      {
        name: "Email",
        icon: <SiGmail size={22} />,
        url: "mailto:pooja.ramesh331@gmail.com",
      },
      {
        name: "GitHub",
        icon: <BsGithub size={22} />,
        url: "https://github.com/PoojaRamesh3",
      },
      {
        name: "LinkedIn",
        icon: <AiFillLinkedin size={24} />,
        url: "https://www.linkedin.com/in/pooja--r/",
      },
      {
        name: "LeetCode",
        icon: <RiInstagramLine size={22} />,
        url: "https://www.instagram.com/poojaramesh__",
      },
    ],
  },
  footer: {
    conclusion:
      "Designed & built by Pooja R with React, TypeScript & Tailwind CSS",
  },
};
