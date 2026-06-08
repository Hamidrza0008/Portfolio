import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-white/10 px-4 sm:px-6 md:px-20 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Hamid Rza
          </h2>
          <p className="text-neutral-400 text-sm tracking-wide">
            Full-Stack Developer | Crafting Premium Web Experiences
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-neutral-300">
          <a 
            href="mailto:hamidrza0008@gmail.com" 
            className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
          >
            <i className="fa-solid fa-envelope text-orange-500"></i>
            <span>hamidrza0008@gmail.com</span>
          </a>
          <a 
            href="tel:+919599424493" 
            className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
          >
            <i className="fa-solid fa-phone text-orange-500"></i>
            <span>+91 9599424493</span>
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/Hamidrza0008" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 text-xl hover:text-white transition-all duration-300 hover:scale-110"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/name/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 text-xl hover:text-blue-500 transition-all duration-300 hover:scale-110"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://www.instagram.com/hamid___0008" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 text-xl hover:text-pink-500 transition-all duration-300 hover:scale-110"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p className="text-neutral-500 text-xs tracking-wider">
            &copy; {currentYear} Hamid Rza. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}