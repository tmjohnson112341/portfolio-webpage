import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import AnimatedCursor from "react-animated-cursor"
import 'aos/dist/aos.css';

const Layout = () => {
  return (
    <div className='layout'>
    <div class='background-animate'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <AnimatedCursor
      z-index={1}
    />
     
    </div>
    </div>
  )
}

export default Layout