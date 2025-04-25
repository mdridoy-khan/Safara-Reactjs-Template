import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram , FaWhatsapp } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 shadow-md pt-10 pb-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        <div>
          <a href="#" className='text-secondary text-xl md:text-2xl font-bold'>Logo</a>
        </div>

        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Resources and Policies</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">About Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Hire a Worker</a></li>
            <li><a href="#">Find a Partner</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Get the App</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
              <SiGoogleplay className="text-lg text-blue-400" /> Google Play
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
              <SiAppstore className="text-lg" /> App Store
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Brand Partners</h3>
          <div className="flex items-center gap-3 mb-2">
            <FaWhatsapp className="text-green-500" />
            <span className='text-red-500'>@explore</span>
          </div>
          <div className="flex gap-2">
            <p className='text-secondary text-sm'>Follow Link:</p>
            <div className='flex gap-2'>
                <a href="#"><FaFacebookF className="text-blue-500 text-sm" /></a>
                <a href="#"><FaInstagram  className="text-red-400 text-sm" /></a>
                <a href="#"><FaYoutube className="text-red-600 text-sm" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
