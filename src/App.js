import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Infinitecarousel from "./components/Infintecarousel";
import PrivacyPolicy from "./components/PrivacyPolicy";
import FooterPrivacyPolicy from "./components/FooterPrivacyPolicy";



const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <HeroSection />
      </section>
      <Intro />
    </>
  );
};

const HomeNav = () => {
  return (
    <>
      <Home/>
      <Infinitecarousel />
      <About/>
      <Features />
      <Founder />
      <Contact />
      <Footer />
    </>
  );
};

const PrivacyPolicyNav = () => {
  return (
    <>
      {/* <Navbar/> */}
      <PrivacyPolicy/>
      <FooterPrivacyPolicy/>
    </>
  );
};

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicyNav />} />
          <Route path="/" element={<HomeNav />} />
        </Routes>
    </Router>
  );
};

export default App;
