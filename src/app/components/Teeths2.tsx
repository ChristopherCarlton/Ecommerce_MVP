"use client";
import React, { useState } from 'react';

export const Teeths2: React.FC = () => {
  const initialSliderPositions = [50, 50, 50, 50];
  const [sliderPositions, setSliderPositions] = useState<number[]>(initialSliderPositions);

  const handleSliderChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderPositions = [...sliderPositions];
    newSliderPositions[index] = Number(event.target.value);
    setSliderPositions(newSliderPositions);
  };

  return (
    <div className="w-full bg-[#f9f4e4] py-16">
      <div className="max-w-[95rem] mx-auto p-8 text-start">
        <h3 className="text-xl text-black font-bold mb-8">Venners Case 02 Before and After</h3>
        <div className="flex justify-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative w-64 h-64 overflow-hidden rounded-md">
              <div className="absolute inset-0">
                <img
                  src={`/images/vc${i + 1}.png`}
                  alt={`Teeth ${i + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ clipPath: `polygon(0 0, ${sliderPositions[i]}% 0, ${sliderPositions[i]}% 100%, 0 100%)` }}
                />
                <img
                  src={`/images/vc${i + 1}a.png`}
                  alt={`Teeth ${i + 1} After`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ clipPath: `polygon(${sliderPositions[i]}% 0, 100% 0, 100% 100%, ${sliderPositions[i]}% 100%)` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPositions[i]}
                onChange={(event) => handleSliderChange(i, event)}
                className="absolute top-1/2 left-0 w-full h-0.5 bg-transparent cursor-pointer z-10"
                style={{ transform: 'translateY(-50%)' }}
              />
            </div>
          ))}
          <div className="relative w-64 h-64 overflow-hidden rounded-md">
            <img
              src={`/images/v.png`}
              alt={`Teeth 5`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teeths2;
