import pdf from "./assets/tahavirdi_2years_SoftwareEngineer.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const header = {
  homepage: "https://github.com/tahavirdiwala/portfolio",
  title: "JS.",
};

const about = {
  name: "Taha Virdiwala",
  role: "JavaScript Developer",
  description:
    "I like building to build amazingapps, and learning new programming languages",
  resume: pdf,
  social: {
    linkedin: "https://www.linkedin.com/in/taha-virdiwala-830909221/",
    linkedinIcon: LinkedInIcon,
    github: "https://github.com/tahavirdiwala",
    icon: GitHubIcon,
  },
};

const projects = [
  {
    name: "Cyro WebApp",
    description:
      "Static fast webapp with some nice animations with the help of framer motion",
    stack: ["React", "Framer motion", "Css"],
    livePreview: "https://tahacyro.netlify.app/",
  },
  {
    name: "Todo App",
    description: "Todo App with crud functionalty",
    stack: ["React, Redux"],
    livePreview: "https://tahatodoapp.netlify.app/",
  },
  {
    name: "Calculator App",
    description: "Calculator web app",
    stack: ["React", "Css"],
    livePreview: "https://tahacalci.netlify.app/",
  },
];

const skills = [
  "Rust",
  "React",
  "Redux",
  "React Query",
  "TypeScript",
  "Nivo Chart",
  "Nodejs",
  "ExpressJs",
  "Mysql",
  "Mongo DB",
  "JavaScript",
  "Git",
  "GitLab",
  "HTML",
  "CSS",
];

const contact = {
  email: "tahavirdiwala97@gmail.com",
};

export { header, about, projects, skills, contact };
