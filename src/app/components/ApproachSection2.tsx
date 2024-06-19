"use client";
import { useState, useEffect } from 'react';

const carouselData = [
  {
    heading: 'Experience and Expertise',
    text: `In addition to certification by the American Board of General Dentistry, Dr. Edmonds is a member of the American Academy of Cosmetic Dentistry, International Congress of Oral Implantologists, Academy of General Dentistry, and more.`,
  },
  {
    heading: 'Comprehensive Dentistry',
    text: `Whether you need extensive restorative work, cosmetic enhancements, or just a check-up and cleaning, you can count on Dr. Edmonds and his team.`,
  },
  {
    heading: 'Advanced Technology',
    text: `In keeping with our commitment to quality, our office is equipped with the latest technology, including intra-oral imaging, digital X-rays, and 3D cone beam CT scanning for accurate diagnosis and treatment planning.`,
  },
  {
    heading: 'Patient-Centered Care',
    text: `In our office, dentistry is not about teeth. It is about people. We seek to develop long-term patient relationships with customized treatment to help each individual achieve and maintain optimal oral health.`,
  },
];

const ApproachSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setIsFading(false);
      }, 500); // Duration of the fade animation
    }, 10000); // Interval for rotating slides (10 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f9f4e4] py-16">
      <div className="max-w-[95rem] mx-auto p-8 text-center">
        <img src='/images/d10.png' className="mx-auto h-64"/>
        <h2 className="text-4xl font-bold mb-6 text-left text-[#8b6e34]">What Sets Us Apart</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`w-full lg:w-1/2 ${isFading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <div className="bg-white mt-12 p-12 rounded-md shadow-md flex flex-col justify-between w-full">
              <div>
                <h3 className="text-4xl font-semibold mb-4 text-gray-800">{carouselData[currentIndex].heading}</h3>
                <p className="text-xl text-gray-700">{carouselData[currentIndex].text}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src='/images/d9.png'
              alt={carouselData[currentIndex].heading}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection2;
