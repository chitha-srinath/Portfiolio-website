// Form Spree API Key Should be in Env Files

import { FaJs, FaReact, FaNodeJs, FaServer, FaDatabase, FaCode, FaPython } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiNestjs,SiNginx,SiMongodb,SiExpress, SiRabbitmq, SiFlask} from "react-icons/si";

export const personalData = {
  Name: "Srinath Reddy",
  FullName: "Chitha Sai Srinath Reddy ",
  Email: "chithasaireddy@gmail.com",
  PhoneNumber: "+91-7879796084",
  LinkedInUrl: "https://www.linkedin.com/in/srinathchitha",
  TwitterUrl: "https://x.com/chitha_srinath",
  GithubUrl: "https://github.com/chitha-srinath?tab=repositories",
  WhatsAppUrl:
    "https://api.whatsapp.com/send/?phone=%2B917879796084&text=Hi&type=phone_number&app_absent=0",
  ResumePath: "https://drive.google.com/file/d/1OtDHcx7xwgE1ytUnhwReNknhnmFsPL64/view?usp=sharing",
  ResumeDownloadFileName: "Srinath_Resume.pdf",
  ProjectsData: [
    {
      name: "Weather pulse",
      description:
        "Get real-time weather updates and forecasts with our user-friendly weather app.",
      image: "https://res.cloudinary.com/navcloudin/image/upload/v1732550677/WeatherPulseScreen.png",
      projectLink: "https://weather-pulse-gamma.vercel.app/",
      githubUrl: "https://github.com/chitha-srinath?tab=repositories",
    },
    {
      name: "Split the bills app",
      description:
        "Effortlessly split bills, track expenses with friends using our app.",
      image: "https://res.cloudinary.com/daxjgy2bv/image/upload/v1732430424/uolm17v44alz6uagw1fa.png",
      projectLink: "https://billsplittingapp-one.vercel.app/",
      githubUrl: "https://github.com/chitha-srinath?tab=repositories",
    },
    {
      name: "Inventory Management and Billings",
      description:
        "Streamline your inventory tracking and management and billings with our app.",
      image: "https://res.cloudinary.com/navcloudin/image/upload/v1732550721/InventoryAppScreen.png",
      projectLink: "https://inventory-app-ten-ruby.vercel.app/",
      githubUrl: "https://github.com/chitha-srinath/Inventory-backend",
    },
  ],
  ExperienceDetails: [
    {
      title: "Software Engineer",
      company: "IConcept Software Services Pvt Ltd",
      period: "Feb 2022 - Present",
      logo: "https://res.cloudinary.com/daxjgy2bv/image/upload/v1732430424/snhci7jhx44oorldcy7w.png",
      responsibilities: [
        "I became proficient in developing and debugging robust RESTful APIs using Node.js.",
        "Played an important role in company projects like AgriPortal, MapOut Analytics, and NeoPmc.",
        "Collaborated closely with mobile and frontend teams to align API functionalities with application requirements.",
        "Contributed to improving coding standards and implementing best practices across the team.",
      ],
    },
    {
      title: "Mern Stack Web Development Bootcamp",
      company: "10x Academy",
      period: "Jun 2021 - Jan 2022",
      logo: "https://res.cloudinary.com/daxjgy2bv/image/upload/v1732430425/uvkuxwpi2isrdccaxywn.png",
      responsibilities: [
        "Start learning Mern stack around still Time",
        "Learned and created mini projects around frontend devs using Javascript, React",
        "Getting start with backend technologies like Nodejs, expressjs",
        "Become handly with using MongoDB database",
      ],
    },
  ],
  SkillsData: [
    {
      name: "JavaScript",
      progress: 85,
      icon: FaJs,
      color: "#f7df1e",
    },
    {
      name: "TypeScript",
      progress: 85,
      icon: FaCode,
      color: "#007acc",
    },
    {
      name: "Python",
      progress: 75,
      icon: FaPython,
      color: "#4584b6",
     
    },
    {
      name: "Node Js",
      progress: 85,
      icon: FaNodeJs,
      color: "#68a063",
    },
    {
      name: "Express Js",
      progress: 90,
      icon: SiExpress,
      color: "#000000",
    },
    {
      name: "React Js",
      progress: 75,
      icon: FaReact,
      color: "#61dafb",
    },
    {
      name: "MongoDB",
      progress: 85,
      icon: SiMongodb,
      color: "#4db33d",
    },
    {
      name: "Nest Js",
      progress: 75,
      icon: SiNestjs,
      color: "#E92747",
    },
    {
      name: "Nginx",
      progress: 85,
      icon: SiNginx,
      color: "#009900",
     
    },
    {
      name: "Flask",
      progress: 75,
      icon: SiFlask,
      color: "#FFFFFF",
     
    },
    {
      name: "Redis Cache",
      progress: 85,
      icon: DiRedis,
      color: "#D82C20",
     
    },
    {
      name: "Rabbit MQ",
      progress: 75,
      icon: SiRabbitmq,
      color: "#f60",
     
    },
    ,
  ],
};
