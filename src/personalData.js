// Form Spree API Key Should be in Env Files

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

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
  ResumePath: "src/assets/Srinath_Resume.pdf",
  ResumeDownloadFileName: "Srinath_Resume.pdf",
  ProjectsData: [
    {
      name: "Weather pulse",
      description:
        "Get real-time weather updates and forecasts with our user-friendly weather app.",
      image: "src/assets/Project-logo.png?height=300&width=400",
      projectLink: "https://master.d3csghc0js9fax.amplifyapp.com/",
      githubUrl: "https://github.com/chitha-srinath?tab=repositories",
    },
    {
      name: "Split bills app",
      description:
        "Effortlessly split bills, track expenses with friends using our app.",
      image: "src/assets/Project-logo-1.webp?height=300&width=400",
      projectLink: "https://master.d3ed5p5d1uz9w.amplifyapp.com/",
      githubUrl: "https://github.com/chitha-srinath?tab=repositories",
    },
    {
      name: "Inventory app",
      description:
        "Streamline your inventory tracking and management with our intuitive app.",
      image: "src/assets/Project-logo.png?height=300&width=400",
      projectLink: "https://staging.d2oskg4us4kfei.amplifyapp.com/",
      githubUrl: "https://github.com/chitha-srinath/Inventory-backend",
    },
  ],
  ExperienceDetails: [
    {
      title: "Software Engineer",
      company: "IConcept Software Services Pvt Ltd",
      period: "Feb 2023 - Present",
      logo: "./src/assets/iconcept-logo.png?height=50&width=50",
      responsibilities: [
        "I became proficient in developing and debugging robust RESTful APIs using Node.js.",
        "Played an important role in company projects like AgriPortal, MapOut Analytics, and NeoPmc.",
        "Collaborated closely with mobile and frontend teams to align API functionalities with application requirements.",
        "Contributed to improving coding standards and implementing best practices across the team.",
      ],
    },
    {
      title: "Mern Stack Course",
      company: "10x Academy",
      period: "Jun 2022 - Dec 2022",
      logo: "./src/assets/10x-academy-logo.png?height=50&width=50",
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
      progress: 75,
      icon: FaJs,
      color: "#f7df1e",
      code: "const greet = (name) => {\n  console.log(`Hello, ${name}!`);\n};",
    },
    {
      name: "React",
      progress: 80,
      icon: FaReact,
      color: "#61dafb",
      code: "function App() {\n  return <h1>Hello, React!</h1>;\n}",
    },
    {
      name: "Node.js",
      progress: 85,
      icon: FaNodeJs,
      color: "#68a063",
      code: "const http = require('http');\nhttp.createServer((req, res) => {\n  res.end('Hello, Node.js!');\n}).listen(3000);",
    },
    {
      name: "Express.js",
      progress: 90,
      icon: FaServer,
      color: "#000000",
      code: "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Hello, Express!');\n});",
    },
    {
      name: "MongoDB",
      progress: 85,
      icon: FaDatabase,
      color: "#4db33d",
      code: "db.collection('users').insertOne({\n  name: 'John Doe',\n  email: 'john@example.com'\n});",
    },
    {
      name: "TypeScript",
      progress: 75,
      icon: FaCode,
      color: "#007acc",
      code: "interface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: 'Alice',\n  age: 30\n};",
    },
  ],
};
