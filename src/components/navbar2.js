import React, { useState, useEffect } from "react";
import "./navbar2.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
// import "./navbar.css"

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const closeMobileMenu = () => setShowMediaIcons(false);

  const handleClickOutside = (event) => {
    if (
      showMediaIcons &&
      !document.querySelector(".main-nav").contains(event.target)
    ) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    // Adding click event listener
    if (showMediaIcons) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMediaIcons]); // Dependency array ensures effect runs only when showMediaIcons changes

  return (
    <nav className="main-nav2">
      <Link to="/" className="title">
      <div className="logo">
          <img
            src="./img/Logo-black.png"
            alt="Indilabs.ai"
            className="logo-black"
          ></img>
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink  to="home"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink  to="about"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}>About</NavLink>
        </li>
        <li>
          <NavLink  to="our-product"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}>Our Product </NavLink>
        </li>
        <li>
          <NavLink to="features"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}>Features</NavLink>
        </li>
        <li>
          <NavLink to="contact"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}><button>Contact Us</button></NavLink>
        </li>
      </ul>

      
    </nav>
  );
};


export default Navbar2;

// <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }
//         >
//           <ul>
//             <li>
//             {/* <a className="button"> */}
//               <Link
//                 to="home"
//                 smooth={true}
//                 duration={800}
//                 onClick={closeMobileMenu}
//               >
//                 Home
//               </Link>
//             {/* </a> */}
//             </li>
//             <li>
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={800}
//                 onClick={closeMobileMenu}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="our-product"
//                 smooth={true}
//                 duration={800}
//                 onClick={closeMobileMenu}
//               >
//                 Our Product
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="features"
//                 smooth={true}
//                 duration={800}
//                 onClick={closeMobileMenu}
//               >
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={800}
//                 onClick={closeMobileMenu}
//               >
//                 <button>Contact Us</button>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="social-media">
//           {/* hamburget menu start  */}
//           <div className="hamburger-menu">
//             <a
//               href="#"
//               onClick={() => setShowMediaIcons(!showMediaIcons)}
//               className="hamburger-icon"
//             >
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>