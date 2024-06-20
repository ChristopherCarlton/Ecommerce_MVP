"use client";
import React from 'react';

const AppointmentForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-52 w-full">
        <h1 className="text-5xl font-bold text-center">Non-Cleaning Appointments</h1>
      </div>

      {/* Form Section */}
      <div className="bg-white p-16 rounded-lg shadow-lg w-full max-w-4xl mt-16 mx-auto ">
        <h2 className="text-2xl text-black font-bold mb-4">
          For new and existing patients that are interested in an <span className="font-bold text-gray-900">appointment</span> other than a cleaning or emergency exam, <span className="font-bold">please complete the form below</span>.
        </h2>
        <p className="mb-4 text-gray-700">Please note that this is only a request, someone from our office will contact you shortly to confirm a date and time for your appointment.</p>
        <p className="mb-8 text-gray-700">"*" indicates required fields</p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name *</label>
              <input type="text" placeholder="First" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">&nbsp;</label>
              <input type="text" placeholder="Last" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone *</label>
              <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Time *</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Requested Appointment Date *</label>
              <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Reason for Appointment *</label>
            <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300" rows={4}></textarea>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-[#c5a46d] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#b8945e] transition-colors">Submit</button>
          </div>
        </form>
      </div>
      <div className='py-32'></div>
    </div>
  );
};

export default AppointmentForm;
