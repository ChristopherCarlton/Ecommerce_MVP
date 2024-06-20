import React from 'react';
import ApproachSection from './components/ApproachSection';
import ApproachSection2 from './components/ApproachSection2';
import MeetTheDoctors from './components/MeetTheDoctors';
import dynamic from 'next/dynamic';
const Teeth = dynamic(() => import('./components/Teeth'), { ssr: false });
import Comprehensive from './components/Comprehensive';
import SuccessStories from './components/SuccessStories';
import Video from './components/Video';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Video/>
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
        <MeetTheDoctors/>

        <section className="w-full bg-white py-16">
        <div className="max-w-[95rem] mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="bg-[#f9f4e4] p-8 rounded-md shadow-md md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-[#8b6e34]">How Can We Help?</h2>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8b6e34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.09A10 10 0 015 8.6M12 14l-6.16 3.09A10 10 0 0112 21M5.4 15.6a10 10 0 01-.4-7.6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl text-[#8b6e34] font-bold mb-2">Your Comfort Comes First</h3>
                <p className="text-lg text-gray-700">
                  Whether you need extensive restorative work, cosmetic enhancements, or just a check-up and cleaning, you can count on Dr. Edmonds and his team.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img
              src="/images/d11.png"
              alt="Happy couple"
              className="rounded-md shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <Comprehensive/>
      <SuccessStories/>
      <section className="w-full bg-[#f9f4e4] py-16">
        <div className="max-w-[95rem] mx-auto p-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <img
              src="/images/d15.png"
              alt="Happy couple"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
          <div className="lg:w-1/2 bg-white p-8 rounded-md shadow-md mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-3xl font-bold text-[#8b6e34] mb-4">Let’s Get Your Smile Back in Shape: Schedule Your First Visit Today!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ready to take the next step in your dental health journey? Whether it’s for general, cosmetic, or emergency care, our team is prepared to provide top-notch services that cater to your unique needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With an individualized approach to dentistry and modern technology at our fingertips, we’ll ensure you receive the comprehensive care necessary to keep your smile bright and healthy.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Call us today to secure your appointment slot and experience compassionate dental care tailored just for you with our dentist!
            </p>
            <a href='/Book-Now' className="bg-[#8b6e34] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#6b5525] transition-colors duration-300">
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
