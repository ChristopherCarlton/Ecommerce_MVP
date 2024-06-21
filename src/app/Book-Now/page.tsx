"use client";
import React from 'react';
import HeaderPage from '../components/HeaderPage';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      {/* <div className="bg-gray-900 text-white py-52">
        <h1 className="text-5xl font-bold text-center">Appointments</h1>
      </div> */}
      <HeaderPage title='Appointments'/>

      {/* Content Section */}
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl">
          {/* Card 1 */}
          <div className="bg-[url('/images/bg.png')] bg-cover bg-center text-white p-8 rounded-md shadow-lg w-full md:w-3/4 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">New Cleaning Patients / Returning Cleaning</h2>
            <p className="text-center mb-8">For cleaning appointments only.</p>
            <a href='https://www.flexbook.me/4405dental/1' className="bg-[#c5a46d] text-black py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-[#b8945e] transition-colors">Book Now</a>
          </div>

          {/* Card 2 */}
          <div className="bg-[url('/images/bg.png')] bg-cover bg-center text-white p-8 rounded-md shadow-lg w-full md:w-3/4 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">All Other Procedures</h2>
            <p className="text-center mb-8">For any procedures not including cleanings or emergency exams.</p>
            <a href='/appointments' className="bg-[#c5a46d] text-black py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-[#b8945e] transition-colors">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
