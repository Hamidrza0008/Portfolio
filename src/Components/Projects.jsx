import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import lotuscakesin from "../assets/projectImg/Lotus Cakes.png";
import ecommerce from "../assets/projectImg/e-Commerce.png";
import formbuilder from "../assets/projectImg/formbuilder.png";
import taskro from "../assets/projectImg/Taskro.png"

const projectsData = [
  {
    img: lotuscakesin,
    title: "Lotus Cakes",
    desc: "Lotus Cakes is a full-stack e-commerce web application developed for online cake ordering and management. The platform allows users to browse products, add items to the cart, place orders, and manage their accounts securely through authentication. An admin dashboard is provided for managing products, orders, and users. The project is built using Next.js, React.js, JavaScript, Tailwind CSS, MySQL, and JWT Authentication. The application is deployed on Vercel, while the MySQL database is hosted on Railway, ensuring reliable performance and scalability.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "MySQL", "JWT"],
    liveLink: "https://lotuscakesin.vercel.app/",
    codeLink: "https://github.com/Hamidrza0008",
  },
  {
    img: taskro,
    title: "Taskro - To do",
    desc: "Built a full-stack task management web app using Next.js, Tailwind CSS, MySQL, and APIs. It includes secure JWT-based authentication, user-specific task handling, and multiple pages. Users can perform CRUD operations, manage tasks date-wise, apply filters (all, done, undone), and track daily productivity scores.",
    tags: ["Next.js", "Tailwind CSS", "MySQL", "REST API"],
    liveLink: "https://taskro.vercel.app/",
    codeLink: "https://github.com/Hamidrza0008",
  },
  {
    img: ecommerce,
    title: "E-Commerce",
    desc: "Elite E-commerce platform built with React, Tailwind CSS, and Redux Toolkit. Features include secure Authentication (Login/Logout), Protected Routes, and dynamic State Management for Cart and Wishlist. Integrated with React Router for seamless navigation across multiple premium-designed pages for a high-performance experience.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    liveLink: "https://hamidrza0008.github.io/E-Commerce/",
    codeLink: "https://github.com/Hamidrza0008",
  },
  {
    img: formbuilder,
    title: "Form Builder",
    desc: "I built a Form Builder app using React with useState, useEffect, routing, and localStorage. Users can create custom forms with dynamic fields, manage them, and collect responses. It includes an Admin Dashboard for counts and response viewing, a public form page for submissions, and features like delete, open response, and data persistence.",
    tags: ["React", "LocalStorage", "Tailwind CSS", "CSS Modules"],
    liveLink: "https://hamidrza0008.github.io/Form-Builder/",
    codeLink: "https://github.com/Hamidrza0008",
  },
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    gsap.set(cards, { opacity: 0, y: 50 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          } else {
            gsap.set(entry.target, { opacity: 0, y: 50 });
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      scale: 1.03,
      rotation: 1,
      boxShadow: "0 0 25px rgba(255, 165, 0, 0.5)",
      borderColor: "rgba(249, 115, 22, 0.4)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      scale: 1,
      rotation: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      id="projects"
      className="w-full bg-black text-white scroll-mt-20 px-4 sm:px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold inline-block pb-2">
          Projects
        </h1>
        <p className="text-white text-center pt-3 max-w-2xl mx-auto text-sm sm:text-base opacity-90">
          Explore my portfolio of responsive and interactive web applications that
          showcase my skills in React, Tailwind, and modern web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-6">
        {projectsData.map((proj, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group flex flex-col bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="relative overflow-hidden aspect-video w-full border-b border-white/10">
              <img
                src={proj.img}
                alt={proj.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-300 mt-3 leading-relaxed line-clamp-4">
                  {proj.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex-1 text-center text-sm font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 hover:before:translate-x-full"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-sm font-semibold bg-white/5 hover:bg-white/10 text-white py-3 px-4 rounded-xl border border-white/10 transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}