import React from "react";
import logo from "../assets/brandlogo.png";

const SubFooter = () => {
  return (
    <section id="services" className="w-full px-4 py-10 bg-gray-200">
      <div className="flex flex-wrap justify-center gap-8  mx-auto">
        <div className="w-full  lg:w-[25%] p-4">
          <a href="" className="flex flex-row items-center gap-2">
            <img
              src={logo}
              alt="Wealth Care Pharma Logo"
              className="w-14 h-14  drop-shadow-lg bg-white rounded-full p-1 object-contain"
            />
            <div className="flex flex-col items-center text-xl font-extrabold  mb-4 text-center drop-shadow-lg">
              <span className="text-blue-700">Wealth Care</span>
              <span className="text-green-500">Pharma</span>
            </div>
          </a>

          <p className="text-gray-700 text-sm mt-4">
            detailes of wealth care
            <span className=" text-black px-1 font-semibold"></span>
          </p>

          <a
            href=""
            className="inline-block mt-4 px-6 py-2 text-white rounded-lg 
                    bg-gradient-to-r from-blue-600 to-green-400 
                    hover:from-green-400 hover:to-blue-600 
                    transform hover:scale-105 hover:brightness-110 
                    transition-all duration-500 "
          >
            Read more
          </a>
        </div>

        <div className="w-full  md:w-[70%] lg:w-[32%] flex flex-row sm:flex-col md:flex-row gap-6 p-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Products
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm uppercase font-semibold">
              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px] ">
                    WE-Q10 Softgel Capsule 10's
                  </span>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px]">
                    We-Cal Tablet 10'S
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px]">
                    We Forte Tablet 10's
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px]">
                    Kaldona Tablet 10's
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px]">
                    Cynotor Tablet 10's
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm font-semibold">
              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px] ">
                    HOME
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px] ">
                    ABOUT
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px] ">
                    SHOP
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px] ">
                    PRODUCTS
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="group relative overflow-hidden w-max cursor-pointer">
                <a href="">
                  <span className="group-hover:text-blue-700 transition text-[10px] sm:text-[12px] md:text-[14px] ">
                    CONTACT
                  </span>

                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[25%] lg:w-[25%] p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <i className="fas fa-phone-alt mr-2 text-emerald-600"></i>
              +91-9899631539{" "}
            </li>
            <li>
              <i className="fas fa-phone-alt mr-2 text-emerald-600"></i>
              +91-7011541279{" "}
            </li>

            <li>
              <i className="fas fa-envelope mr-2 text-emerald-600"></i>
              wealthcarep@gmail.com
            </li>

            <li>
              <i className="fas fa-map-marker-alt mr-2 text-emerald-600"></i>
              Plot No 94 Shop No 3 Ramjilal Market, Sarita Vihar, New Delhi,
              Delhi, India 110076
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-4 text-xl">
            <a
              href=""
              target="_blank"
              className="w-8 h-8 flex items-center justify-center bg-[#1877F2] text-white rounded-full transition duration-300 hover:bg-white hover:text-[#1877F2] hover:ring-2 hover:ring-[#1877F2]"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href=""
              target="_blank"
              className="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full transition duration-300 hover:bg-gradient-to-tr hover:from-white  hover:via-white hover:to-white hover:text-pink-500  hover:ring-2 hover:ring-pink-500"
              aria-label="Instagram"
            >
              <span className="w-6 h-6 p-[4px] flex items-center justify-center rounded-r-lg rounded-l-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white ">
                <i className="fab fa-instagram text-xl"></i>
              </span>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#FF0000] text-white rounded-full transition duration-300 hover:bg-white hover:text-[#FF0000] hover:ring-2 hover:ring-[#FF0000]"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            {/* <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-neutral-900 text-white rounded-full transition duration-300 hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
              aria-label="X (Twitter)"
            >
              <i className="fab fa-x-twitter text-xl"></i>
            </a> */}
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#0A66C2] text-white rounded-full transition duration-300 hover:bg-white hover:text-[#0A66C2] hover:ring-2 hover:ring-[#0A66C2]"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            {/* <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#0088cc] text-white rounded-full transition duration-300 hover:bg-white hover:text-[#0088cc] hover:ring-2 hover:ring-[#0088cc]"
              aria-label="Telegram"
            >
              <i className="fab fa-telegram-plane text-xl"></i>
            </a> */}
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full transition duration-300 hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
              aria-label="Threads"
            >
              <i className="fa-brands fa-threads text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
