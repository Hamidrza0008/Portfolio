import React, { useRef, useEffect } from "react";
import bg from "../assets/img/bg.png";
import circle from "../assets/img/circle.png";
import profile from "../assets/img/profile.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const floatRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Floating animation
    gsap.to(floatRef.current, {
      y: -50,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Left section slide-in
    gsap.set(leftRef.current, { opacity: 0, x: -100 });
    gsap.to(leftRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true, // ensures proper trigger on resize
      }
    });

    // Right section slide-in
    gsap.set(rightRef.current, { opacity: 0, x: 100 });
    gsap.to(rightRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true,
      }
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full scroll-mt-14 px-4 sm:px-6 md:px-20" id="about">
      <h1 className="text-3xl md:mx-auto md:w-fit text-center sm:text-left pt-5 fire-text bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent px-3 font-bold">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around mt-8 md:mt-12 space-y-8 md:space-y-0">

        {/* LEFT IMAGE SECTION */}
        <div ref={leftRef} className="relative z-20 hidden md:block">
          <div ref={floatRef} className="relative" id="profile2">
            <img className="absolute -z-10 h-[600px]" src={bg} alt="bg" />
            <img className="h-140 w-200 opacity-2" src={circle} alt="circle-bg" />
            <img className="h-80 absolute top-28 rounded-full left-55" src={profile} alt="profile" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div ref={rightRef} className="w-full md:w-2xl px-2 md:px-4 space-y-6 text-center md:text-left">
          <p className="leading-6 font-sans">
            An enthusiastic B.Tech student from Chhatrapati Shivaji Maharaj University (CSMU), Navi Mumbai, who has built a strong foundational skillset in HTML, CSS, and JavaScript.
          </p>

          <p className="leading-6 font-sans">
            I am currently mastering REACT to develop modern, interactive, and highly responsive User Interfaces (UIs).
          </p>

          <p className="leading-6 font-sans">
            I am driven by a passion for clean, efficient code and continuous learning. With this focused dedication, I am well-prepared and eager to contribute as an Entry-Level FRONT END DEVELOPER.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
            <button className="bg-orange-600 text-white h-10 w-28 rounded-3xl hover:bg-orange-700"
              onClick={() => {
                document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
              }}>
              Hire Me
            </button>

            <button className="bg-orange-600 text-white h-10 w-28 rounded-3xl hover:bg-orange-700" onClick={() => window.open('/Hamid-cv.pdf', '_blank')}>
              Download CV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
