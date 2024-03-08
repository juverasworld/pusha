import { BrowserRouter } from "react-router-dom";
import { FaBehance, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { fadeIn, textVariant } from "./utils/motion";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"
import { AnimatePresence } from "framer-motion";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";
import Home  from "./components/home";

const App = () => {

  const containerRef = useRef(null);

  return (
    <BrowserRouter>
    <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
        <ScrollTriggerProxy/>

        <AnimatePresence>

          <main className="App" data-scroll-container ref={containerRef}>
     <Home/>
     <div className="h-[100vh] w-[100vw]"></div>
          </main>
        </AnimatePresence>
        </LocomotiveScrollProvider>
      
    </BrowserRouter>
  );
};

export default App;
