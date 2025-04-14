// src/components/Slider.jsx
import { useState, useEffect } from "react";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const backgrounds = [bg1, bg2, bg3];

export default function Slider({ children }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % backgrounds.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgrounds[index]})` }}
    >
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        ›
      </button>

      {/* Overlayed Content */}
      {children}
    </div>
  );
}
