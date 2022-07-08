import "./App.css";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
