import React from "react";
import "../App.css";
import { Link } from "react-scroll";
import { HashRouter as Router } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";

import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer-wrapper">
        <div className="footer-about">
          <div className="footer-about-logo">
            <Link to="nav" smooth={true} duration={800}>
              <img
                src="./img/indilabs-white.png"
                alt="indilabs.ai"
                className="indilabs-white"
              />
            </Link>
          </div>
          <p className="footer-about-caption">
            Pioneering Precision in Risk Mitigation and Collections through
            Unified Data Excellence.
          </p>
          {/* <p className='footer-about-mail'>info@indilabs.ai</p> */}
        </div>
        <div className="footer-nav-about">
          <Link
            to="about"
            smooth={true}
            duration={800}
          >
            <p className="footer-nav-heading">About Us</p>
          </Link>
          <ul className="footer-nav-content">
            <li>
              <Link to="our-product" smooth={true} duration={800}>Our Product</Link>
            </li>
            <li>
              <Link to="features" smooth={true} duration={800}>Features</Link>
            </li>
            <li>
              <a href="/privacy-policy" className="footer-nav-link">Privacy Policy</a>
            </li>
            {/* <li>Contact us</li> */}
          </ul>
        </div>
        <div className="footer-nav-about">
          <p className="footer-nav-heading">Contact us</p>
          <ul className="footer-nav-content">
            <li className="contact-info">
              Have questions or inquiries? Reach out to us for assistance and
              support.
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="mailto:info@indilabs.ai" className="email-link">info@indilabs.ai</a>

            </li>
            <li>
              <p><a href="tel:+919618111778" className="phone-link">+91 9618111778</a></p>
            </li>
          </ul>
        </div>
        <div className="footer-nav-social">
          {/* <div className="social-media">

            <div className="social-icon">
              <Facebook />
            </div>
            <div className="social-icon">
              <Instagram />
            </div>
            <div className="social-icon">
              <FaXTwitter />
            </div>
            <div className="social-icon">
              <Linkedin />
            </div>
          </div> */}
          <a
            href="https://www.linkedin.com/company/indilabs-ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/linkedin-bnw.png" className="linkedin"></img>
          </a>

        </div>
      </div>
      <div className="footer-copyright">
        Copyright @ 2023 Company All rights Reserved
      </div>
    </>
  );
};

export default Footer;
