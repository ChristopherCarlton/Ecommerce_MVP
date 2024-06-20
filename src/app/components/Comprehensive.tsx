"use client";
import React, { useState } from 'react';

const Comprehensive: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const services = [
    {
      image: '/images/d12.png',
      text: "Looking after your family’s oral health is easy in Georgetown with dental services tailored to every age. Kids can experience their first dental visit without fear, teens can get the braces they need, and adults of all ages will find regular cleanings and exams to keep their teeth healthy. Each person gets special attention for a truly personalized dental care experience.",
      bgColor: '#8b6e34'
    },
    {
      image: '/images/d13.png',
      text: "Taking care of your teeth is key to a bright and lasting smile. At our dental clinic in Georgetown, we focus on prevention with detailed exams and cleanings that help you keep your mouth in top shape. Our experienced team is ready to handle routine dental work like fillings, root canals, and tooth removals, always keeping your comfort as a priority. From young children to grown-ups, we deliver full-spectrum dental services that ensure everyone in the neighborhood smiles with ease and assurance.",
      bgColor: '#8b6e34'
    },
    {
      image: '/images/d14.png',
      text: "Orthodontic treatments correct misaligned teeth and jaws, improving not only the appearance of your smile but also your overall oral function. 4405 Dental Studio embraces the latest in orthodontic technology to provide patients with options like traditional metal braces, clear ceramic braces, and innovative clear aligner systems such as Invisalign.",
      bgColor: '#8b6e34'
    }
  ];

  return (
    <section className="w-full bg-[#f9f4e4] py-16">
      <div className="max-w-[95rem] mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#8b6e34]">Our Comprehensive Dental Services</h2>
        <p className="text-xl text-gray-700 mb-8">
          Our comprehensive list of dental services and individual care is the standard you have been looking for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[40rem] rounded-md shadow-md overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={service.image}
                  alt={`Service ${index}`}
                  className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${hoverIndex === index ? 'opacity-0' : 'opacity-100'}`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center text-center p-8 transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundColor: service.bgColor }}
                >
                  <p className="text-white text-lg">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comprehensive;
