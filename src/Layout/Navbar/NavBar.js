import React from "react";
import logo from "../../Assests/a-logo-removebg-preview.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg- bg-opacity-90 z-50 flex items-center justify-between py-2 px-4 mb-5">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20" />
      </div>

      <div className="m-8 flex items-center gap-8 text-2xl">
        <a href="#home">
          {" "}
          <IoHomeOutline className=" transition-transform duration-150 hover:scale-150" />{" "}
        </a>
        <a href="#projects">
          {" "}
          <GrProjects className="transition-transform duration-150 hover:scale-150" />{" "}
        </a>
        <a href="#contact">
          {" "}
          <MdOutlineContactPhone className="transition-transform duration-150 hover:scale-150" />{" "}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
