"use client";
import React, { useState } from 'react';

const Teeth: React.FC = () => {
  const initialSliderPositions = [50, 50, 50, 50];
  const [sliderPositions, setSliderPositions] = useState<number[]>(initialSliderPositions);

  const handleSliderChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderPositions = [...sliderPositions];
    newSliderPositions[index] = Number(event.target.value);
    setSliderPositions(newSliderPositions);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[95rem] mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#8b6e34]">Stunning Smiles Start Here</h2>
        <p className="text-xl text-gray-700 mb-8">
          Do you want to enjoy <span className="font-semibold">exceptional oral health and an amazing smile</span> that you can show off with pride? Just give us a call and schedule an in-person appointment to get started.
        </p>
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative w-64 h-64 overflow-hidden rounded-md">
              <div className="absolute inset-0">
                <img
                  src={`/images/teeth${i}.png`}
                  alt={`Teeth ${i}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ clipPath: `polygon(0 0, ${sliderPositions[i]}% 0, ${sliderPositions[i]}% 100%, 0 100%)` }}
                />
                <img
                  src={`/images/teeth${i}white.png`}
                  alt={`Teeth ${i} White`}
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
                className="absolute top-1/2 left-0 w-full h-0.5 bg-transparent cursor-pointer z-10 slider"
                style={{ transform: 'translateY(-50%)', appearance: 'none' }}
              />
              <style jsx>{`
                .slider::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 24px;
                  height: 24px;
                  background: #8f7c54;
                  border-radius: 50%;
                  border: none;
                  cursor: pointer;
                }

                .slider::-moz-range-thumb {
                  width: 24px;
                  height: 24px;
                  background: #8f7c54;
                  border-radius: 50%;
                  border: none;
                  cursor: pointer;
                }

                .slider::-webkit-slider-runnable-track {
                  width: 100%;
                  height: 0px; /* Remove the horizontal line */
                  cursor: pointer;
                }

                .slider::-moz-range-track {
                  width: 100%;
                  height: 0px; /* Remove the horizontal line */
                  cursor: pointer;
                }

                .slider::-ms-track {
                  width: 100%;
                  height: 0px; /* Remove the horizontal line */
                  cursor: pointer;
                }
              `}</style>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-[#8b6e34] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#6b5525] transition-colors duration-300">
          <a href='/gallery'>Gallery</a>
        </button>
      </div>
    </div>
  );
};

export default Teeth;
