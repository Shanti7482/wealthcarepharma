import React from "react";

const AnimatedFooter = () => (
  <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-6 mt-auto animate-fade-in">
    <div className="container mx-auto text-center text-sm px-4">
      <span className="animate-pulse">
        &copy; {new Date().getFullYear()} WealthCare. All rights reserved.
      </span>
    </div>
  </footer>
);

export default AnimatedFooter;
