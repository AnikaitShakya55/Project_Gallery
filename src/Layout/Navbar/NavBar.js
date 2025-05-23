import React, { useState } from "react";
import logo from "../../Assests/a-logo-removebg-preview.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { icon: <IoHomeOutline size={24} />, label: "Home", href: "#home" },
    { icon: <GrProjects size={24} />, label: "Projects", href: "#projects" },
    {
      icon: <MdOutlineContactPhone size={24} />,
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-14" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center text-black transition-transform duration-200 hover:scale-110 hover:text-blue-600"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-black focus:outline-none hover:text-blue-600 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Overlay - closes menu when clicked */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Side Drawer (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col items-center gap-10 pt-20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:text-blue-400"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
