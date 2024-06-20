import React from 'react';

const MeetTheDoctors: React.FC = () => {
  return (
    <div className="w-full bg-[#f9f4e4] py-16">
      <div className="max-w-[95rem] mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#8b6e34]">Meet The Doctors</h2>
        <div className="flex justify-around mt-8">
          {/* Doctor 1 */}
          <div className="flex flex-row items-center">
            <img
              src="/images/doctor1.png"
              alt="Dr. Andrew Edmonds"
              className="w-40 h-40 rounded-md shadow-md"
            />
            <div className='flex flex-col items-center p-8'>
                <h3 className="text-2xl text-black font-bold mt-4">DR. ANDREW EDMONDS</h3>
                <p className="text-lg text-black font-semibold mt-2 flex items-start">AFFILIATIONS</p>
                <div className="flex space-x-2 mt-2">
                <img src="/images/affiliation1.png" alt="Affiliation 1" className="w-24 h-24" />
                <img src="/images/affiliation2.png" alt="Affiliation 2" className="w-24 h-24" />
                <img src="/images/affiliation3.png" alt="Affiliation 3" className="w-24 h-24" />
                <img src="/images/affiliation4.png" alt="Affiliation 4" className="w-24 h-24" />
                </div>
                <button className="mt-4 bg-[#8b6e34] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#6b5525] transition-colors duration-300">
                Read More
                </button>
            </div>
            
          </div>

          {/* Doctor 2 */}
          <div className="flex flex-row items-center">
            <img
              src="/images/doctor2.png"
              alt="Dr. Brenna Sura"
              className="w-40 h-50 rounded-md shadow-md"
            />
            <div className='flex flex-col items-center p-8'>
                <h3 className="text-2xl text-black font-bold mt-4">DR. BRENNA SURA</h3>
                <p className="text-lg font-semibold text-black mt-2">AFFILIATIONS</p>
                <div className="flex space-x-2 mt-2">
                <img src="/images/affiliation3.png" alt="Affiliation 3" className="w-24 h-24" />
                <img src="/images/affiliation4.png" alt="Affiliation 4" className="w-24 h-24" />
                </div>
                <button className="mt-4 bg-[#8b6e34] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#6b5525] transition-colors duration-300">
                Read More
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheDoctors;
