import React from "react";
import { FaUserTie, FaLock, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie className="text-3xl text-blue-500 mb-2 animate-pulse" />,
    title: "Personalized Planning",
    desc: "Tailored financial strategies to meet your unique goals and needs.",
  },
  {
    icon: (
      <FaChartLine className="text-3xl text-blue-500 mb-2 animate-bounce" />
    ),
    title: "Expert Advisors",
    desc: "Work with certified professionals dedicated to your financial success.",
  },
  {
    icon: <FaLock className="text-3xl text-blue-500 mb-2 animate-spin-slow" />,
    title: "Secure Platform",
    desc: "Your data and investments are protected with industry-leading security.",
  },
];

const AnimatedFeatures = () => (
  <section className="py-12 bg-white animate-fade-in">
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-bold text-center text-blue-700 mb-8 animate-fade-in">
        Our Features
      </h3>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-fade-in"
          >
            {f.icon}
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AnimatedFeatures;
