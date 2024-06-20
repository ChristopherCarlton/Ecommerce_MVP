"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneVolume, FaRegCalendarCheck } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between px-2 w-full mx-auto items-center">
        <div className={`flex transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img
            src="/images/h1.png"
            alt="4405 Dental Studio"
            className="pl-4 pt-2 h-[170px]"
          />
        </div>
        <div className="flex px-8">
          <div className={`flex flex-col text-white text-right space-y-4 pr-4 mb-7 ml-12 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex items-center justify-end text-lg">
              <FaPhoneVolume className="text-xl" />
              <span className="">Phone: (512) 686-2525</span>
            </div>
            <div className="flex items-center text-lg">
              <FaRegCalendarCheck className="text-xl" />
              <span className="">Book Now</span>
            </div>
          </div>
          <button className={`text-white self-end transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <IoIosMenu className="text-5xl" />
          </button>
        </div>
      </nav>
    </header>
  );
}
