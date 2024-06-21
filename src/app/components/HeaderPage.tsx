"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneVolume, FaRegCalendarCheck } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import Menu from "./Menu";

interface HeaderPageProps {
  title: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="relative bg-[url('/images/bg.png')] bg-cover bg-center h-[32rem] w-full flex flex-col justify-between">
      <nav className="flex justify-between px-2 w-full mx-auto items-center">
        <div className="flex">
          <a href="/">
            <img
              src="/images/h1.png"
              alt="4405 Dental Studio"
              className="pl-4 pt-2 h-[170px]"
            />
          </a>
        </div>
        <div className="flex px-8">
          <div className="flex flex-col text-white text-right space-y-4 pr-4">
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
            className="text-white self-end transition-opacity duration-300 z-50"
          >
            {isMenuOpen ? (
              <TbLetterX className="text-5xl" />
            ) : (
              <IoIosMenu className="text-5xl" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && <Menu />}
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-white">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderPage;
