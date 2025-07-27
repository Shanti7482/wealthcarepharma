import React, { useState } from "react";
import { FaCapsules } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Shop", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-green-400 shadow-lg sticky top-0 z-50 opacity-90">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#"
          className="flex items-center gap-3 text-white text-2xl font-bold select-none"
          aria-label="Wealth Care Pharma Home"
        >
          <img
            src="/src/assets/brandlogo.png"
            alt="Wealth Care Pharma Brand Logo"
            className="w-14 h-14  drop-shadow-lg bg-white rounded-full p-1 object-contain"
          />
          <div className="flex flex-col items-center">
            <span className="text-2xl">Wealth Care</span>
            <span className="text-lg text-green-200">Pharma</span>
          </div>
        </a>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-semibold hover:text-green-200 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-blue-800 animate-fade-in">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white text-lg font-semibold block"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
