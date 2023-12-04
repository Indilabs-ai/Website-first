import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src = "./img/Logo-black.png" alt="Indilabs.ai" className="logo-black"></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="home" smooth={true}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true}>About</Link>
            </li>
            <li>
              <Link to="our-product" smooth={true}>Our Product</Link>
            </li>
            <li>
              <Link to="features" smooth={true}>Features</Link>
            </li>
            <li>
              <Link to="contact" smooth={true}><button>Contact Us</button></Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)} className="hamburger-icon">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
    </>
  );
};

export default Navbar;
