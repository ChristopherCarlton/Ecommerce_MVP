"use client";
import React, { useState } from 'react';

export const Teeths: React.FC = () => {
  const initialSliderPositions = [50, 50, 50];
  const [sliderPositions, setSliderPositions] = useState<number[]>(initialSliderPositions);

  const handleSliderChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderPositions = [...sliderPositions];
    newSliderPositions[index] = Number(event.target.value);
    setSliderPositions(newSliderPositions);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[95rem] mx-auto p-8 text-start">
        <h2 className="text-4xl font-bold mb-4 text-[#8b6e34]">Smile Gallery</h2>
        <h3 className="text-xl text-black font-bold text-start mb-8">Venners Case 01 Before and After</h3>
        <div className="flex justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative w-64 h-64 overflow-hidden rounded-md">
              <div className="absolute inset-0">
                <img
                  src={`/images/v${i + 1}before.png`}
                  alt={`Teeth ${i + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ clipPath: `polygon(0 0, ${sliderPositions[i]}% 0, ${sliderPositions[i]}% 100%, 0 100%)` }}
                />
                <img
                  src={`/images/v${i + 1}.png`}
                  alt={`Teeth ${i + 1} White`}
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
          <div className="relative w-64 h-64 overflow-hidden rounded-md">
            <img
              src={`/images/v.png`}
              alt={`Teeth 4`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teeths;
