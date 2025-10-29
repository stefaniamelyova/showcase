"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import SplitText from "./SplitText";
import BalloonDog3D from "./BalloonDog3D";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation finished!");
  };

  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-start justify-start bg-black pl-8 pr-7 pt-40 "
    >
      {/* left side */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row  gap-5">
        <div className="md:w-2/5 w-full">
          <SplitText
            text="Stefania Alberto"
            className="text-8xl font-extrabold  text-white mr-200"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="flex flex-col md:w-1/3 w-full text-2xl font-medium text-white self-center mt-15">
            <h2>Student</h2>
            <h2>Designer</h2>
            <h2>Developer</h2>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-3/5 w-full mr-8">
          <BalloonDog3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
