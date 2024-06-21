import React from 'react';
import HeaderPage from '../components/HeaderPage';

const MeetDoctorBrenna: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <HeaderPage title='Meet DR. Brenna Sura'/>
      <main className="flex flex-col items-center mt-32 px-4 w-full">
        <section className="w-full py-16">
          <div className="max-w-[95rem] mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-[#f9f4e4] p-8 rounded-md shadow-md">
              <h3 className="text-2xl font-bold text-[#8b6e34] mb-4">Why am I a dentist?</h3>
              <p className=" text-gray-700 mb-4">
                I love preserving and restoring smiles! I developed a passion for dentistry at a very young age after years of orthodontic work transformed my mouth. I was fascinated with the changes as they were occurring and the impact they had on my appearance and self-esteem. Since that early age, I have learned much more about the importance of a healthy dentition and oral cavity, both aesthetically and functionally.
              </p>
              <p className=" text-gray-700 mb-4">
                As the primary gateway into the body, the mouth plays a crucial role in regulating our overall health. Maintaining good oral health and proper function is necessary to maintain our quality of life. These basic principles are why I take such care in listening, educating, and formulating solutions to help all my patients reach their optimal dental and overall health.
              </p>
              <p className=" text-gray-700">
                I have met many people who have developed a fear of dentists from a previous bad experience. I am very passionate about easing these fears and anxieties and cultivating a different reputation for dentistry. I treat my patients like family and will always think and formulate treatment plans with the best intentions for my patients in mind. Making your dental visit a positive experience is my top priority!
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/images/doctor3.png" alt="Dr. Brenna Sura" className="rounded-lg shadow-md object-cover" />
            </div>
          </div>
        </section>
        <section className="w-screen py-36 bg-[#f9f4e4]">
          <div className="max-w-[80rem] bg-white mx-auto text-center p-8 shadow-xl rounded-md">
            <h2 className="text-3xl font-bold text-[#8b6e34] text-start mb-6">Dental Background</h2>
            <p className="text-lg text-gray-700 mb-6">
                I received my Doctor of Dental Surgery (DDS) degree with distinction from UT Health San Antonio School of Dentistry in 2016. I was fortunate enough to learn advanced clinical techniques from some of dentistry’s leading professionals and work with the industry’s leading technology. I even got to place the first Straumann zirconia implant in the country!
                I received numerous awards during my dental school career, including the T. Schoeni Wolfe DDS Memorial Award for delivering exceptional patient-centered care and the International Congress of Oral Implantology Pre-Doctoral Student Achievement Award for excelling in implant placement and restoration.
                I was selected for multiple programs that provided advanced training, including Geriatrics surgery, Implantology, and our Orthodontic program that commenced in Invisalign certification.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              {/* <img src="/images/affiliation1.png" alt="Affiliation 1" className="h-20" />
              <img src="/images/affiliation2.png" alt="Affiliation 2" className="h-20" /> */}
              <img src="/images/affiliation3.png" alt="Affiliation 3" className="h-20" />
              <img src="/images/affiliation4.png" alt="Affiliation 4" className="h-20" />
            </div>
          </div>
        </section>
        <section className="w-screen py-28">
            <div className="max-w-[80rem] bg-[#8f7c54] mx-auto text-white text-start p-24 shadow-xl rounded-md">
                <h2 className="text-3xl font-bold pb-4">About Me</h2>
                <p className="mb-4">
                I grew up in Austin, Texas, and graduated with my BS in Biochemistry from St. Edward’s University. I met my husband while playing on opposing intramural soccer teams at our Health Science Center in San Antonio.
                </p>
                <p className="mb-4">
                We have 2 Goldendoodles named Raven and Luna that make us laugh daily. I am a sports fanatic and enjoy almost all games and activities. My favorite sports to play are soccer and volleyball. I love to play all lawn games.
                </p>
                <p className="mb-4">
                I enjoy traveling to new places and spending time with my family. My husband and I have recently developed an obsession with Crossfit, and you can catch us working out at our local Crossfit gym in the early mornings!
                </p>
            </div>
        </section>





      </main>
    </div>
  );
};

export default MeetDoctorBrenna;
