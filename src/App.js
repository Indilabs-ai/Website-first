import './App.css';
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer';
import About from './components/About';
import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Intro from './components/Intro';
import Features from './components/Features';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <HeroSection/>
      </section>
      <Intro/>

    </>
  );
};

const AboutNav = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>The Business Of Lending Is Transforming.</h1>
        <p>Are your Collections capabilities keeping up?</p>
      </section>
    </>
  );
};

const ServiceNav = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <p>Sevices</p>
      </section>
    </>
  );
};

const ContactNav = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <p>Contact Us</p>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/service" element={<ServiceNav />} /> */}
        {/* <Route path="/feature" element={<FeatureNav />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About />
      <Features/>
      <Founder />
      <Contact />
      <Footer />
      
    </>
  </Router>
  );
};

export default App;
