import React, { useEffect, useState, useRef } from 'react';
import logo from "../assets/JackLogo.png"

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0); // Use a ref to persist lastScrollY value

  const handleScroll = () => {
    if (window.scrollY < lastScrollY.current) {
      // Scrolling up
      setShowNavbar(true);
    } else {
      // Scrolling down
      setShowNavbar(false);
    }
    lastScrollY.current = window.scrollY; // Update the ref
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Dynamically adjust padding for the body or first section
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
      <nav id="navbar" className={`fixed top-0 left-4 w-full transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"} mb-20 flex items-center justify-between bg-opacity-70 backdrop-blur-md shadow-md z-50`}>
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16 mt-2" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-8 text-xl">
        <a href="#home" className="hover:text-blue-500">
          Home
        </a>
        <a href="#about" className="hover:text-blue-500">
          About Me
        </a>
        <a href="#tech" className="hover:text-blue-500">
          Tech
        </a>
        <a href="#experience" className="hover:text-blue-500">
          Experiences
        </a>
        <a href="#project" className="hover:text-blue-500">
          Projects
        </a>
        <a href="#achievement" className="hover:text-blue-500">
          Achievements
        </a>
        <a href="#goal" className="hover:text-blue-500">
          Goals
        </a>
        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
