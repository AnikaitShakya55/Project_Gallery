import React from "react";
import Navbar from "./Layout/Navbar/NavBar";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";
import WhatsappIcon from "./Layout/Whatsapp/WhatsappIcon";

const App = () => {
  return (
    <div className=" w-full relative overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-600">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      </div>

      <div className="relative">
        <Navbar />

        <section id="home">
          <AboutMe />
        </section>

        <section id="projects">
          <HomePage />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <footer>
          <WhatsappIcon />
        </footer>
      </div>
    </div>
  );
};

export default App;
