"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneVolume, FaRegCalendarCheck } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import Menu from "./Menu";

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
          <a href="/">
          <img
            src="/images/h1.png"
            alt="4405 Dental Studio"
            className="pl-4 pt-2 h-[170px]"
          />
          </a>
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
        <Menu/>
      )}
    </header>
  );
}
