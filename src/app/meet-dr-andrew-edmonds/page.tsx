import React from 'react';

const MeetDoctor: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-52">
        <h1 className="text-5xl font-bold text-center">Meet Dr. Andrew Edmonds</h1>
      </div>
      <main className="flex flex-col items-center mt-32 px-4 w-full">
        <section className="w-full py-16">
          <div className="max-w-[95rem] mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-[#f9f4e4] p-8 rounded-md shadow-md">
              <h3 className="text-2xl font-bold text-[#8b6e34] mb-4">Why am I a dentist?</h3>
              <p className="text-lg text-gray-700 mb-4">
                I am so thankful to get to wake up every day and do what I do! I love my profession and I wouldn’t want to spend my life doing anything else. I love dentistry because it allows me to help people in so many ways.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                There is nothing better than getting someone out of pain, restoring function to allow people to eat properly and the foods they enjoy or designing the smile someone has dreamed about since they were a teenager.
              </p>
              <p className="text-lg text-gray-700">
                Making someone smile makes them overall happier and healthier. Did you know it has been shown that laughter can even improve your immune system and overall health?
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/images/doctor1.png" alt="Dr. Andrew Edmonds" className="rounded-lg shadow-md object-cover" />
            </div>
          </div>
        </section>
        <section className="w-screen py-36 bg-[#f9f4e4]">
          <div className="max-w-[80rem] bg-white mx-auto text-center p-8 shadow-xl rounded-md">
            <h2 className="text-3xl font-bold text-[#8b6e34] text-start mb-6">Dental Background</h2>
            <p className="text-lg text-gray-700 mb-6">
              I attended the Western University of Health Sciences School of Dentistry. The technology and materials change quickly in dentistry and I pride myself on doing my best to keep up with the advancements and offer them to my patients. I have taken over 200 hours of continued education in the last year alone, which is much more than the 12-hour annual requirement. I have studied with some of the most renowned dental professionals and focused my studies in cosmetic dentistry, full mouth rehabilitation, implant dentistry, bone grafting, and sedation dentistry. I am currently finishing the requirements to obtain my Master of Oral Implantology status from the California Implant Institute, my fellowship in the International Congress of Oral Implantologists and my fellowship in the Academy of General Dentistry.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <img src="/images/affiliation1.png" alt="Affiliation 1" className="h-20" />
              <img src="/images/affiliation2.png" alt="Affiliation 2" className="h-20" />
              <img src="/images/affiliation3.png" alt="Affiliation 3" className="h-20" />
              <img src="/images/affiliation4.png" alt="Affiliation 4" className="h-20" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">About me</h3>
            <p className="text-lg text-gray-700 mb-4">
              I was born in Austin, TX and always knew this is where I wanted to end up. My favorite foods are French fries and ice cream. I have 2 dogs; a Yorkie and a Brittany spaniel. Some of my favorite activities include: golfing, wakeboarding, cars and spending time with my wife and 2 fur babies.
            </p>
          </div>
        </section>
        <section className="w-screen py-36">
          <div className="max-w-[80rem] bg-[#8f7c54] mx-auto text-white text-start p-32 shadow-xl rounded-md">
            <h2 className='text-3xl font-bold pb-4'>Things You Can Expect From Me</h2>
            <p>I will answer all of your questions until you fully understand why I am recommending treatment. You will not be upsold unnecessary procedures. I believe in honesty and transparency -I will not let insurance dictate your treatment plan! This only leads to bigger problems in the end. Just because it isn’t covered, doesn’t mean it isn’t necessary. I will do my best to figure out WHY things are happening so we can figure out how to prevent, not just fix. I will be welcoming to all concerns you might have with me or our office. We want to provide you the best care possible and with your feedback, we can make that happen! -I love helping others and will give back to the community and others as much as possible!</p>
          </div>
        </section>




      </main>
    </div>
  );
};

export default MeetDoctor;
