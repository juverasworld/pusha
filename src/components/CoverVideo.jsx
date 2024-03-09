import React from "react";
import styled, { keyframes } from "styled-components";

import { motion } from "framer-motion";
import MainVideo from "../assets/hero.mp4";
import RoundedTextBlack from "../assets/Rounded-Text-black.png";

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

  background-color: rgba(0, 0, 0, 0.9);
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
  
  }
`;
const Box = styled.div`
  width: 75%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
100%{
  transform:rotate(1turn);
}
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  background:white;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  };
  @media (max-width: 48em) {
  
    right: 1rem;
  
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.themefontxl};

  @media (max-width: 64em) {
  width:2rem;
  height:2rem;
  font-size: ${(props) => props.themefontlg};


  
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
      staggerChildren: 0.3,
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
        <div className="flex justify-start items-start  mt-32 text-[5vw] font-bold whitespace-normal ">
          {/* <motion.h1 data-scroll data-scroll-speed="4">Wier</motion.h1> */}

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            CREATIVITY
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.9"
            data-scroll-speed="4"
          >
            TOPS
          </motion.h1>
        </div>
        <motion.h1
          variants={item}
          data-scroll
          data-scroll-delay="0.06"
          data-scroll-speed="4"
          className="w-[20vw] -mt-[5%] flex justify-start items-start  text-[5vw] font-bold"
        >
        RELIABLE
        </motion.h1>

        <div className="flex flex-col justify-end items-end text-[5vw] font-bold my-4">

        <motion.h2
          className=""
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
            
          GAME 
        </motion.h2>
        <motion.h2
          className="-mt-[4%]"
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
            
       DEVELOPMENT
        </motion.h2>
        <motion.h2
          className="-mt-[4%]"
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
            
          STUDIO
        </motion.h2>
        </div>
      <div className="">

      <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundedTextBlack} alt="NFT" className="" />
        </Round>
        <div className="hello">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facere ea. Minima sapiente delectus repellendus repudiandae, doloribus maxime esse! Porro ea dolore earum inventore dignissimos totam ipsum cum vero?</div>
      </div>

      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
