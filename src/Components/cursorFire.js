import { useEffect } from "react";

export default function CursorFire() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const fire = document.createElement("div");
      fire.className = "fire";
      fire.style.left = `${e.clientX}px`;
      fire.style.top = `${e.clientY}px`;
      document.body.appendChild(fire);

      setTimeout(() => fire.remove(), 600);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // cleanup (jab component remove ho)
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // ye koi UI render nahi karta
}
