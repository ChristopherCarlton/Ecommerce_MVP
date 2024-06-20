"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneVolume, FaRegCalendarCheck } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between px-2 w-full mx-auto items-center">
        <div
          className={`flex transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src="/images/h1.png"
            alt="4405 Dental Studio"
            className="pl-4 pt-2 h-[170px]"
          />
        </div>
        <div className="flex px-8">
          <div
            className={`flex flex-col text-white text-right space-y-4 pr-4  transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-end text-lg">
              <FaPhoneVolume className="text-xl pr-2" />
              <span className="">Phone: (512) 686-2525</span>
            </div>
            <div className="flex items-center text-lg">
              <FaRegCalendarCheck className="text-xl pr-2" />
              <a href="/Book-Now">Book Now</a>
            </div>
          </div>
          <button
            onClick={handleMenuToggle}
            className={`text-white self-end transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            } z-50`} // Ensure the button is above the modal
          >
            {isMenuOpen ? (
              <TbLetterX className="text-5xl" />
            ) : (
              <IoIosMenu className="text-5xl" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 text-white p-8 md:p-16 overflow-hidden"
          tabIndex={-1}
        >
          <a href="/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md  bg-[#c5a46d]"></span>
            Home
          </a>
          <a href="#about" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md  bg-[#c5a46d]"></span>
            About
          </a>
          <a href="#services" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md  bg-[#c5a46d]"></span>
            Services
          </a>
          <a href="#patient-center" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md  bg-[#c5a46d]"></span>
            Patient Center
          </a>
          <a href="#blog" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md  bg-[#c5a46d]"></span>
            Blog
          </a>
          <a href="#contact-us" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md  bg-[#c5a46d]"></span>
            Contact Us
          </a>

          <a href="#contact-us" className="text-xl w-68 px-14 py-4 rounded-md bg-[#c5a46d] text-left">(512) 686-2525</a>
        </div>
      )}
    </header>
  );
}
