import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/heroSwiper/hero1.jpg";
import hero2 from "../assets/heroSwiper/hero2.jpg";
import hero3 from "../assets/heroSwiper/hero3.jpg";
import hero4 from "../assets/heroSwiper/hero4.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

const heroTexts = [
  "Trusted Healthcare, Delivered to Your Doorstep",
  "Genuine Medicines at Affordable Prices",
  "Wellness Essentials You Can Rely On",
  "Wealth Care Pharma – Since 2025",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = heroImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <section className="w-full mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Background Image */}
        <img
          src={heroImages[current]}
          alt={`Hero Slide ${current + 1}`}
          className="w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px] object-cover transition-all duration-700"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4  bg-opacity-40 text-white z-10">
          {/* <motion.h2
            key={current}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow"
          > */}
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow">
            {" "}
            {heroTexts[current]}
          </h1>

          {/* </motion.h2> */}
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-green-400 
                    hover:from-green-400 hover:to-blue-600  text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all text-lg animate-fade-in"
          >
            Shop Now
          </motion.a>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full border-2 border-white ${
                idx === current ? "bg-blue-600 scale-110" : "bg-blue-300"
              } transition-all duration-300`}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
