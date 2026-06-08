import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import tailwind from "../assets/img/tailwind.svg";
import gsapLogo from "../assets/img/gsap.png";

const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { label: "HTML5", icon: "fa-html5" },
      { label: "CSS3", icon: "fa-css3-alt" },
      { label: "JavaScript", icon: "fa-js" },
      { label: "React.js", icon: "fa-react" },
      { label: "Next.js", icon: "fa-globe", solid: true },
      { label: "Tailwind CSS", img: tailwind },
      { label: "GSAP", img: gsapLogo },
      { label: "Redux Toolkit", icon: "fa-gear" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { label: "MySQL", icon: "fa-database", solid: true },
      { label: "REST APIs", icon: "fa-server", solid: true },
    ],
  },
  {
    category: "Tools & Core Concepts",
    items: [
      { label: "Git & GitHub", icon: "fa-github" },
      { label: "JWT Auth", icon: "fa-shield-halved", solid: true },
      { label: "AI Tools", icon: "fa-brain", solid: true },
    ],
  },
];

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".skill-card");

    const animateIn = () => {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.85, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.5)",
          stagger: 0.05,
        }
      );
    };

    const animateOut = () => {
      gsap.set(cards, { opacity: 0, scale: 0.85, y: 40 });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateIn();
        } else {
          animateOut();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="skills"
      ref={containerRef}
      className="bg-black w-full scroll-mt-20 px-4 sm:px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold inline-block pb-2">
          Skills & Tech Stack
        </h1>
        <p className="text-white text-center pt-3 max-w-2xl mx-auto text-sm sm:text-base opacity-90">
          I have acquired essential skills that empower me to create and build
          professional, functional, and visually appealing web applications.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {skillsData.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-300 border-l-4 border-orange-500 pl-3 tracking-wide">
              {group.category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.items.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="skill-card group h-32 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center rounded-2xl gap-3 border border-white/10 transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                >
                  {skill.img ? (
                    <img
                      src={skill.img}
                      alt={skill.label}
                      className="h-8 w-8 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 invert"
                    />
                  ) : (
                    <i
                      className={`fa-${skill.solid ? "solid" : "brands"} ${skill.icon} text-2xl text-orange-500/80 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300`}
                    ></i>
                  )}
                  <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-orange-400 transition-colors duration-300 text-center px-2">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}