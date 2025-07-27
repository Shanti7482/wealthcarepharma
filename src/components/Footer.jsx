import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-700 to-green-400 text-white py-6 mt-auto animate-fade-in">
    <div className="container mx-auto text-center text-sm px-4 flex flex-col items-center gap-2">
      <span className="flex items-center gap-2 justify-center animate-pulse">
        <FaHeartPulse className="text-pink-300 text-lg" />
        &copy; {new Date().getFullYear()} Wealth Care Pharma. All rights
        reserved.
      </span>
      <span className="text-xs opacity-70">
        Made with care for your health.
      </span>
    </div>
  </footer>
);

export default Footer;
