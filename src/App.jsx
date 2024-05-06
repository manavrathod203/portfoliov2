import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div  className="bg-[#e8e8e3] min-h-screen text-white overflow-hidden">
      <Navbar />
      <Hero />
      <div data-scroll data-scroll-speed={0.1} className="">
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
