import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  typescript,
  reactjs,
    tailwind,
  nodejs,
  mongodb,
   threejs,
   git,
  figma,
  carrent,
  jobit,

} from "../assets";

const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#hero',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
const services = [
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  
  
  {
    title: "Three.js Developer",
    icon: web,
  },
  
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];
const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const expCards = [
  {
    content : "UI/UX Design using figma",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "UI/UX Designer",
    date: "June 2024 - Present",
    responsibilities: [
      "Designing user interfaces and experiences that are intuitive, aesthetically pleasing, and user-centered.Creating wireframes, prototypes, and high-fidelity mockups to communicate design concepts effectively.Ensuring designs are responsive, accessible, and optimized for various devices and screen sizes.",

    ],
  },
  {
     content : "Full Stack Development" ,
    imgPath: ["/images/exp2.png"],
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2024 - Present",
    responsibilities: [
     "Developing and maintaining web applications using Node.js and other related technologies.Worked with backend engineers to integrate APIs seamlessly with the frontend.Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link :""
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link:""
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link:""
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link:""
  },
];
const projects = [
  {
    name: "Story Teller",
    description:
      "Web-based platform that allows users to read, listen to, and share their own stories, creating an interactive and engaging storytelling experience for all.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://storytellerb.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export {
  words,
  technologies,
  projects,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  services
};
