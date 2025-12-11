import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import currency from "../assets/projectImg/currency.png";
import expense from "../assets/projectImg/expense.png";
import todo from "../assets/projectImg/todo.png";
import weather from "../assets/projectImg/weather.png";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    img: currency,
    title: "Currency Converter",
    desc: "I created a Currency Converter using React.js, Tailwind CSS, and a live currency pricing API. Fully responsive for mobile, tablet, and laptop.",
    link: "https://hamidrza0008.github.io/Currency-Converter/",
  },
  {
    img: expense,
    title: "Expense Tracker",
    desc: "Fully responsive Expense Tracker using React.js and Tailwind CSS with add, edit, delete features. Improves state management skills.",
    link: "https://hamidrza0008.github.io/Expense-Tracker/",
  },
  {
    img: todo,
    title: "To-Do App",
    desc: "Responsive To-Do app built with React.js and Tailwind CSS. Add, edit, delete tasks, reusable components.",
    link: "https://hamidrza0008.github.io/To-Do-App/",
  },
  {
    img: weather,
    title: "Weather App",
    desc: "Weather app using React.js & Tailwind CSS. Shows live weather data via APIs, fully responsive across devices.",
    link: "https://hamidrza0008.github.io/Weather-App/",
  },
];

export default function Projects() {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset", // <-- animate again on scroll back
          },
        }
      );
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(containerRef.current[index], {
      scale: 1.05,
      rotation: 3,
      boxShadow: "0 0 20px rgba(255,165,0,0.6)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(containerRef.current[index], {
      scale: 1,
      rotation: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      className="w-full bg-black text-white scroll-mt-20 px-4 sm:px-6 md:px-20 overflow-hidden py-10"
      id="projects"
    >
      <h1 className="text-3xl md:mx-auto md:w-fit text-center sm:text-left pt-5 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent px-3 font-bold">
        Projects
      </h1>
      <p className="text-white md:mx-auto md:w-fit md:text-center text-center sm:text-left pt-2 max-w-2xl mx-auto sm:mx-0">
        Explore my portfolio of responsive and interactive web applications that showcase my skills in React, Tailwind, and modern web development.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 mx-auto max-w-6xl">
        {projectsData.map((proj, index) => (
          <div
            key={index}
            ref={(el) => (containerRef.current[index] = el)}
            className="project-card bg-white/10 h-fit backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center transition-all duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-orange-400 mt-3 text-center">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-300 text-center mt-1">{proj.desc}</p>
            <a
              className="hover:text-blue-500 text-center mt-2"
              href={proj.link}
              target="_blank"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
