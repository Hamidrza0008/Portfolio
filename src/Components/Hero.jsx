import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./typewriter.css";

import bgImg from "../assets/img/bg.png";
import circleImg from "../assets/img/circle.png";
import profileImg from "../assets/img/profile.jpeg";
import TypeWriter from "./TypeWriter";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const floatRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.to(floatRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.set(leftRef.current, { opacity: 0, y: 30 });
    gsap.to(leftRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 95%",
        toggleActions: "restart none restart none",
        invalidateOnRefresh: true
      }
    });

    gsap.set(rightRef.current, { opacity: 0, scale: 0.95 });
    gsap.to(rightRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 95%",
        toggleActions: "restart none restart none",
        invalidateOnRefresh: true
      }
    });
  }, []);

  return (
    <div id="home" className="w-full min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-16 lg:pl-32 lg:pr-16 py-4 sm:py-8 lg:py-0 overflow-hidden gap-6 lg:gap-0">
      
      <div ref={leftRef} className="text-white max-w-2xl space-y-3 lg:space-y-6 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-2 lg:order-1 z-30 w-full mt-[-20px] lg:mt-0">
        <h4 className="text-sm sm:text-lg tracking-wider text-gray-400 uppercase font-medium">Hi, I am</h4>
        <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Hamid Rza</h3>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent min-h-[36px] sm:min-h-[60px] whitespace-nowrap">
          <TypeWriter text="Full-Stack Developer" speed={100} />
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-1 sm:pt-2">
          <button
            className="w-full sm:w-36 h-11 sm:h-12 font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:opacity-90 cursor-pointer text-sm sm:text-base"
            onClick={() => document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
          </button>

          <button
            className="w-full sm:w-40 h-11 sm:h-12 font-semibold bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors duration-300 cursor-pointer text-sm sm:text-base"
            onClick={() => window.open(`${import.meta.env.BASE_URL}Hamid_Rza_Resume.pdf`, '_blank')}
          >
            Download CV
          </button>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-5 pt-1">
          <a href="https://www.instagram.com/hamid___0008" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-xl sm:text-2xl hover:text-pink-500 transition-all duration-300 hover:scale-110">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/name/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-xl sm:text-2xl hover:text-blue-500 transition-all duration-300 hover:scale-110">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Hamidrza0008" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-xl sm:text-2xl hover:text-white transition-all duration-300 hover:scale-110">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="flex items-center w-full max-w-[420px] p-3 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] text-left mt-2">
          <div className="w-1/2 px-3 sm:px-4">
            <h1 className="text-xl sm:text-2xl font-black text-orange-500">Fresher</h1>
            <h1 className="text-neutral-400 text-[10px] sm:text-sm font-medium uppercase tracking-wider mt-0.5">Experience</h1>
          </div>
          <div className="w-1/2 px-3 sm:px-4 border-l border-white/10">
            <h1 className="text-xl sm:text-2xl font-black text-orange-500">10+</h1>
            <h1 className="text-neutral-400 text-[10px] sm:text-sm font-medium uppercase tracking-wider mt-0.5">Projects</h1>
          </div>
        </div>
      </div>

      <div ref={rightRef} className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-none flex justify-center items-center aspect-square lg:w-[500px] order-1 lg:order-2 z-20 pt-4 sm:pt-8 lg:pt-0">
        <div ref={floatRef} className="relative w-full h-full flex justify-center items-center">
          <img className="absolute -z-10 w-[120%] lg:w-[130%] max-w-none opacity-30 lg:opacity-40 animate-pulse" src={bgImg} alt="bg" />
          <img className="w-full max-w-[280px] lg:max-w-[360px] opacity-10 lg:opacity-20" src={circleImg} alt="circle-bg" />
          <div className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-2 border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.2)]">
            <img className="w-full h-full object-cover" src={profileImg} alt="profile" />
          </div>
        </div>
      </div>

    </div>
  );
}