import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftAnim = gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", paused: true }
    );
    const rightAnim = gsap.fromTo(
      rightRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", paused: true, delay: 0.15 }
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          leftAnim.play();
          rightAnim.play();
        } else {
          leftAnim.pause(0);
          rightAnim.pause(0);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="contact"
      ref={containerRef}
      className="bg-black text-white w-full scroll-mt-20 px-4 sm:px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="heading-shine text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold inline-block pb-2">
          Get In Touch
        </h1>
        <p className="text-white text-center pt-3 max-w-2xl mx-auto text-sm sm:text-base opacity-90">
          Have a project in mind or an opportunity to discuss? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div ref={leftRef} className="text-center md:text-left space-y-4">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to internship & full-time opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-md">
            Let's build something great, together.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Reach out directly and I'll get back to you as soon as possible.
          </p>
        </div>

        <div ref={rightRef} className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
          <a
            href="mailto:hamidrza0008@gmail.com"
            className="w-full md:w-72 flex items-center justify-center gap-3 h-12 font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:opacity-90"
          >
            <i className="fa-solid fa-envelope"></i>
            hamidrza0008@gmail.com
          </a>
          <a
            href="tel:+919599424493"
            className="w-full md:w-72 flex items-center justify-center gap-3 h-12 font-semibold bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors duration-300"
          >
            <i className="fa-solid fa-phone"></i>
            +91 9599424493
          </a>

          <div className="flex items-center gap-5 pt-2">
            <a href="https://github.com/Hamidrza0008" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-xl hover:text-white transition-all duration-300 hover:scale-110">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/name/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-xl hover:text-blue-500 transition-all duration-300 hover:scale-110">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/hamid___0008" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-xl hover:text-pink-500 transition-all duration-300 hover:scale-110">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
