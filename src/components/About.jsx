import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { personalData } from "../personalData";

const About = () => {
  return (
    <Element
      name="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about%20me%20pages%20background%20image.jpg-CP9TLltHhns9caHMCN134XxCtKKhLq.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 md:text-5xl text-green-400">
          {`<h1>`} About Me {`</h1>`}
        </h2>
        <div className="flex items-center justify-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-lg p-6 font-mono">
              <pre className="text-gray-300 whitespace-pre-wrap">
                <span className="text-gray-500">{"<p>"}</span>

                <div className="text-2xl font-bold mb-4 text-[#00ffff]">
                  Hello World!
                </div>

                <div className="mb-4">
                  My name is{" "}
                  <span className="text-yellow-400">
                    {personalData.FullName}
                  </span>{" "}
                  and I specialize in web developement that utilizes
                  technologies like{" "}
                  <span className="text-[#00ffff]">NodeJs</span>,{" "}
                  <span className="text-[#00ffff]">MongoDB</span>,{" "}
                  <span className="text-[#00ffff]">ExpressJS</span>, and{" "}
                  <span className="text-[#00ffff]">React</span> etc.
                </div>

                <div className="mb-4">
                  I am a dedicated Full Stack Developer with 3 years of hands-on
                  experience specializing in backend development, where I
                  designed and implemented efficient RESTful APIs to support
                  seamless application functionality
                </div>

                <div className="mb-4">
                  {/* When I'm not coding, I am <span className="text-[#00ffff]">writing bolgs</span>, reading, or picking up some new hands-on art project like{" "}
                  <span className="text-[#00ffff]">photography</span>. */}
                  In my free time, I enjoy exploring new technologies, enhancing
                  my coding skills, and staying updated with the latest industry
                  trends.
                </div>

                <div className="mb-4">
                  I also find time to engage in personal development activities
                  and occasionally experiment with creative projects that
                  challenge my problem-solving abilities.
                </div>

                <span className="text-gray-500">{"</p>"}</span>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default About;
