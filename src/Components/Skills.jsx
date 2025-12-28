import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import tailwind from "../assets/img/tailwind.svg";
import gsapLogo from "../assets/img/gsap.png";

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".skill-card");

    const animateIn = () => {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.85, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
          stagger: 0.12,
        }
      );
    };

    const animateOut = () => {
      gsap.set(cards, { opacity: 0, scale: 0.85, y: 60 });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateIn(); // 🔥 har baar enter pe
        } else {
          animateOut(); // 🔥 exit pe reset
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="skills"
      ref={containerRef}
      className="bg-black w-full scroll-mt-10 px-4 sm:px-6 md:px-20 py-10"
    >
      <h1 className="text-3xl text-center pt-5 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold">
        Skills
      </h1>

      <p className="text-white text-center pt-2 max-w-2xl mx-auto">
        I have acquired essential skills that empower me to create and build
        professional, functional, and visually appealing websites.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 max-w-6xl mx-auto">
        <Skill icon="fa-html5" label="HTML5" />
        <Skill icon="fa-css3-alt" label="CSS" />
        <Skill icon="fa-js" label="JAVASCRIPT" />
        <Skill icon="fa-react" label="REACT" />
        <SkillImg img={tailwind} label="TAILWIND" />
        <Skill icon="fa-python" label="PYTHON" />
        <SkillImg img={gsapLogo} label="GSAP" />
        <Skill icon="fa-github" label="GIT & GITHUB" />
        <Skill icon="fa-brain" label="AI" solid />
      </div>
    </div>
  );
}

/* 🔹 Reusable components */
const Skill = ({ icon, label, solid }) => (
  <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center rounded-2xl space-y-3 border border-transparent hover:border-orange-500 transition-all duration-200">
    <i
      className={`fa-${solid ? "solid" : "brands"} ${icon} fa-2x text-orange-500`}
    ></i>
    <h1 className="text-orange-500">{label}</h1>
  </div>
);

const SkillImg = ({ img, label }) => (
  <div className="skill-card h-36 bg-[#1b1b1b] flex flex-col items-center justify-center rounded-2xl space-y-3 border border-transparent hover:border-orange-500 transition-all duration-200">
    <img src={img} className="h-10 invert" />
    <h1 className="text-orange-500">{label}</h1>
  </div>
);
