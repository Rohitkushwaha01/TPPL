import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Martin Hope",
    title: "Pro Dust",
    avatar: "https://i.ibb.co/q9Kytdr/avatar1.jpg",
    review:
      "I’ve seen great companies serving industry solutions in my career. But not to the point where you feel that comfort and trust that we get with Industic Company.",
  },
  {
    name: "John Peter",
    title: "Dustic",
    avatar: "https://i.ibb.co/Wpx4Zx4/avatar2.jpg",
    review:
      "Expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise, deliver innovative and dynamic solutions to our customers!",
  },
];

const clients = [
  "https://i.ibb.co/wsp7DWG/logo1.png",
  "https://i.ibb.co/vPmfJKj/logo2.png",
  "https://i.ibb.co/D1J0Lqj/logo3.png",
  "https://i.ibb.co/N1fwBBS/logo4.png",
  "https://i.ibb.co/MRyyLkD/logo5.png",
  "https://i.ibb.co/xjfsMjg/logo6.png",
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center md:text-left"
            >
              <motion.img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full border-4 border-orange-500 mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <h3 className="font-semibold text-lg">{testimonials[index].name}</h3>
              <span className="text-gray-500">{testimonials[index].title}</span>
              <p className="mt-4 text-lg text-gray-800">{testimonials[index].review}</p>
              <div className="text-orange-500 mt-4 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Second testimonial static */}
          <motion.div
            key={(index + 1) % testimonials.length}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex flex-col items-center text-center md:text-left"
          >
            <motion.img
              src={testimonials[(index + 1) % testimonials.length].avatar}
              alt={testimonials[(index + 1) % testimonials.length].name}
              className="w-20 h-20 rounded-full border-4 border-orange-500 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <h3 className="font-semibold text-lg">
              {testimonials[(index + 1) % testimonials.length].name}
            </h3>
            <span className="text-gray-500">
              {testimonials[(index + 1) % testimonials.length].title}
            </span>
            <p className="mt-4 text-lg text-gray-800">
              {testimonials[(index + 1) % testimonials.length].review}
            </p>
            <div className="text-orange-500 mt-4 space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-orange-500 scale-110" : "bg-gray-400 scale-100"
              }`}
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Clients Logo */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 grayscale opacity-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {clients.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="client"
              className="h-10 md:h-12"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
