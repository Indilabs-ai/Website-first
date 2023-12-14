import React from "react";
import "../App.css";
import { Link } from "react-scroll";
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
            <img
              src="./img/indilabs-white.png"
              alt="indilabs.ai"
              className="indilabs-white"
            />
          </div>
          <p className="footer-about-caption">
            Pioneering Precision in Risk Mitigation and Collections through
            Unified Data Excellence.
          </p>
          {/* <p className='footer-about-mail'>info@indilabs.ai</p> */}
        </div>
        <div className="footer-nav-about">
          <p className="footer-nav-heading">About Us</p>
          <ul className="footer-nav-content">
            <li>
              <Link>Our Product</Link>
            </li>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            {/* <li>Contact us</li> */}
          </ul>
        </div>
        <div className="footer-nav-about">
          <p className="footer-nav-heading">Contact us</p>
          <ul className="footer-nav-content">
            <li>
              Have questions or inquiries? Reach out to us for assistance and
              support.
            </li>
            <li style={{ paddingTop: "15px" }}>info@indilabs.ai</li>
          </ul>
        </div>
        <div className="footer-nav-social">
          <div className="social-media">
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
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright @ 2023 Company All rights Reserved
      </div>
    </>
  );
};

export default Footer;
