import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    company: "ZA Charity Feed Foundation",
    role: "Full Stack Developer Intern",
    duration: "15 July 2026 — Present",
    current: true,
    responsibilities: [
      "Developing full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and Mongoose.",
      "Building secure REST APIs with JWT, OTP, and cookie-based authentication.",
      "Creating responsive and modern user interfaces.",
      "Integrating Cloudinary for media management.",
      "Testing APIs with Postman.",
      "Deploying applications on Vercel and Render.",
      "Managing MongoDB Atlas databases.",
      "Debugging, optimizing performance, and implementing new features.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.fromTo(
      cards,
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
      id="experience"
      ref={containerRef}
      className="bg-black text-white w-full scroll-mt-20 px-4 sm:px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="heading-shine text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold inline-block pb-2">
          Experience
        </h1>
        <p className="text-white text-center pt-3 max-w-2xl mx-auto text-sm sm:text-base opacity-90">
          Hands-on experience building and shipping production-ready full-stack applications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-[2px] bg-white/10"></div>
        <div
          ref={lineRef}
          className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-500 to-red-600"
        ></div>

        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="relative pl-14 sm:pl-16 pb-4"
          >
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              <i className="fa-solid fa-briefcase text-orange-500 text-sm"></i>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-orange-500/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-400">{exp.role}</h3>
                  <p className="text-gray-300 font-medium mt-1">{exp.company}</p>
                </div>
                <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap w-fit">
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  )}
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.responsibilities.map((item, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <i className="fa-solid fa-check text-orange-500 text-xs mt-1.5 shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
