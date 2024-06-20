"use client";
import React from 'react';
import { FaFacebookF, FaGoogle, FaYelp, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#231f20] text-white py-8 pt-16">
      <div className="max-w-[95rem] mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Info</h3>
          <a href="https://www.google.com/maps/place/4405+Dental+Studio/@30.682635,-97.715682,16z/data=!4m6!3m5!1s0x86452bd70c33c2c1:0xc3e27a4915e757d5!8m2!3d30.6826352!4d-97.7156818!16s%2Fg%2F11fk0lrx07?ll=30.682635,-97.715682&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=14114978636451239893&entry=tts" aria-label="Google" target="_blank" rel="noopener noreferrer">4405 Williams Dr Ste 300<br />
             Georgetown, TX 78628<br />
             Phone: (512) 686-2525
          </a>
        </div>
        <div className="mb-4 md:mb-0 text-center">
          <img src="/images/h2.png" alt="4405 Dental Studio" className="mx-auto h-44" />
          <div className="flex justify-center space-x-4 mt-4 text-xl">
            <a href="https://www.facebook.com/4405dentalstudio/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.google.com/maps/place/4405+Dental+Studio/@30.682635,-97.715682,16z/data=!4m6!3m5!1s0x86452bd70c33c2c1:0xc3e27a4915e757d5!8m2!3d30.6826352!4d-97.7156818!16s%2Fg%2F11fk0lrx07?ll=30.682635,-97.715682&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=14114978636451239893&entry=tts" aria-label="Google" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
            <a href="https://www.yelp.com/biz/4405-dental-studio-georgetown" aria-label="Yelp" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
            <a href="https://www.instagram.com/4405dentalstudio/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.pinterest.com/4405dentalstudio/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
            <a href="https://www.youtube.com/channel/UCjCOqaHnN7K735FpfrAOn3Q" aria-label="Youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="text-center md:text-right mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Office Hours</h3>
          <p>Mon: 8am-6pm<br />
             Tue, Wed, Thur: 8am-4pm<br />
             Fri: 8am-1pm<br />
             Sat & Sun: Closed
          </p>
        </div>
      </div>
      <div className="bg-[#705d33] text-white py-3 mt-16 text-center text-sm w-[65%] mx-auto rounded-sm">
        &copy;2024 4405 Dental Studio. Designed and Managed by ViziSites. Terms of Use. Website Accessibility.
      </div>
    </footer>
  );
};

export default Footer;
