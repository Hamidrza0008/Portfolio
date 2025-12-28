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
    // Floating animation (constant)
    gsap.to(floatRef.current, {
      y: -50,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Left text animation (repeats on scroll)
    gsap.set(leftRef.current, { opacity: 0, x: -100 });
    gsap.to(leftRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 90%",
        toggleActions: "restart none restart none", // repeat every scroll
        invalidateOnRefresh: true
      }
    });

    // Right image animation (repeats on scroll)
    gsap.set(rightRef.current, { opacity: 0, x: 100 });
    gsap.to(rightRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 90%",
        toggleActions: "restart none restart none", // repeat every scroll
        invalidateOnRefresh: true
      }
    });
  }, []);

  return (
    <div id="home" className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:pl-44 overflow-hidden">

      {/* LEFT SIDE TEXT */}
      <div ref={leftRef} className="text-white md:mr-6 max-w-xl space-y-2 md:space-y-4 pt-24 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h4 className="text-lg">Hi, I am</h4>
        <h3 className="text-3xl md:text-4xl font-semibold">Hamid Rza</h3>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent md:whitespace-nowrap md:w-[400px]">
          <TypeWriter text="Frontend Developer" speed={100} />
        </h1>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
          <button
            className="bg-orange-600 text-white cursor-pointer h-10 w-32 rounded-3xl hover:bg-orange-700"
            onClick={() => document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
          </button>

          <button
            className="bg-orange-600 text-white cursor-pointer h-10 w-32 rounded-3xl hover:bg-orange-700"
            onClick={() => window.open(`${import.meta.env.BASE_URL}Hamid-cv.pdf`, '_blank')}
          >
            Download CV
          </button>

        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-start gap-6 mt-4 ml-4">
          <a href="https://www.instagram.com/hamid___0008" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:text-pink-600 transition transform hover:scale-110">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/name/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-700 transition transform hover:scale-110">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Hamidrza0008" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-3xl hover:text-white transition transform hover:scale-110">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Experience Box */}
        <div className="flex flex-col sm:flex-row items-center w-fit sm:w-[420px] px-6 py-2 mt-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-orange-600 transition space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-orange-600">Fresher</h1>
            <h1 className="text-gray-300 text-sm">Experience</h1>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-left border-t sm:border-t-0 sm:border-l border-gray-500 pt-2 sm:pt-0 sm:pl-6">
            <h1 className="text-2xl font-bold text-orange-600">10+</h1>
            <h1 className="text-gray-300 text-sm">Projects</h1>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FLOATING IMAGES */}
      <div ref={rightRef} className="relative z-20 pt-20 hidden overflow-hidden md:block md:pl-20">
        <div ref={floatRef} className="relative" id="profile2">
          <img className="absolute -z-10 h-[600px]" src={bgImg} alt="bg" />
          <img className="h-140 w-200 opacity-2" src={circleImg} alt="circle-bg" />
          <img className="h-80 absolute top-30 rounded-full left-60" src={profileImg} alt="profile" />
        </div>
      </div>

    </div>
  );
}
