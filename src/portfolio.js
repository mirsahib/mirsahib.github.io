import ProfilePicture from "./images/about.jpg";
import ProjectImage1 from "./images/works/react-weather-app.jpg";
import ProjectImage2 from "./images/works/react-task-manager.png";
import ProjectImage3 from "./images/works/react-serverless-authentication.png";
import ProjectImage4 from "./images/works/dpdc-bill-manager.jpg";

//Header Section
const profile = {
  userName: "Mir Habib Ul Latif",
  image: ProfilePicture,
};
const userInfo = {
  userTag: ["Mir Habib Ul Latif", "A Full Stack Developer", "An Arsenal Fan"],
  cvLink:
    "https://github.com/mirsahib/mirsahib.github.io/raw/main/.github/CV/My_CV.pdf",
  userShortBio: "",
};

// About Section
const social = [
  {
    link: "https://www.facebook.com/mirsahib24/",
    icon: "mdi mdi-facebook",
  },
  { link: "https://github.com/mirsahib", icon: "mdi mdi-github-circle" },
  {
    link: "https://stackoverflow.com/users/2432289/mirsahib?tab=profile",
    icon: "mdi mdi-stackoverflow",
  },
  {
    link: "https://www.reddit.com/user/mirsahib",
    icon: "mdi mdi-reddit",
  },
];

const aboutMe = [
  {
    para: "I love programming, reading, traveling, and watching arsenal win.",
  },
  {
    para:
      "I like building awesome software. I've built websites, automation script and desktop application! If you are interested, you can view some of my favorite projects in my portfolio section,read my medium article to get cool tips and tricks or follow me in the social media given below ",
  },
];

// Freelance Section
const EmploymentStatus = false;
const hireMeLink = "";

// Work Section
const workDescription = "Talk is cheap show me the code : Linus Torvaldo";

const workLinkAndTag = [
  { class: "active", link: "/#", title: "All", tag: "*" }, //for all work
  //{ class: "", link: "/#", title: "Node", tag: ".node" },
  { class: "", link: "/#", title: "JAM-Stack", tag: ".JAM" },
  { class: "", link: "/#", title: "Automation & Scrapping", tag: ".scrape" },
];

const project = [
  {
    tag: ["JAM"],
    link: "https://github.com/mirsahib/React-Weather-App",
    img_src: ProjectImage1,
    catagory: "Front-End Application",
    title: "React Weather App",
  },
  {
    tag: ["JAM"],
    link: "https://github.com/mirsahib/React-Task-Manager",
    img_src: ProjectImage2,
    catagory: "Front-End Application",
    title: "React Task Manager",
  },
  {
    tag: ["JAM"],
    link: "https://github.com/mirsahib/React-Serverless-Authentication",
    img_src: ProjectImage3,
    catagory: "Front-End Application",
    title: "Serverless-Authentication-Service",
  },
  {
    tag: ["scrape"],
    link: "https://github.com/mirsahib/DPDC-Bill-Manager",
    img_src: ProjectImage4,
    catagory: "Automation & Scrapping",
    title: "DPDC Bill Manager",
  },
];

//Medium Article Section
const mediumId = "@mirsahib24";
const mediumMsg =
  "Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without loosing something : Richard Stallman";

//Contact Section
const contact = {
  cell: "",
  email: "mirsahib24@gmail.com",
  office: "",
};
const contactMsg = "Have a question or want to work with me";

export {
  profile,
  userInfo,
  social,
  aboutMe,
  EmploymentStatus,
  hireMeLink,
  workDescription,
  workLinkAndTag,
  project,
  mediumId,
  contact,
  contactMsg,
  mediumMsg,
};
