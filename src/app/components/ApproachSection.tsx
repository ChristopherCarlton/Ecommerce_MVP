"use client";
import { useState } from 'react';

const carouselData = [
  {
    image: '/images/d1.png',
    heading: 'Modern Technology and Techniques',
    text: `Our office is at the forefront of dental innovations, committed to top-notch care using the latest equipment.
           We offer digital X-rays that produce fast and accurate images while reducing radiation exposure.

           We've embraced laser dentistry’s groundbreaking changes, providing pain-free solutions for a variety of dental needs.
           By merging contemporary practices with a welcoming atmosphere, we’re redefining what it means to visit the dentist.`,
  },
  {
    image: '/images/d2.png',
    heading: 'Preventive and Comprehensive Dental Solutions',
    text: `Our dental practice places a strong emphasis on preventive and comprehensive treatments. We strive to keep your teeth healthy, identify potential problems early, and provide thorough care that addresses the whole picture of your oral health.
           Regular check-ups and cleanings are key components of our approach, alongside education on good oral hygiene practices. We recognize that catching issues before they escalate can save you time, discomfort, and expense in the long run.`,
  },
  {
    image: '/images/d3.png',
    heading: 'Comfortable and Relaxing Environment',
    text: `In our dental studio, recognizing the anxiety that often accompanies a trip to the dentist is a top priority. That’s why we’ve crafted a haven for oral care in Georgetown, TX, where relaxation and health converge beautifully.
           We are committed to changing your perception of dental visits by coupling top-notch oral health treatments with an environment that radiates tranquility and confidence in your smile journey.`,
  },
  {
    image: '/images/d4.png',
    heading: 'Compassionate and Patient-Centered Care',
    text: `Our friendly staff and dentists at 4405 Dental Studio prioritize creating a welcoming environment where every person feels valued and cared for. We approach dentistry with kindness, taking time to listen to concerns, explain procedures clearly, and provide support throughout each visit.`,
  },
  {
    image: '/images/d5.png',
    heading: 'Individualized Treatment Plans',
    text: `Every smile is one of a kind, and that’s why treatments are designed just for you, based on your own dental needs and what you want to achieve. Our skilled dentists really listen to what you have to say, carefully check the health of your mouth, and then suggest treatments that match how you live your life and what you prefer.`,
  },
];

const ApproachSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full bg-[#f9f4e4] py-16">
      <div className="max-w-[95rem] mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-left text-[#8b6e34]">Our Approach to Dental Care</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-stretch">
            <img
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].heading}
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="flex items-stretch">
            <div className="bg-white p-12 rounded-md shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-semibold mb-4 text-gray-800">{carouselData[currentIndex].heading}</h3>
                <p className="text-xl text-gray-700">{carouselData[currentIndex].text}</p>
              </div>
            </div>
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

export default ApproachSection;
