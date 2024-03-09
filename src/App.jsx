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
import logo from "./assets/logo.svg"
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
     <marquee behavior="smooth" direction="right" className=" bg-slate-300 text-black flex">
<div className="flex items-center justify-center">

     <div className="flex mx-10">
      <p className="text-[7vw] mx-10"> EXPLORE OUR WORK </p>
      <img src={logo} className="w-auto " alt="" />
     </div>
     <div className="flex mx-10">
      <p className="text-[7vw] mx-10"> EXPLORE OUR WORK </p>
      <img src={logo} className="w-auto " alt="" />
     </div>
     <div className="flex mx-10">
      <p className="text-[7vw] mx-10"> EXPLORE OUR WORK </p>
      <img src={logo} className="w-auto " alt="" />
     </div>
</div>
     </marquee>
     <div className="flex ">
      <div className="uppercase text-orange-500 flex mr-10"> Our Portfolio $nbsp;</div>
      <div className="">recognizing each game’s uniqueness, we collaborate closely with our partners to deliver truly bespoke gaming experiences</div>
     </div>
          </main>
        </AnimatePresence>
        </LocomotiveScrollProvider>
      
    </BrowserRouter>
  );
};

export default App;
