// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo" onClick={() => window.location.reload()}>
//         <img src="/images/logo.png" alt="Logo" />
//       </div>
//       <div className="navbar-menu">
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#why-use">Why Use</a></li>
//           <li><a href="#about-us">About Us</a></li>
//           <li><a href="#features">Features</a></li>
//         </ul>
//         <button className="btn-red">Red Button</button>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-logo" onClick={() => window.location.reload()}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className={`navbar-menu ${menuOpen ? 'mobile-menu' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#why-use">Why Use</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><button className="btn-red">Red Button</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
