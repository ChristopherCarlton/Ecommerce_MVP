import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [view, setView] = useState<'main' | 'about'>('main');

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 text-white p-8 md:p-16 overflow-hidden"
      tabIndex={-1}
    >
      {view === 'main' ? (
        <>
          <a href="/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Home
          </a>
          <button
            onClick={() => setView('about')}
            className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left"
          >
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            About
          </button>
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
          <a href="/contact-us" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Contact Us
          </a>
          <a href="#contact-us" className="text-xl w-68 px-14 py-4 rounded-md bg-[#c5a46d] text-left">
            (512) 686-2525
          </a>
        </>
      ) : (
        <>
          <button
            onClick={() => setView('main')}
            className="relative text-xl w-64 px-14 py-4 rounded-md bg-[#c5a46d] text-left"
          >
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Back
          </button>
          <a href="/meet-dr-andrew-edmonds" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Meet Dr. Andrew Edmonds
          </a>
          <a href="/meet-dr-brenna-sura" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Meet Dr. Brenna Sura
          </a>
          <a href="/gallery" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Before & After
          </a>
          {/* <a href="#team" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Meet The Team
          </a>
          <a href="#success-stories" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Success Stories
          </a>
          <a href="#video-gallery" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Video Gallery
          </a>
          <a href="#office-tour" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
            <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
            Office Tour
          </a> */}
        </>
      )}
    </div>
  );
};

export default Menu;
