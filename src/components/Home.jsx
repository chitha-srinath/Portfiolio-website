import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { personalData } from "../personalData";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
      "Tech Enthusiast",
    ],
    loop: 0,
  });

  return (
    <Element
      name="home"
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:ml-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {personalData?.Name}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              <span>{text}</span>
              <Cursor cursorColor="green" />
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {/* <button className="bg-green-500 text-white px-6 py-2 rounded-full transition-transform hover:scale-105" onClick={() => window.open(personalData?.ResumePath, "_blank")}>
                View Resume
              </button>
              <button
                className="border border-white text-white px-6 py-2 rounded-full transition-transform hover:scale-105"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = personalData?.ResumePath;
                  link.download = personalData?.ResumeDownloadFileName; // Change the file name if needed
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button> */}

              <button
                className="bg-green-500 text-white px-6 py-2 rounded-full transition-transform hover:scale-105"
                onClick={() => window.open(personalData?.LinkedInUrl, "_blank")}
              >
                Hire me
              </button>
              <button
                className="border border-white text-white px-6 py-2 rounded-full transition-transform hover:scale-105"
                onClick={() => window.open(personalData?.ResumePath, "_blank")}
              >
                View Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right SVG */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://img.freepik.com/free-vector/man-sitting-desktop-pc-computer-screen_3446-328.jpg"
              alt="Developer Illustration"
              className="w-full h-auto max-w-[600px] mx-auto mix-blend-lighten"
            />
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
