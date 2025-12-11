import React, { useState } from "react";

export default function ContactMe() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "00433f42-9c49-483d-86f1-7cf9e74a1570");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("Your message has been sent successfully! 🎉");

      setTimeout(() => {
        setResult("");
        event.target.reset();
      }, 3000);

    } else {
      setResult("Something went wrong. Please try again!");

      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div className="md:h-full w-full bg-black text-white py-10 scroll-mt-20 px-4 sm:px-6 md:px-20" id="contactme">

      <h1 className="text-3xl text-center fire-text bg-gradient-to-r from-orange-500 
                    to-red-600 bg-clip-text text-transparent px-3 font-bold">
        Contact Me
      </h1>

      <p className="text-center pt-1">Reach out and Connect with Me</p>

      {/* Form */}
      <form onSubmit={onSubmit} className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">

          <input className="bg-[#1b1b1b] h-12 w-full rounded-2xl p-4"
            type="text" name="name" placeholder="Name" required />

          <input className="bg-[#1b1b1b] h-12 w-full rounded-2xl p-4"
            type="email" name="email" placeholder="Email" required />

          <input className="bg-[#1b1b1b] h-12 w-full rounded-2xl p-4"
            type="number" name="number" placeholder="Number" required />

          <select className="bg-[#1b1b1b] h-12 w-full rounded-2xl px-3"
            name="service" required>
            <option value="" disabled hidden>Services</option>
            <option value="Frontend">Frontend Developer</option>
            <option value="Backend">Backend Developer</option>
            <option value="Web Developer">Web Developer</option>
          </select>

          <textarea className="bg-[#1b1b1b] h-32 w-full rounded-2xl p-5 sm:col-span-2"
            name="details" placeholder="Details of Project" required></textarea>

          <button
            className="bg-orange-600 text-white h-12 w-40 rounded-3xl hover:bg-orange-700 
                       cursor-pointer mx-auto sm:col-span-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {/* Success / Error Message */}
      {result && (
        <p className="text-center mt-5 text-lg text-green-400">{result}</p>
      )}

      {/* Footer - Minimized & Compact */}
      <div className="bg-[#1b1b1b] w-full max-w-3xl mx-auto mt-10 p-4 rounded-2xl text-center space-y-3 text-sm">
        <h2 className="fire-text bg-gradient-to-r from-orange-500 to-red-600 
                       bg-clip-text text-transparent font-bold">
          Hamid Rza
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#home" className="hover:border-2 hover:rounded-2xl p-1 px-3">Home</a>
          <a href="#skills" className="hover:border-2 hover:rounded-2xl p-1 px-3">Skills</a>
          <a href="#projects" className="hover:border-2 hover:rounded-2xl p-1 px-3">Projects</a>
          <a href="#about" className="hover:border-2 hover:rounded-2xl p-1 px-3">About Me</a>
          <a href="#contactme" className="hover:border-2 hover:rounded-2xl p-1 px-3">Contact Me</a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <a
            href="mailto:Hamidrza0008@gmail.com"
            className="flex gap-2 items-center hover:text-orange-500 duration-200"
          >
            <i className="fa-regular fa-envelope"></i>
            <span>Hamidrza0008@gmail.com</span>
          </a>

          <a
            href="tel:+919599424493"
            className="flex gap-2 items-center hover:text-orange-500 duration-200"
          >
            <i className="fa-solid fa-phone"></i>
            <span>+91 9599424493</span>
          </a>
        </div>

      </div>
    </div>
  );
}
