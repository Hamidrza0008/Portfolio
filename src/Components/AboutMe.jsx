import React, { useRef, useEffect } from "react";
import bg from "../assets/img/bg.png";
import circle from "../assets/img/circle.png";
import profile from "../assets/img/profile.jpeg";
import gsap from "gsap";

export default function AboutMe() {
  const floatRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.to(floatRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const leftAnim = gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", paused: true }
    );

    const rightAnim = gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", paused: true }
    );

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) leftAnim.play();
            if (entry.target === rightRef.current) rightAnim.play();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      observer.disconnect();
      leftAnim.kill();
      rightAnim.kill();
    };
  }, []);

  return (
    <div 
      className="bg-black text-white min-h-screen w-full scroll-mt-20 px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center overflow-hidden" 
      id="about"
    >
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold inline-block pb-2">
          About Me
        </h1>
        <div className="h-1 w-16 bg-orange-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto w-full">
        
        <div ref={leftRef} className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none flex justify-center items-center aspect-square lg:w-[450px]">
          <div ref={floatRef} className="relative w-full h-full flex justify-center items-center">
            <img className="absolute -z-10 w-[120%] max-w-none opacity-40 animate-pulse" src={bg} alt="bg" />
            <img className="w-full max-w-[380px] opacity-20" src={circle} alt="circle-bg" />
            <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden border-2 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              <img className="w-full h-full object-cover" src={profile} alt="profile" />
            </div>
          </div>
        </div>

        <div ref={rightRef} className="w-full lg:max-w-2xl flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            I'm a <span className="text-orange-400">Front End Focused - Full-Stack Developer</span> based in Mumbai.
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            As a B.Tech Computer Science student at Chhatrapati Shivaji Maharaj University (CSMU), I have transitioned from building basic layouts to crafting high-performance, complex full-stack web applications.
          </p>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            My specialization lies in building premium, interactive user interfaces using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>, seamlessly integrated with robust backends and <strong>MySQL</strong> databases. I leverage tools like <strong>GSAP</strong> and <strong>Redux Toolkit</strong> to build smooth, state-driven user experiences.
          </p>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            With a focus on writing clean, scalable architecture and utilizing modern AI-driven developer workflows, I build solutions that maintain high-quality design integrity and fluid responsive layouts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
            <button className="w-full sm:w-36 h-12 font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:opacity-90">
              Hire Me
            </button>

            <button
              className="w-full sm:w-40 h-12 font-semibold bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors duration-300"
              onClick={() =>
                window.open(`${import.meta.env.BASE_URL}Hamid_Rza_Resume.pdf`, "_blank")
              }
            >
              Download CV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}