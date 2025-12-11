import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home"); 
  const [isClicking, setIsClicking] = useState(false); 
  const navItems = ["home", "skills", "projects", "about", "contactme"];
  const observerRef = useRef(null); 

  const scrollToSection = (id) => {
    setIsClicking(true);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    // 💡 Set active immediately so underline updates
    setActive(id);
    setOpen(false);

    // Remove clicking state after animation duration
    setTimeout(() => {
      setIsClicking(false);
    }, 700); 
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (isClicking) return; // Ignore during click scroll
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current && observerRef.current.disconnect();
  }, [isClicking]);

  // GSAP animation for desktop nav
  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.set(".nav-item", { y: -70 });
      gsap.to(".nav-item", {
        y: 0,
        duration: 1.5,
        stagger: 0.12,
        ease: "power3.out",
      });
    }
  }, []);

  // Disable scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl mx-auto h-fit py-5 flex items-center justify-between px-6 md:px-14">
        <h2
          onClick={() => scrollToSection("home")}
          className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-3xl font-bold nav-item"
        >
          Hamid Rza
        </h2>

        <ul className="hidden md:flex items-center space-x-10 text-white font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="cursor-pointer nav-item">
              <button
                onClick={() => scrollToSection(item)}
                className="relative group px-3 py-1 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300
                    ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contactme")}
          className="hidden md:block bg-orange-600 text-white h-10 w-28 rounded-3xl hover:bg-orange-700 transition-all cursor-pointer nav-item"
        >
          Hire Me
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl cursor-pointer"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-screen
          bg-black/50 backdrop-blur-4xl border border-white/20 shadow-2xl text-white p-6 pt-24 space-y-6
          transform transition-all duration-300 md:hidden
          ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >
        {navItems.map((item, idx) => (
          <p
            key={idx}
            onClick={() => scrollToSection(item)}
            className={`text-lg cursor-pointer transition-all px-3 py-2 rounded-lg
              ${active === item
                ? "bg-orange-500/30 text-orange-400 font-semibold"
                : "hover:bg-white/20"
              }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        ))}

        <button
          onClick={() => scrollToSection("contactme")}
          className="cursor-pointer bg-orange-600 text-white w-full py-2 rounded-2xl hover:bg-orange-700 transition"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
