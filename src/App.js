import React from 'react';
import Navbar from './Layout/Navbar/NavBar';
import './App.css';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import WhatsappIcon from './Layout/Whatsapp/WhatsappIcon';

const App = () => {
  return (
    <div className='relative overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-600'>
      
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      </div>

      <div className='relative mx-8'>
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
}

export default App;
