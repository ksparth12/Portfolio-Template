import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

import RippleButton from "./RippleButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import VariableProximity from "./ui/VariableProximity";
import Loader from "./ui/Loader";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Trigger animation immediately on mount
    setIsVisible(true);
  }, []);

  const renderSplitText = (text: string) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className="inline-block transition-all duration-700 ease-out bg-gradient-to-r from-blue-400 via-purple to-blue-400 bg-clip-text text-transparent"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(32px)",
          transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div ref={containerRef} className="flex justify-center relative my-20 z-10 px-4 sm:px-6">
        <div className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col md:flex-row items-center justify-center gap-8 mx-auto">
          {/* Left side - Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-3/5 animate-fadeIn">
            <div className="mb-6">
              <div className="inline-block relative">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  {renderSplitText("Hi I'm Naitik")}
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple mt-2 rounded-full animate-fadeIn"></div>
              </div>
            </div>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-8 mb-6 animate-fadeIn">
              <VariableProximity
                label="Full-stack MERN developer crafting scalable web applications. Expert in Express.js, React, and Node.js with passion for seamless user experiences."
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 700, 'opsz' 40"
                containerRef={containerRef}
                radius={120}
                falloff="linear"
                className="text-gray-300 variable-proximity"
              />
            </div>

            <div className="flex justify-center md:justify-start gap-4 animate-fadeIn">
              <a href="https://drive.google.com/file/d/1H-IGWIjmslCcx9QX6jQdS6UXYpcPE0Ch/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <RippleButton
                  title="Resume"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a href="#contact">
                <RippleButton
                  title="Get in touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>

          {/* Right side - Animated Loader */}
          <div className="md:w-2/5 flex justify-center items-center animate-fadeIn">
            <div className="relative">
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
