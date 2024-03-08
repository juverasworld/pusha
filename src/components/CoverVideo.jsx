import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MainVideo from "../assets/hero.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
//   align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

 
  h2 {
    // font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const conatiner = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 2,
     staggerChildren:0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={conatiner} initial="hidden" animate="show">
     
      
     
        <div className="flex flex-col items-start justify-start font-bold text-[4vw] border-3 w-[300px]" >
          {/* <motion.h1 data-scroll data-scroll-speed="4">Wier</motion.h1> */}

          

          <motion.span   variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
          CREATIVE
          </motion.span>
          <motion.span variants={item} data-scroll data-scroll-delay="0.9" data-scroll-speed="4">
            AND
          </motion.span>
          
          <motion.h1 className="block flex flex-col items-start justify-start font-bold text-[4vw]" variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
          RELIABLE
          </motion.h1>
        </div>
         
        <motion.h2 className="flex items-end justify-end"  variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          Inspire. Create. Believe
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
