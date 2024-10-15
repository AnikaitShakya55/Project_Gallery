import React from 'react';
import styles from './NavBar.module.css'; // Import the CSS module
import ProfileCard from '../Profile/ProfileCard';
import logo from '../../Assests/a-logo-removebg-preview.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";





const Navbar = () => {
  return (
    // <nav className={styles.navbar}>
    //   <ul className={styles.navLinks}>
    //     <li>
    //       <a className={styles.navLink} href="#home">Home</a>
    //     </li>
    //     <li>
    //       <a className={styles.navLink} href="#contact">Contact</a>
    //     </li>
    //     <li>
    //       <a className={styles.navLink} href="#about">About Me</a>
    //     </li>
    //   </ul>
    //   <div className={styles.ProfileCard}>
    //     <ProfileCard />
    //   </div>
    // </nav>
      
<nav className='fixed top-0 left-0 w-full bg- bg-opacity-90 z-50 flex items-center justify-between py-2 px-4 mb-5'>

    <div className='flex flex-shrink-0 items-center'>
      <img src={logo} alt='logo' className='h-20'  />
    </div>

    <div className='m-8 flex items-center gap-8 text-2xl'>
    <a href='#home'> <IoHomeOutline className=" transition-transform duration-150 hover:scale-150"/> </a> 
    <a href='#projects'> <GrProjects className="transition-transform duration-150 hover:scale-150"   /> </a>
    <a href='#contact'>  <MdOutlineContactPhone className="transition-transform duration-150 hover:scale-150"  /> </a>

    </div>

   

    </nav>

  );
}

export default Navbar;
