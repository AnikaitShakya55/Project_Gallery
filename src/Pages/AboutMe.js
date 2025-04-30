import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import myImg from "../Assests/akshxar.jpeg";
import HtmlIcon from "../Assests/html.png";
import reactIcon from "../Assests/atom.png";
import cssIcon from "../Assests/css-3.png";
import javaIcon from "../Assests/js.png";
import nextIcon from "../Assests/nextjs.png";
import bootStrapIcon from "../Assests/bootStrap.png";
import nodeIcon from "../Assests/nodejs.png";
import tailwindIcon from "../Assests/tailwind.png";
import muiIcon from "../Assests/muiLogo.png";
import envIcon from "../Assests/envLogo.png";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div className="flex-col min-h-screen mx-40 mt-10">
      <div className="text-center p-10 flex-col">
        <h2 className="inline-block text-4xl font-rubik py-5 px-9 text-white bg-slate-500 bg-opacity-25 rounded-lg font-semibold md:py-5">
          ANIKAIT SHAKYA
        </h2>

        <h3 className="text-lg font-bold my-8">
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

        <p className="text-1xl text-white font-source-code-pro">
          Innovative Full Stack developer with deep knowledge of React.js, HTML,
          CSS, JavaScript, TypeScript and node js. Skilled in designing and
          implementing responsive web applications with a focus on performance
          and user experience. Experienced in utilizing Bootstrap and other
          frameworks to build visually appealing interfaces. Currently enhancing
          backend development skills to support a full-stack development
          approach and drive project efficiency.
        </p>
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

      <section className="lg:flex h-auto rounded-lg gap-20">
        <div className="text-left shadow-lg p-10 my-10 bg-slate-500 bg-opacity-25 rounded-xl flex-1">
          <h1 className="text-3xl font-extrabold">Education</h1>

          <p className="text-1xl pt-3">
            Indian Institute of Technology and Management Jan 2019 - Dec 2022
          </p>

          <p className="text-1xl pt-3">
            Sumeet Rahul Goel Memorial Senior Secondary School Jul 2017 - May
            2018
          </p>
        </div>

        <div className="text-left shadow-lg p-10 my-10 bg-slate-500 bg-opacity-25 rounded-xl flex-1">
          <h1 className="text-3xl font-extrabold">Language Skills</h1>

          <p className="text-1xl pt-3">Hindi - Native</p>

          <p className="text-1xl pt-3">English - Intermediate</p>
        </div>
      </section>

      <section className="flex-col bg-slate-500 bg-opacity-25 p-5 my-10 rounded-lg max-w-screen-lg mx-auto">
        <div className="flex justify-center gap-16 mt-5 mb-10">
          <h1 className="text-6xl font-extrabold">SKILLS</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-16">
          <img
            src={HtmlIcon}
            className="h-8 transition-transform duration-150 hover:scale-75 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="HTML Icon"
          />
          <img
            src={cssIcon}
            className="h-12 transition-transform duration-150 hover:scale-125 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="CSS Icon"
          />
          <img
            src={javaIcon}
            className="h-12 transition-transform duration-150 hover:scale-75 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="Java Icon"
          />
          <img
            src={reactIcon}
            className="h-12 transition-transform duration-150 hover:scale-125 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="React Icon"
          />
          <img
            src={nextIcon}
            className="h-12 transition-transform duration-150 hover:scale-75 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="Next.js Icon"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-16 mt-8">
          <img
            src={nodeIcon}
            className="h-12 transition-transform duration-150 hover:scale-125 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="node Icon"
          />
          <img
            src={bootStrapIcon}
            className="h-12 transition-transform duration-150 hover:scale-75 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="Bootstrap Icon"
          />
          <img
            src={tailwindIcon}
            className="h-12 transition-transform duration-150 hover:scale-125 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="Tailwind CSS Icon"
          />
          <img
            src={muiIcon}
            className="h-12 transition-transform duration-150 hover:scale-75 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="MUI Icon"
          />
          <img
            src={envIcon}
            className="h-12 transition-transform duration-150 hover:scale-125 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            alt="Environment Icon"
          />
        </div>
      </section>

      <section className="flex flex-col bg-slate-500 bg-opacity-25 p-8 mb-12 rounded-2xl max-w-5xl mx-auto shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-8 tracking-wide">
          Technical Skills
        </h1>

        <div className="space-y-6 text-gray-700 text-base sm:text-sm md:text-lg ">
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
            <strong className="text-blue-100">Language:</strong> Python
          </p>

          <p className="text-sm text-white font-source-code-pro">
            <strong className="text-blue-100">Project-specific Skills:</strong>{" "}
            Form Handling, State Persistence, React Hooks, React Router, RESTful
            API Design, Signup and Authentication, Real-Time Database, Custom
            Hooks, Cart Functionality, Firebase (Backend)
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
