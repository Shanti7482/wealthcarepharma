import React from "react";
import { motion } from "framer-motion";
import { FaCapsules, FaTruckMedical } from "react-icons/fa6";
import { FaUserMd, FaRegSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaCapsules className="text-4xl text-blue-500 mb-2" />,
    title: "Wide Range of Medicines",
    desc: "Find all your prescription and OTC medicines in one place.",
  },
  {
    icon: <FaUserMd className="text-4xl text-green-500 mb-2" />,
    title: "Expert Pharmacists",
    desc: "Get advice from certified pharmacists anytime.",
  },
  {
    icon: <FaTruckMedical className="text-4xl text-pink-500 mb-2" />,
    title: "Fast Delivery",
    desc: "Quick and safe delivery to your doorstep.",
  },
  {
    icon: <FaRegSmile className="text-4xl text-yellow-500 mb-2" />,
    title: "Customer Satisfaction",
    desc: "We care for your health and happiness.",
  },
];

const Features = () => (
  <main className="bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4 py-6">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 text-center drop-shadow-lg"
    >
      Wealth Care<span className="text-green-500"> Pharma</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-2xl text-gray-700 mb-10 text-center max-w-2xl mx-auto"
    >
      Established in 2025, Wealth Care Pharma is your trusted partner for
      genuine medicines, wellness essentials, and expert healthcare advice — all
      delivered fast, at the best prices, with 24/7 support.
    </motion.p>
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12 w-full max-w-5xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {features.map((f, i) => (
        <motion.div
          key={i}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-t-4 border-blue-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
        >
          {f.icon}
          <h3 className="text-xl font-bold mb-2 text-blue-700 text-center">
            {f.title}
          </h3>
          <p className="text-gray-600 text-center">{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
    <motion.a
      href="#"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-gradient-to-r from-blue-600 to-green-400 
                    hover:from-green-400 hover:to-blue-600  text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all text-lg animate-fade-in"
    >
      Shop Now
    </motion.a>
  </main>
);

export default Features;
