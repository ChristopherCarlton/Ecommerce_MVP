import React from 'react';
import HeaderPage from '../components/HeaderPage';
import { FaFacebookF, FaGoogle, FaYelp, FaInstagram, FaPinterest, FaYoutube, FaPhoneVolume, FaRegClock, FaMapMarkerAlt, FaThumbsUp } from 'react-icons/fa';

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <HeaderPage title="Contact Us" />
      <main className="bg-white text-black flex flex-col lg:flex-row w-full mx-auto p-8 py-36 space-y-8 lg:space-y-0 lg:space-x-8">
        <section className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">For questions or concerns, please use the form below. If your matter is URGENT, please call us at <a href="tel:(512) 686-2525" className="text-blue-500">(512) 686-2525</a>, and DO NOT use the form below.</h2>
          <p className="text-sm text-gray-500">"*" indicates required fields</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Your Name *</label>
              <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Your Email *</label>
              <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
              <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 rounded-md p-2"></textarea>
            </div>
            <button type="submit" className="bg-[#c5a46d] text-white py-2 px-4 rounded-md">Submit</button>
          </form>
        </section>
        <section className="w-full lg:w-1/2 bg-[#f9f4e4] text-black p-8 rounded-md shadow-md space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <FaPhoneVolume className="text-3xl text-[#8b6e34]" />
              <div>
                <h3 className="text-lg font-bold">Contact Info</h3>
                <p>Phone: <a href="tel:(512) 686-2525" className="text-blue-500">(512) 686-2525</a></p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-[#8b6e34]" />
              <div>
                <h3 className="text-lg font-bold">Location</h3>
                <p>4405 Williams Dr Ste 300<br />Georgetown, TX 78628</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaRegClock className="text-3xl text-[#8b6e34]" />
              <div>
                <h3 className="text-lg font-bold">Office Hours</h3>
                <p>Mon: 8am-6pm<br />
                   Tue, Wed, Thur: 8am-4pm<br />
                   Fri: 8am-1pm<br />
                   Sat & Sun: Closed</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaThumbsUp className="text-3xl text-[#8b6e34]" />
              <div>
                <h3 className="text-lg font-bold">Follow Us</h3>
                <div className="flex space-x-2">
                  <a href="https://www.facebook.com/4405dentalstudio/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a href="https://www.google.com/maps/place/4405+Dental+Studio/@30.682635,-97.715682,16z/data=!4m6!3m5!1s0x86452bd70c33c2c1:0xc3e27a4915e757d5!8m2!3d30.6826352!4d-97.7156818!16s%2Fg%2F11fk0lrx07?ll=30.682635,-97.715682&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=14114978636451239893&entry=tts" aria-label="Google" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
                  <a href="https://www.yelp.com/biz/4405-dental-studio-georgetown" aria-label="Yelp" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
                  <a href="https://www.instagram.com/4405dentalstudio/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://www.pinterest.com/4405dentalstudio/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                  <a href="https://www.youtube.com/channel/UCjCOqaHnN7K735FpfrAOn3Q" aria-label="Youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6412594080644!2d-97.7156818!3d30.6826352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86452bd70c33c2c1%3A0xc3e27a4915e757d5!2s4405%20Dental%20Studio!5e0!3m2!1sen!2sus!4v1624481830195!5m2!1sen!2sus" 
              width="100%" 
              height="250" 
              className="rounded-md shadow-md border-0" 
              allowFullScreen 
              loading="lazy"></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
