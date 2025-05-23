import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import myImg from "../Assests/akshxar.jpeg";
import { Typewriter } from "react-simple-typewriter";
import Experience from "../Components/About Page Data/ExperienceCard";
import EducationAndLanguage from "../Components/About Page Data/EducationAndLanguage";
import SkillsIcon from "../Components/About Page Data/SkillsIcon";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen  mt-10 px-3 sm:px-6 py-10">
      <div className="text-center px-3 sm:px-6 py-10 flex flex-col items-center">
        <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-rubik py-4 px-6 sm:px-8 md:px-9 text-white bg-slate-500 bg-opacity-25 rounded-lg font-semibold">
          ANIKAIT SHAKYA
        </h2>

        <h3 className=" w-[100%] h-8  text-base sm:text-lg font-bold my-6 sm:my-8">
          <Typewriter
            words={[
              "Hi! I'm an experienced Full Stack Engineer.",
              "I have in-depth knowledge of React.js.",
              "Hello! I'm a creative UI/UX Developer.",
              "Currently sharpening my backend development skills.",
              "Passionate about crafting dynamic web experiences.",
              "Designing intuitive, user-centric interfaces that inspire.",
              "Diving deeper into the world of backend technologies.",
            ]}
            loop={30}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>

        <>
          {/* Full text for non-mobile screens */}
          <p className="hidden sm:block text-sm sm:text-base text-white font-source-code-pro leading-loose text-justify max-w-3xl mx-auto px-4 sm:px-2">
            I'm an innovative Full Stack Developer with expertise in React.js,
            HTML, CSS, JavaScript, TypeScript, and Node.js. I specialize in
            building responsive, high-performance web applications with a focus
            on clean design and exceptional user experience. My experience
            includes leveraging Bootstrap and modern UI frameworks to create
            visually engaging interfaces. Currently, I'm sharpening my backend
            development skills to deliver robust full-stack solutions and drive
            project success.
          </p>

          {/* Short summary for mobile screens */}
          <p className="block sm:hidden text-sm text-white font-source-code-pro leading-relaxed max-w-3xl mx-auto px-4">
            I'm a Full Stack Developer skilled in React.js, Node.js, and UI
            frameworks. Passionate about building clean, responsive apps with
            great UX.
          </p>
        </>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3">
        <a
          href="https://github.com/AnikaitShakya55"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="transition-transform duration-200 hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/anikait-shakya-087790226/"
          target="_blank"
          rel="noopener noreferrer" // Added rel attribute
        >
          <FaLinkedin className="transition-transform duration-200 hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/imakshxar/"
          target="_blank"
          rel="noopener noreferrer" // Added rel attribute
        >
          <RiInstagramFill className="transition-transform duration-200 hover:scale-125" />
        </a>
      </div>

      <div className="my-5 text-sm flex justify-center">
        <img
          alt="my pic"
          src={myImg}
          className="text-center rounded-full w-70 h-80"
        />
      </div>

      {/* EXPERIENCE */}

      <Experience />

      {/* EDUCATION */}
      <EducationAndLanguage />

      {/* SKILLS ICON */}
      <SkillsIcon />

      {/* TECHNICAL SKILLS */}
      <section className="bg-slate-500 bg-opacity-25 p-2 md:p-12 my-12 rounded-2xl w-[95vw] md:w-[70vw] mx-auto font-sans text-gray-100 shadow-xl backdrop-blur-md border border-white/20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 tracking-wide">
          Technical Skills
        </h1>

        <div className="space-y-6 text-gray-700 text-base sm:text-sm md:text-lg">
          <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">Frontend:</strong> React.js,
            HTML5, CSS3, JavaScript (ES6+), TypeScript
          </p>

          <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">UI Frameworks:</strong> Bootstrap,
            Tailwind
          </p>

          <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">State Management:</strong> Context
            API, Redux
          </p>

          <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">Backend:</strong> Node.js,
            Express.js, RESTful APIs, MySQL2, MongoDB, JWT Authentication,
            Bcrypt, Nodemailer
          </p>

          <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">Language:</strong> Python
          </p>

          {/* <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">Project-specific Skills:</strong>{" "}
            Form Handling, State Persistence, React Hooks, React Router, RESTful
            API Design, Signup and Authentication, Real-Time Database, Custom
            Hooks, Cart Functionality, Firebase (Backend)
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
