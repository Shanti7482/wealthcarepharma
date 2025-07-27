import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/public/vite.svg",
  "/src/assets/react.svg",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

const AnimatedHero = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent((current + 1) % length);

  return (
    <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12 bg-gradient-to-b from-blue-100 to-white animate-fade-in">
      <div className="relative w-full max-w-xl mx-auto mb-8">
        <img
          src={images[current]}
          alt="WealthCare Hero"
          className="rounded-xl shadow-lg w-full h-64 object-cover transition-all duration-700 ease-in-out"
          style={{ animation: "slidein 1s" }}
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow transition"
        >
          <FaArrowRight />
        </button>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 animate-bounce">
        Welcome to WealthCare
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in">
        Your trusted partner in financial planning and wealth management.
        Empower your future with our expert guidance and innovative solutions.
      </p>
      <a
        href="#"
        className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-300 animate-fade-in"
      >
        Get Started
      </a>
    </section>
  );
};

export default AnimatedHero;
