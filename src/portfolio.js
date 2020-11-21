import ProfilePicture from "./images/about.jpg";
import ProjectImage1 from "./images/works/1.jpg";
import ProjectImage2 from "./images/works/2.jpg";
import ProjectImage3 from "./images/works/3.jpg";
import ProjectImage4 from "./images/works/4.jpg";
import ProjectImage5 from "./images/works/5.jpg";
import ProjectImage6 from "./images/works/6.jpg";

//Header Section
const profile = {
  userName: "Mir Habib Ul Latif",
  image: ProfilePicture,
};
const userInfo = {
  userTag: ["Mir Habib Ul Latif", "A Full Stack Developer", "An Arsenal Fan"],
  cvLink: "",
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
    link: "https://stackoverflow.com/users/2432289/mirsahib",
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
  { class: "", link: "/#", title: "Node", tag: ".node" },
  { class: "", link: "/#", title: "React", tag: ".react" },
  { class: "", link: "/#", title: "Bash", tag: ".django" },
  { class: "", link: "/#", title: "Laravel", tag: ".laravel" },
];

const project = [
  {
    tag: ["node"],
    link: "",
    img_src: ProjectImage1,
    catagory: "Design",
    title: "Alpha Corp",
  },
  {
    tag: ["react", "django"],
    link: "",
    img_src: ProjectImage2,
    catagory: "Web devolopment",
    title: "E commerce site",
  },
  {
    tag: ["django"],
    link: "",
    img_src: ProjectImage3,
    catagory: "Web development",
    title: "Social Network",
  },
  {
    tag: ["laravel"],
    link: "",
    img_src: ProjectImage4,
    catagory: "Web Development",
    title: "Airlines Ticketing System",
  },
  {
    tag: ["node", "react"],
    link: "",
    img_src: ProjectImage5,
    catagory: "Desktop Application",
    title: "Task Manager",
  },
  {
    tag: ["django", "react"],
    link: "",
    img_src: ProjectImage6,
    catagory: "Web Development + Machine Learning",
    title: "Chat Bot",
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
