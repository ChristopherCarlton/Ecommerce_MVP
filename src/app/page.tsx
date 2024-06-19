import React from 'react';
import ApproachSection from './components/ApproachSection';
import ApproachSection2 from './components/ApproachSection2';
// import Teeth from './components/teeth';
import dynamic from 'next/dynamic';
const Teeth = dynamic(() => import('./components/Teeth'), { ssr: false });
import { FaPhoneVolume, FaRegCalendarCheck } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

     <header className="bg-black w-full py-4 fixed top-0 z-50">
          <nav className="flex justify-between px-2 w-full mx-auto items-center">
            <div className="flex">
              <img src="/images/h1.png" alt="4405 Dental Studio" className="pl-8 h-[170px]" />
            </div>
            <div className="flex px-8">
              <div className="flex flex-col text-white text-right space-y-4 pr-4">
                <div className="flex items-center justify-end text-lg">
                  <FaPhoneVolume className="text-xl" />
                  <span className="pl-2">Phone: (512) 686-2525</span>
                </div>
                <div className="flex items-center  text-lg">
                  <FaRegCalendarCheck className="text-xl" />
                  <span className="pl-2">Book Now</span>
                </div>
              </div>
              <button className="text-white self-end">
                  <IoIosMenu className="text-5xl" />
                </button>
            </div>
          </nav>
        </header>

        <section className="w-full py-32 px-8 mb-8">
          <div className="max-w-[95rem] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch">
            <div className="bg-[#f9f4e4] lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-800">Dentist in Georgetown, TX</h1>
                <p className="text-lg mt-4 text-gray-700">
                  Welcome to the heart of oral wellness in town! A top-notch dentist in Georgetown, TX, where a radiant smile isn’t just a dream—it’s an achievable reality. At 4405 Dental Studio, we confront the misconception that dental visits are daunting and transform them into experiences marked by comfort and care.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Our experienced dentists, <span className="font-semibold text-yellow-600">Dr. Andrew Edmonds</span> and <span className="font-semibold text-yellow-600">Dr. Brenna Sura</span>, lead a team dedicated to crafting personalized dental journeys for every patient.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  As you embark on your path towards optimal oral health with us, you’ll discover why residents from Sun City to Round Rock entrust us with their smiles. Our dentist is not just about treating teeth; we focus on nurturing healthy lifestyles through preventive measures and innovative treatments designed for long-lasting results.
                </p>
                <p className="mt-4 font-semibold text-gray-800">
                  Discover the difference at 4405 Dental Studio—where your journey begins.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src="/images/d6.png" alt="Dentist Staff" className="rounded-lg shadow-md h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="w-full py-32 px-8 " style={{ backgroundColor: '#b89c54' }}>
          <div className="max-w-[95rem] mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 lg:pr-8">
              <img src="/images/d7.png" alt="Our Mission" className="rounded-lg shadow-md" />
            </div>
            <div className="bg-white lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
                <p className="text-lg mt-4 text-gray-700">
                  At <span className="font-semibold text-yellow-600">4405 Dental Studio</span>, we strive to provide top-notch dental care that ensures every patient leaves with a healthier smile. We believe in fostering an environment of professionalism with our dentist, where the comfort and satisfaction of our patients are paramount.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Our dedicated dental team and dentist work tirelessly to incorporate modern technology and techniques into our practice, guaranteeing efficient and effective dental care solutions for all your oral health needs. Both our trained professionals, Dr. Andrew Edmonds and Dr. Brenna Sura, have years of dental experience, affiliated with renowned organizations, including the <span className="font-semibold text-yellow-600">Academy of General Dentistry</span> and many more!
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  It’s more than just dental treatment; it’s about crafting individualized experiences that promote long-term relationships built on trust and quality patient care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-32 px-8">
          <div className="max-w-[95rem] mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 lg:pr-8">
              <img src="/images/d8.png" alt="About Our Dental Services" className="rounded-lg shadow-md" />
            </div>
            <div className="bg-[#f9f4e4] lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-gray-800">About Our Dental Services</h2>
                <p className="text-lg mt-4 text-gray-700">
                  We are your <span className="font-semibold text-yellow-600">one-stop dental solution</span> to quality care for the whole family. Of course, we offer <span className="font-semibold text-yellow-600">teeth cleaning</span>, diagnostics, fillings, crowns, dentures, bridges, and other <span className="font-semibold text-yellow-600">general dental services</span>, but that is not all. We also provide artisan quality smile makeovers, <span className="font-semibold text-yellow-600">Invisalign orthodontics</span>, <span className="font-semibold text-yellow-600">dental implants</span>, and much more. Nitrous oxide (laughing gas) and oral sedation are available for patients who need a little help relaxing during dental visits.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ApproachSection />
        <ApproachSection2/>
        <Teeth/>


      <footer className="bg-blue-600 w-full py-4">
        <p className="text-white text-center">&copy; 2024 4405 Dental Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
