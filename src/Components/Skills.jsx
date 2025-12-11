import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tailwind from "../assets/img/tailwind.svg";
import gsapLogo from "../assets/img/gsap.png";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
  const cards = containerRef.current.querySelectorAll(".skill-card");

  cards.forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.8, rotation: -5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse", // repeat smoothly
          // markers: true, // debugging ke liye
        },
      }
    );
  });
}, []);


  return (
    <div className="bg-black w-full px-4 sm:px-6 md:px-20 py-10" id="skills">
      <h1 className="text-3xl text-center pt-5 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold">
        Skills
      </h1>

      <p className="text-white text-center pt-2 max-w-2xl mx-auto">
        I have acquired essential skills that empower me to create and build
        professional, functional, and visually appealing websites.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 max-w-6xl mx-auto"
      >
        {/* HTML */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-brands fa-html5 fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">HTML5</h1>
        </div>

        {/* CSS */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-brands fa-css3-alt fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">CSS</h1>
        </div>

        {/* JS */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-brands fa-js fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">JAVASCRIPT</h1>
        </div>

        {/* React */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-brands fa-react fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">REACT</h1>
        </div>

        {/* Tailwind */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <img src={tailwind} className="h-8 w-20 invert" />
          <h1 className="text-orange-500">TAILWIND</h1>
        </div>

        {/* Python */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-brands fa-python fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">PYTHON</h1>
        </div>

        {/* GSAP */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <img src={gsapLogo} className="h-16 invert" />
          <h1 className="text-orange-500">GSAP</h1>
        </div>

        {/* GitHub */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-brands fa-github fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">GIT & GITHUB</h1>
        </div>

        {/* AI */}
        <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center 
                        rounded-2xl space-y-3 border border-transparent 
                        hover:border-orange-500 transition-all duration-200">
          <i className="fa-solid fa-brain fa-2x text-orange-500"></i>
          <h1 className="text-orange-500">AI</h1>
        </div>
      </div>
    </div>
  );
}
