import { useEffect, useState } from "react";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: bg1,
    heading: "Effective & Reliable",
    subheading:
      "To further develop our corporate strengths, we maintain strong core values.",
  },
  {
    image: bg2,
    heading: "Industry Solution",
    subheading:
      "We offer scalable manufacturing solutions tailored for every industry.",
  },
  {
    image: bg3,
    heading: "Safe and Integrity",
    subheading:
      "Safety and trust are at the core of every product we deliver.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  const { image, heading, subheading } = slides[index];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-12 xl:px-24 py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full absolute bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        ›
      </button>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 max-w-screen-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={heading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/3 text-center lg:text-left text-white mt-15 lg:mt-0 z-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heading}
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl">{subheading}</p>

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded w-full sm:w-auto">
                Our Services
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded text-white w-full sm:w-auto">
                ▶️ Our Video!
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mission Box */}
        <div className="w-full lg:w-1/3 max-w-sm bg-white text-black rounded-lg shadow-lg p-6 text-center z-10">
          <div className="text-4xl">⚙️</div>
          <h3 className="text-xl font-semibold mt-4">Our Mission</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Utilizing latest processing solutions, and decades of work experience.
          </p>
          <button className="mt-4 text-orange-500 font-semibold">Explore →</button>
        </div>
      </div>
    </section>
  );
}
