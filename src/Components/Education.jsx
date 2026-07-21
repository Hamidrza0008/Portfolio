import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Secondary (10th)",
    duration: "Completed in 2021",
  },
  {
    degree: "Higher Secondary (12th)",
    duration: "Completed in 2023",
  },
  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science",
    institution: "Chhatrapati Shivaji Maharaj University (CSMU)",
    duration: "September 2023 — Present",
    note: "Currently pursuing 7th Semester (Fourth Year)",
    current: true,
  },
];

export default function Education() {
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const nodes = nodesRef.current;

    gsap.fromTo(
      nodes,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none play none",
        },
      }
    );

    gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });
    const lineTween = gsap.to(lineRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 65%",
        scrub: 0.5,
      },
    });

    return () => {
      lineTween.scrollTrigger && lineTween.scrollTrigger.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, []);

  return (
    <div
      id="education"
      ref={containerRef}
      className="bg-black text-white w-full scroll-mt-20 px-4 sm:px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="heading-shine text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold inline-block pb-2">
          Education
        </h1>
        <p className="text-white text-center pt-3 max-w-2xl mx-auto text-sm sm:text-base opacity-90">
          My academic journey, year by year.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-[2px] bg-white/10"></div>
        <div
          ref={lineRef}
          className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-500 to-red-600"
        ></div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              ref={(el) => (nodesRef.current[idx] = el)}
              className="relative pl-14 sm:pl-16"
            >
              <div
                className={`absolute left-0 top-0 w-10 h-10 rounded-full bg-black border-2 flex items-center justify-center ${
                  edu.current
                    ? "border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    : "border-white/20"
                }`}
              >
                <i
                  className={`fa-solid fa-graduation-cap text-sm ${
                    edu.current ? "text-orange-500" : "text-gray-400"
                  }`}
                ></i>
              </div>

              <div
                className={`bg-white/5 backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 ${
                  edu.current
                    ? "border-orange-500/30 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-orange-400">{edu.degree}</h3>
                  {edu.current && (
                    <span className="flex items-center gap-2 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                      Ongoing
                    </span>
                  )}
                </div>
                {edu.institution && (
                  <p className="text-gray-300 font-medium text-sm sm:text-base">{edu.institution}</p>
                )}
                <p className="text-gray-500 text-xs sm:text-sm mt-2 tracking-wide">{edu.duration}</p>
                {edu.note && (
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 italic">{edu.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
