import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Links } from "react-router";

const ProductCard = ({ products }) => {
  return (
    <div className="max-w-[99%] mx-auto flex flex-col px-4 py-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center drop-shadow-lg"
      >
        <span className="text-green-500">Our Products</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-t-4 border-blue-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-30 h-30 object-contain mb-4 rounded-md"
            />
            <h3
              className="text-base font-semibold mb-1 text-blue-700 text-left w-full truncate"
              title={product.title}
            >
              {product.title}
            </h3>
            <p
              className="text-sm text-gray-600 text-left w-full truncate mb-3"
              title={product.desc}
            >
              {product.desc}
            </p>

            <div className="w-full flex items-center justify-between">
              <span className="text-green-600 font-semibold text-base">
                ₹ {product.price}
              </span>
              <Link
                to=""
                className="px-4 py-2 text-white text-sm rounded-lg 
      bg-gradient-to-r from-blue-600 to-green-400 
      hover:from-green-400 hover:to-blue-600 
      transform hover:scale-105 hover:brightness-110 
      transition-all duration-500"
              >
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
