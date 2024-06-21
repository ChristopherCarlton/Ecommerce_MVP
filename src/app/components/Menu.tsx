import React from 'react';

const Menu: React.FC = () => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 text-white p-8 md:p-16 overflow-hidden"
      tabIndex={-1}
    >
      <a href="/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Home
      </a>
      <a href="#about" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        About
      </a>
      <a href="#services" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Services
      </a>
      <a href="#patient-center" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Patient Center
      </a>
      <a href="#blog" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Blog
      </a>
      <a href="#contact-us" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Contact Us
      </a>

      <a href="#contact-us" className="text-xl w-68 px-14 py-4 rounded-md bg-[#c5a46d] text-left">(512) 686-2525</a>
    </div>
  );
};

export default Menu;
