"use client";
import React, { useState } from 'react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      text: "“From beginning to end, 4405 Studio made it so easy to get top of the line care and stunning custom dental work with precise size and coloring. I had faced so many road blocks with other offices but Dr. Sura and team made this the easiest dental work I’ve had done. They helped me finally get my perfect smile that has taken a lifetime to achieve!!”",
      author: "Ellen S",
      index: "4 / 4"
    },
    {
      text: "“Absolutely love this dentist office. When I moved to TX 2 days later I was in agonizing pain and they took care of me.. my kids came with me and they were so accommodating and welcoming. I established care there for my kids and they get excited when I say it’s time to go to the dentist. Love the staff super friendly! Take your while family.”",
      author: "Nefertiti L",
      index: "3 / 4"
    },
    {
      text: "“Excellent experience. Having to find a new dentist is not the easiest experience, but 405 Dental Studio turned out to be an excellent choice for myself. High-tech tools and a staff that actually reads your submittals before arrival. The staff was friendly and did everything in their power to make the experience quick, easy, and comfortable.”",
      author: "David H",
      index: "2 / 4"
    },
    {
      text: "“High-tech and new office that is nicely decorated. I was in there for less than an hour and they did a fantastic job. Going to the dentist is not my favorite activity… there are flat screens to watch TV everywhere (including the ceiling). This is the best dental experience I’ve had.”",
      author: "Lauren H",
      index: "1 / 4"
    }
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleNext = () => {
    setCurrentStoryIndex((currentStoryIndex + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentStoryIndex((currentStoryIndex - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentStoryIndex];

  return (
    <section className="w-full bg-white py-44">
      <div className="max-w-[95rem] mx-auto p-32 text-center text-white relative bg-[#8b6e34] rounded-md shadow-md">
        <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
        <p className="text-xl mb-8">{currentStory.text}</p>
        <p className="text-lg">{currentStory.author}</p>
        <p className="text-lg mt-4">{currentStory.index}</p>
        <button onClick={handleNext} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-2xl">
          &lt;
        </button>
        <button onClick={handlePrev} className="absolute right-20 top-1/2 transform -translate-y-1/2 text-2xl">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;
