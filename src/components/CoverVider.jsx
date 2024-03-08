import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const AnimatedDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const CoverVider = () => {
  useEffect(() => {
    const scrollDirection = () => {
      let lastScrollTop = 0;
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Downscroll code
        gsap.to(".page7-cir", {
          scrollTrigger: {
            trigger: ".page7-cir",
            start: "top center",
            end: "bottom top",
            scroller: "#main",
            scrub: 0.5
          },
          scale: 1.5
        });

        gsap.to(".page7-cir-inner", {
          scrollTrigger: {
            trigger: ".page7-cir-inner",
            start: "top center",
            end: "bottom top",
            scroller: "#main",
            scrub: 0.5
          },
          backgroundColor: "#0a3bce91"
        });
      } else {
        // Upscroll code
        gsap.to(".page7-cir", {
          scrollTrigger: {
            trigger: ".page7-cir",
            start: "top center",
            end: "bottom top",
            scroller: "#main",
            scrub: 0.5
          },
          scale: 1
        });

        gsap.to(".page7-cir-inner", {
          scrollTrigger: {
            trigger: ".page7-cir-inner",
            start: "top center",
            end: "bottom top",
            scroller: "#main",
            scrub: 0.5,
            pin: true,
            pinSpacer:true,
            pinType:"fixed"
          },
          backgroundColor: "transparent"
        });
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", scrollDirection);

    return () => {
      window.removeEventListener("scroll", scrollDirection);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="will-change: opacity, transform; opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d">
      <div id="page7">
        <div className="page7-cir">
          <div className="page7-cir-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default CoverVider;
