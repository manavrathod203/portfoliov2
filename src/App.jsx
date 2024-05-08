import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import toast, { Toaster } from "react-hot-toast";
import links from "./data/Links";


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-[#e8e8e3] min-h-screen text-white overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop:'10vh',
          },
        }}
      />

      <Navbar />
      <Hero links={links} />
      <div data-scroll data-scroll-section data-scroll-speed={0.05}>
        <Skills />
        <Projects />
        <About links={links} />
        <Contact />
      </div>
      <Footer links={links} />
    </div>
  );
}

export default App;
